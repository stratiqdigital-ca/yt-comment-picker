import { NextResponse } from "next/server";
import { extractYouTubeVideoId } from "@/lib/video-id";
import { getVideoMeta, fetchYouTubeComments } from "@/lib/youtube";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { redis } from "@/lib/redis";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const videoUrl = body.videoUrl as string;

    if (!videoUrl) {
      return NextResponse.json(
        { error: "YouTube URL is required." },
        { status: 400 }
      );
    }

    const videoId = extractYouTubeVideoId(videoUrl);

    if (!videoId) {
      return NextResponse.json(
        { error: "Invalid YouTube URL." },
        { status: 400 }
      );
    }

    const cacheKey = `comments:${videoId}`;

    const redisCache = await redis.get(cacheKey);

    if (redisCache) {
      return NextResponse.json({
        source: "redis",
        videoId,
        ...redisCache,
      });
    }

    const { data: dbCache } = await supabaseAdmin
      .from("comment_cache")
      .select("*")
      .eq("video_id", videoId)
      .single();

    const twelveHoursAgo = Date.now() - 1000 * 60 * 60 * 12;

    if (
      dbCache &&
      new Date(dbCache.updated_at).getTime() > twelveHoursAgo
    ) {
      const payload = {
        meta: {
          videoId,
          title: dbCache.title,
          channelTitle: dbCache.channel_title,
          thumbnailUrl: dbCache.thumbnail_url,
        },
        comments: dbCache.comments,
        totalComments: dbCache.total_comments,
      };

      await redis.set(cacheKey, payload, { ex: 60 * 60 });

      return NextResponse.json({
        source: "supabase",
        videoId,
        ...payload,
      });
    }

    const meta = await getVideoMeta(videoId);
    const comments = await fetchYouTubeComments(videoId);

    const payload = {
      meta,
      comments,
      totalComments: comments.length,
    };

    await supabaseAdmin.from("comment_cache").upsert({
      video_id: videoId,
      video_url: videoUrl,
      title: meta.title,
      channel_title: meta.channelTitle,
      thumbnail_url: meta.thumbnailUrl,
      comments,
      total_comments: comments.length,
      updated_at: new Date().toISOString(),
    });

    await redis.set(cacheKey, payload, { ex: 60 * 60 });

    return NextResponse.json({
      source: "youtube",
      videoId,
      ...payload,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Something went wrong." },
      { status: 500 }
    );
  }
}