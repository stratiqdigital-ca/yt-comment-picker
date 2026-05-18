type Props = {
  comments: any[];
};

export default function CommentPreview({
  comments,
}: Props) {
  if (!comments?.length) {
    return null;
  }

  const preview = comments.slice(0, 10);

  return (
    <section className="max-w-5xl mx-auto px-6 mt-10 pb-20">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-2xl font-bold mb-6">
          Other Comments
        </h3>

        <div className="grid gap-4">
          {preview.map((comment, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-black/20 p-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-lime-400 text-black flex items-center justify-center font-bold">
                  {comment.authorName
                    .replace("@", "")
                    .slice(0, 1)
                    .toUpperCase()}
                </div>

                <div className="flex-1">
                  <p className="font-semibold">
                    {comment.authorName}
                  </p>

                  <p className="mt-3 text-zinc-300 break-words leading-relaxed">
                    {comment.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}