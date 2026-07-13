export const CALENDLY_URL = 'https://calendly.com/bwillette2000/bigwilliestyle'
export const DISCORD_URL = 'https://discord.gg/ZaqzPTW6xu'

type Variant = 'solid' | 'outline'

export default function BookCallButton({
  label = 'Book a Call',
  variant = 'solid',
  className = '',
}: {
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
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {label}
    </a>
  )
}
