'use client'

import { useState } from "react"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"

const S = {
  label:    "text-lime-400 font-black uppercase tracking-[0.2em] text-xs mb-3 block",
  h1:       "text-5xl md:text-6xl font-black leading-tight",
  h2:       "text-2xl font-black text-white mb-4",
  body:     "text-zinc-400 text-base leading-relaxed",
  bodySm:   "text-zinc-500 text-sm leading-relaxed",
  card:     "bg-[#111827] border border-white/[0.07] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/25 hover:shadow-[0_8px_32px_rgba(163,230,53,0.06)]",
  divider:  "w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-10",
  inputBase:"w-full bg-[#111827] border border-white/[0.10] rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 outline-none focus:border-lime-400/50 transition-colors",
  label2:   "block text-sm font-bold text-zinc-300 mb-2",
  cta:      "inline-flex h-11 px-6 rounded-xl bg-lime-400 text-black font-black items-center gap-2 hover:bg-lime-300 transition-colors text-sm",
  ctaGhost: "inline-flex h-11 px-6 rounded-xl border border-lime-400/30 text-lime-400 font-bold items-center gap-2 hover:border-lime-400/60 transition-colors text-sm",
}

const REASONS = [
  { icon: "🛠️", title: "Tool Support",        desc: "Having trouble loading comments or picking winners? Describe your issue and we will help." },
  { icon: "✅", title: "Verification Review",  desc: "Need a specific verification record reviewed or removed? Include the verification ID." },
  { icon: "💼", title: "Business Inquiries",   desc: "Sponsorships, partnerships or API access requests — reach out with your proposal." },
  { icon: "💬", title: "Feedback",             desc: "Feature suggestions, bug reports or general feedback — we read every message." },
]

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-lime-400/[0.06] border border-lime-400/20 rounded-2xl p-10 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-black text-white mb-2">Message Sent!</h3>
        <p className={S.body}>We got your message and will reply within 48 hours.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-lime-400 text-sm font-bold hover:text-lime-300 transition-colors">
          Send another message →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={S.label2} htmlFor="name">Your Name</label>
          <input id="name" name="name" type="text" required placeholder="Jane Smith" value={form.name} onChange={handleChange} className={S.inputBase}/>
        </div>
        <div>
          <label className={S.label2} htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" required placeholder="jane@example.com" value={form.email} onChange={handleChange} className={S.inputBase}/>
        </div>
      </div>
      <div>
        <label className={S.label2} htmlFor="subject">Subject</label>
        <select
  id="subject"
  name="subject"
  required
  value={form.subject}
  onChange={handleChange}
  className={`${S.inputBase} cursor-pointer`}
  style={{
    background: '#111827',
    colorScheme: 'dark',
  }}
>
          <option value="" disabled style={{ background: '#111827', color: '#71717a' }}>Select a topic...</option>
<option value="Tool Support" style={{ background: '#111827', color: '#fff' }}>Tool Support</option>
<option value="Verification Review" style={{ background: '#111827', color: '#fff' }}>Verification Review / Removal</option>
<option value="Business Inquiry" style={{ background: '#111827', color: '#fff' }}>Business Inquiry</option>
<option value="Feedback" style={{ background: '#111827', color: '#fff' }}>Feedback or Feature Request</option>
<option value="Other" style={{ background: '#111827', color: '#fff' }}>Other</option>
        </select>
      </div>
      <div>
        <label className={S.label2} htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows={6} placeholder="Describe your question or request..." value={form.message} onChange={handleChange} className={`${S.inputBase} resize-none`}/>
      </div>
      {status === "error" && (
        <p className="text-red-400 text-sm">Something went wrong. Email us directly at support@ytgiveawaypicker.com</p>
      )}
      <button type="submit" disabled={status === "sending"} className="w-full h-12 rounded-xl bg-lime-400 text-black font-black text-sm hover:bg-lime-300 transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
        {status === "sending" ? "Sending..." : "Send Message →"}
      </button>
      <p className={`${S.bodySm} text-center`}>We aim to reply within 48 hours · support@ytgiveawaypicker.com</p>
    </form>
  )
}

export default function ContactClient() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <span className={S.label}>Support</span>
        <h1 className={S.h1}>Contact Us</h1>
        <p className={`${S.body} mt-5 max-w-2xl`}>
          Have a question, issue or feedback about YT Giveaway Picker? Fill in the form below and we will get back to you within 48 hours.
        </p>

        <div className={S.divider}/>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {REASONS.map(r => (
            <div key={r.title} className={S.card}>
              <div className="text-2xl mb-3">{r.icon}</div>
              <h3 className="text-sm font-black text-white mb-1.5">{r.title}</h3>
              <p className={S.bodySm}>{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-[1fr_280px] gap-8 items-start">
          <div className={S.card}>
            <h2 className={S.h2}>Send a Message</h2>
            <ContactForm />
          </div>
          <div className="flex flex-col gap-4">
            <div className={S.card}>
              <p className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">Email</p>
              <a href="mailto:support@ytgiveawaypicker.com" className="text-sm font-bold text-white break-all hover:text-lime-400 transition-colors">support@ytgiveawaypicker.com</a>
              <p className={`${S.bodySm} mt-2`}>For urgent support, email directly.</p>
            </div>
            <div className={S.card}>
              <p className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">Response Time</p>
              <p className="text-sm font-bold text-white">Within 48 hours</p>
              <p className={`${S.bodySm} mt-1`}>Monday to Friday · English only</p>
            </div>
            <div className={S.card}>
              <p className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">Built by</p>
              <a href="https://stratiqdigital.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-lime-400 transition-colors">Strat IQ Digital →</a>
              <p className={`${S.bodySm} mt-1`}>stratiqdigital.com</p>
            </div>
          </div>
        </div>

        <div className={S.divider}/>

        <div className="bg-lime-400/[0.03] border border-lime-400/[0.12] rounded-2xl p-8">
          <span className={S.label}>Related Pages</span>
          <h2 className="text-xl font-black text-white mb-3">Looking for Something Else?</h2>
          <p className={`${S.body} mb-6`}>Check our privacy policy, terms of use or go straight to the free tool.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/#tool" className={S.cta}>Use the Tool →</a>
            <a href="/privacy-policy" className={S.ctaGhost}>Privacy Policy →</a>
            <a href="/terms" className={S.ctaGhost}>Terms of Use →</a>
          </div>
        </div>

      </div>
    </main>
  )
}