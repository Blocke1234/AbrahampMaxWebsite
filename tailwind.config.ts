import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A08',
          soft: '#12120F',
        },
        bone: {
          DEFAULT: '#EDEAE2',
          dim: '#A8A399',
          faint: '#837E73',
        },
        gold: {
          DEFAULT: '#C6A15B',
          bright: '#D9B878',
        },
        line: 'rgba(237,234,226,0.12)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        kicker: '0.22em',
      },
      maxWidth: {
        prose: '42rem',
      },
    },
  },
  plugins: [],
}

export default config
