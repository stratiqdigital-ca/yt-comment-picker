"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import Hero from "../components/Hero";
import VideoInfo from "../components/VideoInfo";
import WinnerSettings from "../components/WinnerSettings";
import WinnerReveal from "../components/WinnerReveal";
import WinnerCards from "../components/WinnerCards";
import CommentPreview from "../components/CommentPreview";
import HistorySection from "../components/HistorySection";
import LoadingScreen from "../components/LoadingScreen";
import HomepageMarketingSections from "@/components/HomepageMarketingSections";

import { filterComments, pickRandomWinners } from "../lib/winner";

export default function HomePage() {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState<any>(null);
  const [keyword, setKeyword] = useState("");
  const [winnersCount, setWinnersCount] = useState(1);
  const [removeDuplicates, setRemoveDuplicates] = useState(true);
  const [revealing, setRevealing] = useState(false);
  const [revealName, setRevealName] = useState("");
  const [winners, setWinners] = useState<any[]>([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [timeWindowMinutes, setTimeWindowMinutes] = useState<number | null>(null);
  const [customMinutes, setCustomMinutes] = useState("");
  const [customWinnersCount, setCustomWinnersCount] = useState("");
  const [emoji, setEmoji] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [history, setHistory] = useState<any[]>([]);
  const [showPickerFlow, setShowPickerFlow] = useState(false);
  // Track save errors so WinnerCards can show retry
  const [saveError, setSaveError] = useState("");
  const [saving, setSaving] = useState(false);

  const validEntries = useMemo(() => {
    if (!videoData?.comments?.length) return [];
    return filterComments({
      comments: videoData.comments, keyword, removeDuplicates, emoji,
      timeWindowMinutes, videoPublishedAt: videoData.meta.publishedAt,
    });
  }, [videoData, keyword, removeDuplicates, emoji, timeWindowMinutes]);

  const latestVerificationId = history.length > 0 ? history[0]?.verification_id : null;
  const hasExistingWinners = history.length > 0;

  async function loadHistory(videoId: string) {
    try {
      const res = await fetch("/api/history", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ videoId }) });
      const json = await res.json();
      if (res.ok) {
        setHistory(json.draws || []);
      } else {
        console.error("History load error:", json.error);
      }
    } catch (e) {
      console.error("History fetch failed:", e);
    }
  }

  async function handleLoadComments() {
    try {
      setLoading(true); setWinners([]); setShowPickerFlow(false); setVerificationId(""); setSaveError("");
      const res = await fetch("/api/comments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ videoUrl }) });
      const json = await res.json();
      if (!res.ok) {
        toast.error(json.error || "Failed to load comments.");
        throw new Error(json.error || "Failed to load comments.");
      }
      setVideoData(json);
      await loadHistory(json.videoId);
    } catch (e: any) {
      console.error("Load comments error:", e);
    } finally { setLoading(false) }
  }

  // Separate save function so it can be retried
  async function saveDrawResults(selected: any[]) {
    setSaving(true);
    setSaveError("");
    try {
      const saveRes = await fetch("/api/save-draw", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          videoId: videoData.videoId || videoData.meta?.videoId,
          videoTitle: videoData.meta.title,
          thumbnailUrl: videoData.meta.thumbnailUrl,
          winners: selected,
          validEntries: validEntries.length,
          settings: { keyword, emoji, timeWindowMinutes, removeDuplicates, winnersCount },
        }),
      });
      const saveJson = await saveRes.json();

      if (saveRes.ok && saveJson.verificationId) {
        setVerificationId(saveJson.verificationId);
        setSaveError("");
        toast.success("Winners saved! Verification page created.");
        await loadHistory(videoData.videoId || videoData.meta?.videoId);
      } else {
        const errMsg = saveJson.error || "Failed to save results. Please retry.";
        setSaveError(errMsg);
        toast.error(errMsg);
        console.error("Save draw error:", saveJson);
      }
    } catch (e: any) {
      const errMsg = e.message || "Network error saving results.";
      setSaveError(errMsg);
      toast.error(errMsg);
      console.error("Save draw exception:", e);
    } finally {
      setSaving(false);
    }
  }

  function handlePickWinner() {
    if (!validEntries.length) return;
    setWinners([]); setRevealing(true); setVerificationId(""); setSaveError("");
    let ticks = 0;
    const interval = setInterval(() => {
      const random = validEntries[Math.floor(Math.random() * validEntries.length)];
      setRevealName(random.authorName);
      ticks++;
      if (ticks >= 25) {
        clearInterval(interval);
        const selected = pickRandomWinners(validEntries, winnersCount);
        setTimeout(() => {
          setWinners(selected);
          setRevealing(false);
          // Save in background
          saveDrawResults(selected);
        }, 600);
      }
    }, 80);
  }

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div id="tool" />
      <Hero videoUrl={videoUrl} setVideoUrl={setVideoUrl} loading={loading} onLoad={handleLoadComments} />

      {loading && <LoadingScreen />}

      {videoData && (
        <>
          <VideoInfo title={videoData.meta.title} channelTitle={videoData.meta.channelTitle}
            thumbnailUrl={videoData.meta.thumbnailUrl} totalComments={videoData.totalComments} />

          {hasExistingWinners && !showPickerFlow && winners.length === 0 ? (
            <motion.section
              className="max-w-5xl mx-auto px-6 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-3xl p-8 text-center" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] mb-5"
                  style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)', color: 'var(--accent-text)' }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: 'var(--success)' }} />
                  This video has {history.length} previous giveaway draw{history.length > 1 ? 's' : ''}
                </div>

                <h3 className="text-2xl md:text-3xl font-black" style={{ color: 'var(--text-primary)' }}>
                  Winners Already Selected
                </h3>
                <p className="mt-3 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  This video already has giveaway results saved. View the existing winners or start a new draw with fresh filters.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                  <a
                    href={`/verify/${latestVerificationId}`}
                    target="_blank"
                    className="w-full sm:w-auto h-14 px-8 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition"
                    style={{ background: 'var(--accent)', color: 'var(--accent-on)', boxShadow: 'var(--shadow-accent)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                    </svg>
                    See Selected Winners
                  </a>

                  <button
                    onClick={() => setShowPickerFlow(true)}
                    className="w-full sm:w-auto h-14 px-8 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition"
                    style={{ background: 'var(--bg-tertiary)', border: '2px solid var(--accent-border)', color: 'var(--accent-text)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                    </svg>
                    Pick New Winners
                  </button>
                </div>

                {history[0]?.winners?.length > 0 && (
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Latest winners:</span>
                    {history[0].winners.map((w: any, i: number) => (
                      <span key={i} className="px-3 py-1.5 rounded-full text-sm font-semibold"
                        style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)', color: 'var(--accent-text)' }}>
                        #{i + 1} {w.authorName}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.section>
          ) : (
            <>
              <WinnerSettings
                keyword={keyword} setKeyword={setKeyword} emoji={emoji} setEmoji={setEmoji}
                winnersCount={winnersCount} setWinnersCount={setWinnersCount}
                customWinnersCount={customWinnersCount} setCustomWinnersCount={setCustomWinnersCount}
                removeDuplicates={removeDuplicates} setRemoveDuplicates={setRemoveDuplicates}
                showEmojiPicker={showEmojiPicker} setShowEmojiPicker={setShowEmojiPicker}
                timeWindowMinutes={timeWindowMinutes} setTimeWindowMinutes={setTimeWindowMinutes}
                customMinutes={customMinutes} setCustomMinutes={setCustomMinutes}
                validEntriesCount={validEntries.length}
              />

              <section className="max-w-5xl mx-auto px-6 mt-6">
                <button onClick={handlePickWinner}
                  className="w-full h-14 rounded-2xl font-bold hover:scale-[1.01] transition"
                  style={{ background: 'var(--accent)', color: 'var(--accent-on)', boxShadow: 'var(--shadow-accent)' }}>
                  {hasExistingWinners ? 'Pick New Winners' : 'Pick Winner'}
                </button>

                {hasExistingWinners && showPickerFlow && winners.length === 0 && (
                  <button
                    onClick={() => setShowPickerFlow(false)}
                    className="w-full mt-3 h-11 rounded-xl font-semibold transition text-sm"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
                    ← Back to existing winners
                  </button>
                )}
              </section>
            </>
          )}

          <WinnerReveal revealing={revealing} revealName={revealName} />
          <WinnerCards
            winners={winners}
            verificationId={verificationId}
            saveError={saveError}
            saving={saving}
            onRetry={() => saveDrawResults(winners)}
          />
          <HistorySection history={history} />
          <CommentPreview comments={videoData?.comments || []} />
        </>
      )}

      <HomepageMarketingSections />
    </main>
  );
}
