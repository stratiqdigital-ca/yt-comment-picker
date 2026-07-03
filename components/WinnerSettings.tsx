"use client";

import EmojiPicker, { Theme } from "emoji-picker-react";
import { useTheme } from "./ThemeProvider";

type Props = {
  keyword: string; setKeyword: (v: string) => void;
  emoji: string; setEmoji: (v: string) => void;
  showEmojiPicker: boolean; setShowEmojiPicker: (v: boolean) => void;
  timeWindowMinutes: number | null; setTimeWindowMinutes: (v: number | null) => void;
  customMinutes: string; setCustomMinutes: (v: string) => void;
  winnersCount: number; setWinnersCount: (v: number) => void;
  customWinnersCount: string; setCustomWinnersCount: (v: string) => void;
  removeDuplicates: boolean; setRemoveDuplicates: (v: boolean) => void;
  validEntriesCount: number;
};

const btnActive = { background: 'var(--accent)', color: 'var(--accent-on)', borderColor: 'var(--accent)' }
const btnDefault = { background: 'var(--bg-card)', color: 'var(--text-primary)', borderColor: 'var(--border)' }

export default function WinnerSettings(props: Props) {
  const { theme } = useTheme()
  const {
    keyword, setKeyword, emoji, setEmoji, showEmojiPicker, setShowEmojiPicker,
    timeWindowMinutes, setTimeWindowMinutes, customMinutes, setCustomMinutes,
    winnersCount, setWinnersCount, customWinnersCount, setCustomWinnersCount,
    removeDuplicates, setRemoveDuplicates, validEntriesCount,
  } = props

  function handleCustomMinutes(v: string) {
    setCustomMinutes(v)
    const n = Number(v)
    setTimeWindowMinutes(n > 0 ? n : null)
  }

  function handleCustomWinners(v: string) {
    setCustomWinnersCount(v)
    const n = Number(v)
    if (n > 0) setWinnersCount(n)
  }

  const inputStyle = {
    width: '100%', height: 48, borderRadius: 12,
    background: 'var(--bg-tertiary)', border: '1px solid var(--border)',
    padding: '0 16px', color: 'var(--text-primary)', outline: 'none',
    fontSize: 14,
  }

  return (
    <section className="max-w-5xl mx-auto px-6 mt-10">
      <div className="rounded-3xl p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
        <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Winner Settings</h3>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Keyword */}
          <div>
            <label className="text-sm" style={{ color: 'var(--text-secondary)' }}>Required keyword</label>
            <input type="text" placeholder="Optional keyword" value={keyword}
              onChange={e => setKeyword(e.target.value)} className="mt-2" style={inputStyle} />
            <p className="mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>Leave empty to include all comments.</p>
          </div>

          {/* Winners count */}
          <div>
            <label className="text-sm" style={{ color: 'var(--text-secondary)' }}>Winners</label>
            <div className="mt-2 flex gap-2">
              {[1, 3, 5].map(count => (
                <button key={count}
                  onClick={() => { setWinnersCount(count); setCustomWinnersCount("") }}
                  className="h-12 flex-1 rounded-xl border font-semibold transition"
                  style={winnersCount === count && !customWinnersCount ? btnActive : btnDefault}>
                  {count}
                </button>
              ))}
            </div>
            <input type="number" min="1" placeholder="Custom winners" value={customWinnersCount}
              onChange={e => handleCustomWinners(e.target.value)} className="mt-3" style={inputStyle} />
            <p className="mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>Select 1, 3, 5, or enter your own.</p>
          </div>

          {/* Fairness */}
          <div>
            <label className="text-sm" style={{ color: 'var(--text-secondary)' }}>Fairness</label>
            <button onClick={() => setRemoveDuplicates(!removeDuplicates)}
              className="mt-2 w-full h-12 rounded-xl border font-semibold transition"
              style={removeDuplicates ? btnActive : btnDefault}>
              {removeDuplicates ? "No duplicate users" : "Duplicates allowed"}
            </button>
            <p className="mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>Each YouTube user gets one entry.</p>
          </div>
        </div>

        {/* Time filter */}
        <div className="mt-6 rounded-3xl p-5" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)' }}>
          <h4 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>First comments time filter</h4>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            Choose which early comment window should qualify for this draw.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[20, 30, 60].map(minutes => (
              <button key={minutes}
                onClick={() => { setTimeWindowMinutes(minutes); setCustomMinutes("") }}
                className="h-11 px-4 rounded-xl border font-semibold transition"
                style={timeWindowMinutes === minutes && !customMinutes ? btnActive : btnDefault}>
                First {minutes} minutes
              </button>
            ))}
            <button onClick={() => { setTimeWindowMinutes(null); setCustomMinutes("") }}
              className="h-11 px-4 rounded-xl border font-semibold transition"
              style={timeWindowMinutes === null ? btnActive : btnDefault}>
              All time
            </button>
          </div>
          <input type="number" min="1" placeholder="Custom first minutes" value={customMinutes}
            onChange={e => handleCustomMinutes(e.target.value)} className="mt-4" style={inputStyle} />
        </div>

        {/* Emoji filter */}
        <div className="mt-6 rounded-3xl p-5" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)' }}>
          <h4 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Emoji filter</h4>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            Choose an emoji if your giveaway requires users to comment with a specific emoji.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="h-12 px-5 rounded-xl border font-semibold transition"
              style={btnDefault}>
              {emoji ? `Selected: ${emoji}` : "Choose Emoji"}
            </button>
            {emoji && (
              <button type="button" onClick={() => { setEmoji(""); setShowEmojiPicker(false) }}
                className="h-12 px-5 rounded-xl border font-semibold transition"
                style={{ background: 'var(--danger-soft)', borderColor: 'var(--danger-border)', color: 'var(--danger)' }}>
                Clear Emoji
              </button>
            )}
          </div>
          {showEmojiPicker && (
            <div className="mt-5 overflow-hidden rounded-2xl" style={{ border: '1px solid var(--border)' }}>
              <EmojiPicker
                onEmojiClick={d => { setEmoji(d.emoji); setShowEmojiPicker(false) }}
                theme={theme === 'dark' ? Theme.DARK : Theme.LIGHT}
                searchDisabled={false} skinTonesDisabled={false} width="100%"
              />
            </div>
          )}
        </div>

        {/* Pool summary */}
        <div className="mt-6 rounded-2xl p-4 text-sm" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
          Current draw pool:
          <span className="font-bold ml-2" style={{ color: 'var(--accent-text)' }}>{validEntriesCount.toLocaleString()}</span>
          <span className="ml-2">valid entries</span>
          <span className="ml-2" style={{ color: 'var(--text-muted)' }}>· {winnersCount} winner{winnersCount > 1 ? "s" : ""}</span>
          {timeWindowMinutes && <span className="ml-2" style={{ color: 'var(--text-muted)' }}>· first {timeWindowMinutes} minutes</span>}
          {emoji && <span className="ml-2" style={{ color: 'var(--text-muted)' }}>· emoji {emoji}</span>}
          {keyword && <span className="ml-2" style={{ color: 'var(--text-muted)' }}>· keyword &ldquo;{keyword}&rdquo;</span>}
        </div>
      </div>
    </section>
  )
}
