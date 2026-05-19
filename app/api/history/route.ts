import { NextResponse, type NextRequest } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "@/lib/redis";

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(30, "1 m"),
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
    const videoId = body.videoId;

    const { data, error } = await supabaseAdmin
      .from("draws")
      .select("*")
      .eq("video_id", videoId)
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return NextResponse.json({
      draws: data || [],
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message || "Failed to load history.",
      },
      {
        status: 500,
      }
    );
  }
}