import { supabaseAdmin } from "@/lib/supabase-admin";
import VerifyActions from "@/components/VerifyActions";
import VerificationWinnerTemplates from "@/components/VerificationWinnerTemplates";

type Props = { params: Promise<{ id: string }> };

export default async function VerifyPage({ params }: Props) {
  const { id } = await params;
  const { data: draw } = await supabaseAdmin.from("draws").select("*").eq("verification_id", id).single();

  if (!draw) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <div className="rounded-3xl p-8 max-w-lg w-full" style={{ background: 'var(--danger-soft)', border: '1px solid var(--danger-border)' }}>
          <p className="font-semibold" style={{ color: 'var(--danger)' }}>Verification Failed</p>
          <h1 className="text-4xl font-black mt-3" style={{ color: 'var(--text-primary)' }}>Giveaway Not Found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-10" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[36px] p-8 md:p-10" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--accent-border)' }}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black tracking-[0.18em] uppercase"
            style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)', color: 'var(--accent-text)' }}>
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
            Verified Giveaway Result
          </div>

          <div className="mt-8 rounded-3xl overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--bg-tertiary)' }}>
            <img src={draw.thumbnail_url} alt={draw.video_title} className="w-full max-h-[420px] object-cover" />
          </div>

          <div className="mt-8">
            <h1 className="text-5xl md:text-7xl font-black leading-tight" style={{ color: 'var(--text-primary)' }}>Giveaway Verification</h1>
            <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>This result was publicly generated and saved by YT Giveaway Picker.</p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mt-8" style={{ color: 'var(--text-primary)' }}>{draw.video_title}</h2>
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-4">
            {[
              { label: 'Verification ID', value: draw.verification_id },
              { label: 'Generated At', value: new Date(draw.created_at).toLocaleString() },
              { label: 'Valid Entries', value: draw.valid_entries },
              { label: 'Winners Count', value: draw.settings?.winnersCount || draw.winners?.length || 0 },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-5" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                <p className="font-black mt-2" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {['Public Proof', 'Saved Result', `Duplicate Filter: ${draw.settings?.removeDuplicates ? 'On' : 'Off'}`].map(t => (
              <span key={t} className="rounded-full px-4 py-2 text-sm font-bold"
                style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)', color: 'var(--accent-text)' }}>
                {t}
              </span>
            ))}
          </div>

          <VerificationWinnerTemplates draw={draw} />

          <div className="grid gap-5">
            {draw.winners?.map((winner: any, index: number) => (
              <div key={index} id={`winner-card-${index + 1}`} className="rounded-3xl p-6"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <div className="grid md:grid-cols-[1fr_auto] gap-5 items-start">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center font-black text-xl shrink-0"
                      style={{ background: 'var(--accent)', color: 'var(--accent-on)' }}>
                      {winner.authorName.replace("@", "").slice(0, 1).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-black text-2xl" style={{ color: 'var(--text-primary)' }}>#{index + 1} {winner.authorName}</p>
                      <p className="mt-3 leading-relaxed break-words" style={{ color: 'var(--text-secondary)' }}>{winner.text}</p>
                    </div>
                  </div>
                  <div className="md:justify-self-end">
                    <VerifyActions targetId={`winner-card-${index + 1}`} filename={`yt-giveaway-winner-${index + 1}-${draw.verification_id}.png`} label={`Download Winner #${index + 1}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm" style={{ color: 'var(--text-muted)' }}>Powered by YT Giveaway Picker</p>
        </div>
      </div>
    </main>
  );
}
