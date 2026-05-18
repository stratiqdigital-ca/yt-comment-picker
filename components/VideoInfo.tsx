type Props = {
  title: string;
  channelTitle: string;
  thumbnailUrl: string;
  totalComments: number;
};

export default function VideoInfo({
  title,
  channelTitle,
  thumbnailUrl,
  totalComments,
}: Props) {
  return (
    <section className="max-w-5xl mx-auto px-6 mt-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full md:w-40 rounded-xl"
          />

          <div>
            <h2 className="text-2xl font-bold">
              {title}
            </h2>

            <p className="text-zinc-400 mt-2">
              {channelTitle}
            </p>

            <div className="mt-4 inline-flex rounded-full bg-lime-400/10 border border-lime-400/20 px-4 py-2 text-lime-300">
              {totalComments.toLocaleString()} comments loaded
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}