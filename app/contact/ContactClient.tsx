"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSending(true);
    // In production, wire this to an API route or email service
    await new Promise((r) => setTimeout(r, 1200));
    toast.success("Message sent! We'll get back to you soon.");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setSending(false);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: 48,
    borderRadius: 12,
    background: "var(--bg-tertiary)",
    border: "1px solid var(--border)",
    padding: "0 16px",
    color: "var(--text-primary)",
    outline: "none",
    fontSize: 14,
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 14,
    fontWeight: 600,
    color: "var(--text-secondary)",
    marginBottom: 8,
  };

  return (
    <div
      className="rounded-3xl p-8"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
    >
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left — Info */}
        <div>
          <h2
            className="text-2xl font-black"
            style={{ color: "var(--text-primary)" }}
          >
            Get in Touch
          </h2>
          <p
            className="mt-3 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Have a question, feature request or bug report? We'd love to hear
            from you. Fill out the form and we'll respond as soon as possible.
          </p>

          <div className="mt-8 space-y-5">
            {[
              {
                icon: "📧",
                title: "Email",
                desc: "contact@ytgiveawaypicker.com",
              },
              {
                icon: "🏢",
                title: "Built by",
                desc: "Strat IQ Digital — stratiqdigital.com",
              },
              {
                icon: "⚡",
                title: "Response Time",
                desc: "Usually within 24-48 hours",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{
                    background: "var(--accent-soft)",
                    border: "1px solid var(--accent-border)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="font-bold text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-8 rounded-2xl p-5"
            style={{
              background: "var(--accent-soft)",
              border: "1px solid var(--accent-border)",
            }}
          >
            <p
              className="text-sm font-semibold"
              style={{ color: "var(--accent-text)" }}
            >
              Common Topics
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                "Bug Report",
                "Feature Request",
                "API Question",
                "Partnership",
                "General",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div>
          <div className="space-y-5">
            <div>
              <label style={labelStyle}>
                Name <span style={{ color: "var(--danger)" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>
                Email <span style={{ color: "var(--danger)" }}>*</span>
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Subject</label>
              <input
                type="text"
                placeholder="What's this about?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>
                Message <span style={{ color: "var(--danger)" }}>*</span>
              </label>
              <textarea
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                style={{
                  ...inputStyle,
                  height: "auto",
                  padding: "14px 16px",
                  resize: "vertical",
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={sending}
              className="w-full h-12 rounded-xl font-bold transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
              style={{
                background: "var(--accent)",
                color: "var(--accent-on)",
                border: "none",
                cursor: sending ? "not-allowed" : "pointer",
              }}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
