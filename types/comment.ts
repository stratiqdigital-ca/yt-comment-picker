export type YouTubeComment = {
  id: string;
  authorName: string;
  authorChannelId: string;
  authorProfileImageUrl: string;
  text: string;
  publishedAt: string;
  likeCount: number;
};

export type VideoMeta = {
  videoId: string;
  title: string;
  channelTitle: string;
  thumbnailUrl: string;
  publishedAt: string;
};