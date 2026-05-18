import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ytgiveawaypicker.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: `${baseUrl}/youtube-comment-picker`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/youtube-shorts-giveaway-picker`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/random-youtube-comment-picker`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.3,
    },

    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      priority: 0.3,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.3,
    },
  ];
}