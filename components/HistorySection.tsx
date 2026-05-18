import HistoryActions from "./HistoryActions";

type Props = {
  history: any[];
};

export default function HistorySection({
  history,
}: Props) {
  if (!history?.length) {
    return null;
  }

  return (
    <section className="max-w-5xl mx-auto px-6 mt-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

        <div className="flex flex-wrap items-center justify-between gap-4">

          <div>
            <h3 className="text-3xl font-black">
              Previous Giveaway Draws
            </h3>

            <p className="mt-2 text-zinc-500">
              This video already has saved giveaway history.
            </p>
          </div>

          <div className="px-4 py-2 rounded-full border border-lime-400/20 bg-lime-400/10 text-lime-300 text-sm font-semibold">
            {history.length} Saved Draw
            {history.length > 1 ? "s" : ""}
          </div>

        </div>

        <div className="grid gap-5 mt-8">

          {history.map((draw, index) => (
            <div
              key={index}
              id={`history-card-${draw.verification_id}`}
              className="rounded-3xl border border-white/10 bg-black/20 p-6"
            >

              <div className="flex flex-wrap items-start justify-between gap-5">

                <div>

                  <div className="flex flex-wrap items-center gap-3">

                    <div className="px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-300 text-xs font-bold uppercase tracking-[0.15em]">
                      Verified Draw
                    </div>

                    <div className="text-sm text-zinc-500">
                      {new Date(
                        draw.created_at
                      ).toLocaleString()}
                    </div>

                  </div>

                  <p className="font-black text-xl mt-4">
                    {draw.winners?.length || 0} Winner
                    {(draw.winners?.length || 0) > 1
                      ? "s"
                      : ""}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">

                    {draw.winners?.map(
                      (
                        winner: any,
                        winnerIndex: number
                      ) => (
                        <div
                          key={winnerIndex}
                          className="px-3 py-2 rounded-full border border-white/10 bg-white/5 text-sm"
                        >
                          #{winnerIndex + 1}{" "}
                          {winner.authorName}
                        </div>
                      )
                    )}

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