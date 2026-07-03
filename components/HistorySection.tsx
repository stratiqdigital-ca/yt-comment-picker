import HistoryActions from "./HistoryActions";

type Props = { history: any[] };

export default function HistorySection({ history }: Props) {
  if (!history?.length) return null;

  return (
    <section className="max-w-5xl mx-auto px-6 mt-10">
      <div className="rounded-3xl p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-3xl font-black" style={{ color: 'var(--text-primary)' }}>Previous Giveaway Draws</h3>
            <p className="mt-2" style={{ color: 'var(--text-muted)' }}>This video already has saved giveaway history.</p>
          </div>
          <div className="px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)', color: 'var(--accent-text)' }}>
            {history.length} Saved Draw{history.length > 1 ? "s" : ""}
          </div>
        </div>
        <div className="grid gap-5 mt-8">
          {history.map((draw, index) => (
            <div key={index} id={`history-card-${draw.verification_id}`} className="rounded-3xl p-6"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)' }}>
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.15em]"
                      style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)', color: 'var(--accent-text)' }}>
                      Verified Draw
                    </div>
                    <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{new Date(draw.created_at).toLocaleString()}</div>
                  </div>
                  <p className="font-black text-xl mt-4" style={{ color: 'var(--text-primary)' }}>
                    {draw.winners?.length || 0} Winner{(draw.winners?.length || 0) > 1 ? "s" : ""}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {draw.winners?.map((winner: any, wi: number) => (
                      <div key={wi} className="px-3 py-2 rounded-full text-sm"
                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}>
                        #{wi + 1} {winner.authorName}
                      </div>
                    ))}
                  </div>
                </div>
                <HistoryActions draw={draw} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
