import { NextResponse, type NextRequest } from "next/server";
import { randomUUID } from "crypto";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "@/lib/redis";

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "1 m"),
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "anonymous";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();

    const verificationId = randomUUID().replace(/-/g, "").slice(0, 16);

    const {
      videoId,
      videoTitle,
      thumbnailUrl,
      winners,
      validEntries,
      settings,
    } = body;

    const { data, error } = await supabaseAdmin
      .from("draws")
      .insert({
        verification_id: verificationId,
        video_id: videoId,
        video_title: videoTitle,
        thumbnail_url: thumbnailUrl,
        winners,
        valid_entries: validEntries,
        settings,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      verificationId,
      draw: data,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message || "Failed to save draw.",
      },
      {
        status: 500,
      }
    );
  }
}