type Props = {
  label?: string
  format?: 'horizontal' | 'square'
}

export default function AdSlot({ label = 'Advertisement', format = 'horizontal' }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-6 my-10">
      <div className="ad-container" style={{ minHeight: format === 'square' ? 250 : 90, borderRadius: 20 }}>
        <ins className="adsbygoogle" style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXX"
          data-ad-slot="INCONTENT_SLOT"
          data-ad-format="auto"
          data-full-width-responsive="true" />
        <span style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
          {label}
        </span>
      </div>
    </div>
  )
}
