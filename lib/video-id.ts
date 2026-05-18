export function extractYouTubeVideoId(input: string): string | null {
  try {
    const url = new URL(input.trim());

    if (url.hostname.includes("youtube.com")) {
      if (url.pathname === "/watch") {
        return url.searchParams.get("v");
      }

      if (url.pathname.startsWith("/shorts/")) {
        return url.pathname.split("/shorts/")[1]?.split("?")[0] || null;
      }

      if (url.pathname.startsWith("/embed/")) {
        return url.pathname.split("/embed/")[1]?.split("?")[0] || null;
      }
    }

    if (url.hostname.includes("youtu.be")) {
      return url.pathname.replace("/", "").split("?")[0] || null;
    }

    return null;
  } catch {
    return null;
  }
}