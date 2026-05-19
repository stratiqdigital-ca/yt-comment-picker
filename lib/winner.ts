import type { YouTubeComment } from "@/types/comment";

type FilterOptions = {
  comments: YouTubeComment[];
  keyword: string;
  removeDuplicates: boolean;
  emoji: string;
  timeWindowMinutes: number | null;
  videoPublishedAt: string;
};

export function filterComments({
  comments,
  keyword,
  removeDuplicates,
  emoji,
  timeWindowMinutes,
  videoPublishedAt,
}: FilterOptions): YouTubeComment[] {
  let filtered = [...comments];

  if (keyword?.trim()) {
    filtered = filtered.filter((comment) =>
      comment.text.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  if (emoji?.trim()) {
    filtered = filtered.filter((comment) =>
      comment.text.includes(emoji.trim())
    );
  }

  if (timeWindowMinutes && videoPublishedAt) {
    const videoTime = new Date(videoPublishedAt).getTime();
    const cutoffTime = videoTime + Number(timeWindowMinutes) * 60 * 1000;

    filtered = filtered.filter((comment) => {
      const commentTime = new Date(comment.publishedAt).getTime();
      return commentTime >= videoTime && commentTime <= cutoffTime;
    });
  }

  if (removeDuplicates) {
    const map = new Map();

    filtered.forEach((comment) => {
      const key = comment.authorChannelId || comment.authorName;

      if (!map.has(key)) {
        map.set(key, comment);
      }
    });

    filtered = Array.from(map.values());
  }

  return filtered;
}

export function pickRandomWinners(comments: YouTubeComment[], count: number): YouTubeComment[] {
  const shuffled = [...comments];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}