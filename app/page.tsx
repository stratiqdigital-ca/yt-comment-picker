"use client";

import { useMemo, useState } from "react";
import toast from "react-hot-toast";

import Hero from "../components/Hero";
import SiteFooter from "../components/SiteFooter";
import HomepageMarketingSections from "../components/HomepageMarketingSections";
import VideoInput from "../components/VideoInput";
import VideoInfo from "../components/VideoInfo";
import WinnerSettings from "../components/WinnerSettings";
import WinnerReveal from "../components/WinnerReveal";
import WinnerCards from "../components/WinnerCards";
import CommentPreview from "../components/CommentPreview";
import HistorySection from "../components/HistorySection";
import LoadingScreen from "../components/LoadingScreen";

import {
  filterComments,
  pickRandomWinners,
} from "../lib/winner";

export default function HomePage() {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const [videoData, setVideoData] = useState<any>(null);

  const [keyword, setKeyword] = useState("");

  const [winnersCount, setWinnersCount] = useState(1);

  const [removeDuplicates, setRemoveDuplicates] =
    useState(true);

  const [revealing, setRevealing] = useState(false);

  const [revealName, setRevealName] = useState("");

  const [winners, setWinners] = useState<any[]>([]);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [timeWindowMinutes, setTimeWindowMinutes] = useState<number | null>(null);

  const [customMinutes, setCustomMinutes] = useState("");

  const [customWinnersCount, setCustomWinnersCount] = useState("");

  const [emoji, setEmoji] = useState("");

  const [verificationId, setVerificationId] = useState("");
  

  const validEntries = useMemo(() => {
    if (!videoData?.comments?.length) {
      return [];
    }

  return filterComments({
  comments: videoData.comments,
  keyword,
  removeDuplicates,
  emoji,
  timeWindowMinutes,
  videoPublishedAt: videoData.meta.publishedAt,
});
  }, [videoData, keyword, removeDuplicates, emoji, timeWindowMinutes]);
  const [history, setHistory] = useState<any[]>([]);

  async function loadHistory(videoId: string) {
  try {
    const res = await fetch("/api/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        videoId,
      }),
    });

    const json = await res.json();

    if (res.ok) {
      setHistory(json.draws || []);
    }
  } catch (error) {
    console.error(error);
  }
}
  async function handleLoadComments() {
    try {
      setLoading(true);

      setWinners([]);

      const res = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoUrl,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(
          json.error || "Failed to load comments."
        );
      }

      setVideoData(json);

await loadHistory(json.videoId);

    } catch (error: any) {
      toast.error(error.message || "Failed to load comments.");
    } finally {
      setLoading(false);
    }
  }

  function handlePickWinner() {
    if (!validEntries.length) {
      return;
    }

    setWinners([]);

    setRevealing(true);

    let ticks = 0;

    const interval = setInterval(() => {
      const random =
        validEntries[
          Math.floor(Math.random() * validEntries.length)
        ];

      setRevealName(random.authorName);

      ticks++;

      if (ticks >= 25) {
        clearInterval(interval);

        const selected = pickRandomWinners(
          validEntries,
          winnersCount
        );

        setTimeout(async () => {
  setWinners(selected);

  setRevealing(false);

  try {
  const saveRes = await fetch("/api/save-draw", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      videoId: videoData.meta.videoId,
      videoTitle: videoData.meta.title,
      thumbnailUrl: videoData.meta.thumbnailUrl,
      winners: selected,
      validEntries: validEntries.length,
      settings: {
        keyword,
        emoji,
        timeWindowMinutes,
        removeDuplicates,
        winnersCount,
      },
    }),
  });

  const saveJson = await saveRes.json();

  if (saveRes.ok) {
    setVerificationId(saveJson.verificationId);
  }

  await loadHistory(videoData.meta.videoId);

} catch (error) {
  console.error(error);
}

}, 600);
      }
    }, 80);
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div id="tool"></div>
      <Hero />

      <VideoInput
        videoUrl={videoUrl}
        setVideoUrl={setVideoUrl}
        loading={loading}
        onLoad={handleLoadComments}
      />

      {loading && <LoadingScreen />}

      {videoData && (
        <>
          <VideoInfo
            title={videoData.meta.title}
            channelTitle={videoData.meta.channelTitle}
            thumbnailUrl={videoData.meta.thumbnailUrl}
            totalComments={videoData.totalComments}
          />

          <WinnerSettings
             keyword={keyword}
             setKeyword={setKeyword}

             emoji={emoji}
             setEmoji={setEmoji}

             winnersCount={winnersCount}
             setWinnersCount={setWinnersCount}

             customWinnersCount={customWinnersCount}
             setCustomWinnersCount={setCustomWinnersCount}

             removeDuplicates={removeDuplicates}
             setRemoveDuplicates={setRemoveDuplicates}

             showEmojiPicker={showEmojiPicker}
             setShowEmojiPicker={setShowEmojiPicker}

             timeWindowMinutes={timeWindowMinutes}
             setTimeWindowMinutes={setTimeWindowMinutes}

             customMinutes={customMinutes}
             setCustomMinutes={setCustomMinutes}

             validEntriesCount={validEntries.length}
             />

          <section className="max-w-5xl mx-auto px-6 mt-6">
            <button
              onClick={handlePickWinner}
              className="w-full h-14 rounded-2xl bg-white text-black font-bold hover:scale-[1.01] transition"
            >
              Pick Winner
            </button>
          </section>

          <WinnerReveal
            revealing={revealing}
            revealName={revealName}
          />

          <WinnerCards
  winners={winners}
  verificationId={verificationId}
/>
          <HistorySection history={history} />
          <CommentPreview comments={videoData?.comments || []} />
        </>
      )}
      <HomepageMarketingSections />
    </main>
  );
}