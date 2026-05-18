export function filterComments({
  comments,
  keyword,
  removeDuplicates,
  emoji,
  timeWindowMinutes,
  videoPublishedAt,
}: any) {
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

export function pickRandomWinners(comments: any[], count: number) {
  const shuffled = [...comments].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}