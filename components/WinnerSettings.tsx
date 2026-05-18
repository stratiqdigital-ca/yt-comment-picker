"use client";

import EmojiPicker, { Theme } from "emoji-picker-react";

type Props = {
  keyword: string;
  setKeyword: (value: string) => void;

  emoji: string;
  setEmoji: (value: string) => void;

  showEmojiPicker: boolean;
  setShowEmojiPicker: (value: boolean) => void;

  timeWindowMinutes: number | null;
  setTimeWindowMinutes: (value: number | null) => void;

  customMinutes: string;
  setCustomMinutes: (value: string) => void;

  winnersCount: number;
  setWinnersCount: (value: number) => void;

  customWinnersCount: string;
  setCustomWinnersCount: (value: string) => void;

  removeDuplicates: boolean;
  setRemoveDuplicates: (value: boolean) => void;

  validEntriesCount: number;
};

export default function WinnerSettings({
  keyword,
  setKeyword,
  emoji,
  setEmoji,
  showEmojiPicker,
  setShowEmojiPicker,
  timeWindowMinutes,
  setTimeWindowMinutes,
  customMinutes,
  setCustomMinutes,
  winnersCount,
  setWinnersCount,
  customWinnersCount,
  setCustomWinnersCount,
  removeDuplicates,
  setRemoveDuplicates,
  validEntriesCount,
}: Props) {
  function handleCustomMinutes(value: string) {
    setCustomMinutes(value);

    const numberValue = Number(value);
    setTimeWindowMinutes(numberValue > 0 ? numberValue : null);
  }

  function handleCustomWinners(value: string) {
    setCustomWinnersCount(value);

    const numberValue = Number(value);

    if (numberValue > 0) {
      setWinnersCount(numberValue);
    }
  }

  return (
    <section className="max-w-5xl mx-auto px-6 mt-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-2xl font-bold mb-6">Winner Settings</h3>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm text-zinc-400">Required keyword</label>

            <input
              type="text"
              placeholder="Optional keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="mt-2 w-full h-12 rounded-xl bg-black/20 border border-white/10 px-4 outline-none focus:border-lime-400"
            />

            <p className="mt-2 text-xs text-zinc-500">
              Leave empty to include all comments.
            </p>
          </div>

          <div>
            <label className="text-sm text-zinc-400">Winners</label>

            <div className="mt-2 flex gap-2">
              {[1, 3, 5].map((count) => (
                <button
                  key={count}
                  onClick={() => {
                    setWinnersCount(count);
                    setCustomWinnersCount("");
                  }}
                  className={`h-12 flex-1 rounded-xl border transition ${
                    winnersCount === count && !customWinnersCount
                      ? "bg-lime-400 text-black border-lime-400"
                      : "bg-black/20 border-white/10 text-white"
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>

            <input
              type="number"
              min="1"
              placeholder="Custom winners"
              value={customWinnersCount}
              onChange={(e) => handleCustomWinners(e.target.value)}
              className="mt-3 w-full h-12 rounded-xl bg-black/20 border border-white/10 px-4 outline-none focus:border-lime-400"
            />

            <p className="mt-2 text-xs text-zinc-500">
              Select 1, 3, 5, or enter your own winner count.
            </p>
          </div>

          <div>
            <label className="text-sm text-zinc-400">Fairness</label>

            <button
              onClick={() => setRemoveDuplicates(!removeDuplicates)}
              className={`mt-2 w-full h-12 rounded-xl border transition ${
                removeDuplicates
                  ? "bg-lime-400 text-black border-lime-400"
                  : "bg-black/20 border-white/10 text-white"
              }`}
            >
              {removeDuplicates ? "No duplicate users" : "Duplicates allowed"}
            </button>

            <p className="mt-2 text-xs text-zinc-500">
              Each YouTube user gets one entry.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-5">
          <h4 className="font-bold text-lg">First comments time filter</h4>

          <p className="mt-2 text-sm text-zinc-500">
            Choose which early comment window should qualify for this draw.
            Perfect for giveaways where only the first 30 minutes of comments count.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {[20, 30, 60].map((minutes) => (
              <button
                key={minutes}
                onClick={() => {
                  setTimeWindowMinutes(minutes);
                  setCustomMinutes("");
                }}
                className={`h-11 px-4 rounded-xl border font-semibold transition ${
                  timeWindowMinutes === minutes && !customMinutes
                    ? "bg-lime-400 text-black border-lime-400"
                    : "bg-white/5 border-white/10 text-white"
                }`}
              >
                First {minutes} minutes
              </button>
            ))}

            <button
              onClick={() => {
                setTimeWindowMinutes(null);
                setCustomMinutes("");
              }}
              className={`h-11 px-4 rounded-xl border font-semibold transition ${
                timeWindowMinutes === null
                  ? "bg-lime-400 text-black border-lime-400"
                  : "bg-white/5 border-white/10 text-white"
              }`}
            >
              All time
            </button>
          </div>

          <input
            type="number"
            min="1"
            placeholder="Custom first minutes"
            value={customMinutes}
            onChange={(e) => handleCustomMinutes(e.target.value)}
            className="mt-4 w-full h-12 rounded-xl bg-black/20 border border-white/10 px-4 outline-none focus:border-lime-400"
          />
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-5">
          <h4 className="font-bold text-lg">Emoji filter</h4>

          <p className="mt-2 text-sm text-zinc-500">
            Choose an emoji if your giveaway requires users to comment with a specific emoji.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="h-12 px-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition font-semibold"
            >
              {emoji ? `Selected: ${emoji}` : "Choose Emoji"}
            </button>

            {emoji && (
              <button
                type="button"
                onClick={() => {
                  setEmoji("");
                  setShowEmojiPicker(false);
                }}
                className="h-12 px-5 rounded-xl border border-red-500/20 bg-red-500/10 text-red-300 hover:bg-red-500/20 transition font-semibold"
              >
                Clear Emoji
              </button>
            )}
          </div>

          {showEmojiPicker && (
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
              <EmojiPicker
                onEmojiClick={(emojiData) => {
                  setEmoji(emojiData.emoji);
                  setShowEmojiPicker(false);
                }}
                theme={Theme.DARK}
                searchDisabled={false}
                skinTonesDisabled={false}
                width="100%"
              />
            </div>
          )}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-300">
          Current draw pool:
          <span className="font-bold text-lime-300 ml-2">
            {validEntriesCount.toLocaleString()}
          </span>
          <span className="ml-2">valid entries</span>

          <span className="ml-2 text-zinc-500">
            · {winnersCount} winner{winnersCount > 1 ? "s" : ""}
          </span>

          {timeWindowMinutes && (
            <span className="ml-2 text-zinc-500">
              · first {timeWindowMinutes} minutes
            </span>
          )}

          {emoji && <span className="ml-2 text-zinc-500">· emoji {emoji}</span>}

          {keyword && (
            <span className="ml-2 text-zinc-500">· keyword “{keyword}”</span>
          )}
        </div>
      </div>
    </section>
  );
}