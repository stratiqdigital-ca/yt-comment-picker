import type { VideoMeta, YouTubeComment } from "@/types/comment";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

export async function getVideoMeta(videoId: string): Promise<VideoMeta> {
  const url = new URL("https://www.googleapis.com/youtube/v3/videos");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("id", videoId);
  url.searchParams.set("key", YOUTUBE_API_KEY || "");

  const res = await fetch(url.toString(), { cache: "no-store" });
  const data = await res.json();

  if (!res.ok || !data.items?.length) {
    throw new Error("Video not found or unavailable.");
  }

  const snippet = data.items[0].snippet;

  return {
    videoId,
    title: snippet.title,
    channelTitle: snippet.channelTitle,
    thumbnailUrl:
      snippet.thumbnails?.maxres?.url ||
      snippet.thumbnails?.high?.url ||
      snippet.thumbnails?.medium?.url ||
      "",
      publishedAt: snippet.publishedAt || "",
  };
}

export async function fetchYouTubeComments(videoId: string) {
  const comments: YouTubeComment[] = [];
  let pageToken = "";
  let requestCount = 0;
  const maxRequests = 300;

  while (requestCount < maxRequests) {
    const url = new URL("https://www.googleapis.com/youtube/v3/commentThreads");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("videoId", videoId);
    url.searchParams.set("maxResults", "100");
    url.searchParams.set("textFormat", "plainText");
    url.searchParams.set("key", YOUTUBE_API_KEY || "");

    if (pageToken) {
      url.searchParams.set("pageToken", pageToken);
    }

    const res = await fetch(url.toString(), { cache: "no-store" });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error?.message || "Failed to fetch comments.");
    }

    for (const item of data.items || []) {
      const top = item.snippet?.topLevelComment?.snippet;

      if (!top) continue;

      comments.push({
        id: item.id,
        authorName: top.authorDisplayName || "Unknown",
        authorChannelId: top.authorChannelId?.value || "",
        authorProfileImageUrl: top.authorProfileImageUrl || "",
        text: top.textDisplay || "",
        publishedAt: top.publishedAt || "",
        likeCount: top.likeCount || 0,
      });
    }

    requestCount++;

    if (!data.nextPageToken) break;
    pageToken = data.nextPageToken;
  }

  return comments;
}