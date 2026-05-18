import { supabaseAdmin } from "@/lib/supabase-admin";
import VerifyActions from "@/components/VerifyActions";
import VerificationWinnerTemplates from "@/components/VerificationWinnerTemplates";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function VerifyPage({ params }: Props) {
  const { id } = await params;

  const { data: draw } = await supabaseAdmin
    .from("draws")
    .select("*")
    .eq("verification_id", id)
    .single();

  if (!draw) {
    return (
      <main className="min-h-screen bg-[#0B0F19] text-white flex items-center justify-center px-6">
        <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-8 max-w-lg w-full">
          <p className="text-red-300 font-semibold">Verification Failed</p>
          <h1 className="text-4xl font-black mt-3">Giveaway Not Found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[36px] border border-lime-400/20 bg-[#101827] p-8 md:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-lime-300 text-xs font-black tracking-[0.18em] uppercase">
            <span className="w-2 h-2 rounded-full bg-lime-400"></span>
            Verified Giveaway Result
          </div>

          <div className="mt-8 rounded-3xl overflow-hidden border border-white/10 bg-black/20">
            <img
              src={draw.thumbnail_url}
              alt={draw.video_title}
              className="w-full max-h-[420px] object-cover"
            />
          </div>

          <div className="mt-8">
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Giveaway Verification
            </h1>

            <p className="text-zinc-400 mt-4">
              This result was publicly generated and saved by YT Giveaway Picker.
            </p>

            <h2 className="text-3xl md:text-5xl font-black leading-tight mt-8">
              {draw.video_title}
            </h2>
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-zinc-500 text-sm">Verification ID</p>
              <p className="font-black mt-2">{draw.verification_id}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-zinc-500 text-sm">Generated At</p>
              <p className="font-black mt-2">
                {new Date(draw.created_at).toLocaleString()}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-zinc-500 text-sm">Valid Entries</p>
              <p className="font-black mt-2">{draw.valid_entries}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-zinc-500 text-sm">Winners Count</p>
              <p className="font-black mt-2">
                {draw.settings?.winnersCount || draw.winners?.length || 0}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-lime-300 text-sm font-bold">
              Public Proof
            </span>
            <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-lime-300 text-sm font-bold">
              Saved Result
            </span>
            <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-lime-300 text-sm font-bold">
              Duplicate Filter: {draw.settings?.removeDuplicates ? "On" : "Off"}
            </span>
          </div>

          <VerificationWinnerTemplates draw={draw} />

          <div className="grid gap-5">
              {draw.winners?.map((winner: any, index: number) => (
                <div
                  key={index}
                  id={`winner-card-${index + 1}`}
                  className="rounded-3xl border border-white/10 bg-black/20 p-6"
                >
                  <div className="grid md:grid-cols-[1fr_auto] gap-5 items-start">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-full bg-lime-400 text-black flex items-center justify-center font-black text-xl shrink-0">
                        {winner.authorName.replace("@", "").slice(0, 1).toUpperCase()}
                      </div>

                      <div>
                        <p className="font-black text-2xl">
                          #{index + 1} {winner.authorName}
                        </p>

                        <p className="mt-3 text-zinc-300 leading-relaxed break-words">
                          {winner.text}
                        </p>
                      </div>
                    </div>

                    <div className="md:justify-self-end">
                      <VerifyActions
                        targetId={`winner-card-${index + 1}`}
                        filename={`yt-giveaway-winner-${index + 1}-${draw.verification_id}.png`}
                        label={`Download Winner #${index + 1}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <p className="mt-8 text-center text-zinc-500 text-sm">
            Powered by YT Giveaway Picker
          </p>
        </div>
      </div>
    </main>
  );
}