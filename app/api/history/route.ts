import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
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