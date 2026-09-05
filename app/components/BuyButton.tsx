type Variant = 'solid' | 'outline'

export default function BuyButton({
  href,
  label = 'Buy Now',
  variant = 'solid',
  className = '',
}: {
  href?: string
  label?: string
  variant?: Variant
  className?: string
}) {
  const base =
    'inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-kicker transition-colors duration-500 whitespace-nowrap'
  const styles =
    variant === 'solid'
      ? 'bg-gold text-ink hover:bg-gold-bright'
      : 'border border-gold/60 text-gold hover:border-gold-bright hover:text-gold-bright'

  if (!href) {
    return (
      <span className={`${base} ${styles} ${className} opacity-50 cursor-not-allowed`}>
        Coming Soon
      </span>
    )
  }

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {label}
    </a>
  )
}
