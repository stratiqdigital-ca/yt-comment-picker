import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const verificationId = randomUUID().slice(0, 8);

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