type Props = { comments: any[] };

export default function CommentPreview({ comments }: Props) {
  if (!comments?.length) return null;
  const preview = comments.slice(0, 10);

  return (
    <section className="max-w-5xl mx-auto px-6 mt-10 pb-20">
      <div className="rounded-3xl p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
        <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Other Comments</h3>
        <div className="grid gap-4">
          {preview.map((comment, index) => (
            <div key={index} className="rounded-2xl p-5" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
                  style={{ background: 'var(--accent)', color: 'var(--accent-on)' }}>
                  {comment.authorName.replace("@", "").slice(0, 1).toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{comment.authorName}</p>
                  <p className="mt-3 break-words leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{comment.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
