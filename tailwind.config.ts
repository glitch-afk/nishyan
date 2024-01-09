import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        nav: '#1E2640',
        offWhite: '#FAFAFA',
        lightGray: '#F2F2F2',
        mediumGray: '#E6E6E6',
        night: '#1A181E',
        'night-muted': '#4D4D4D',
        border: '#D9D9D9',
      },
      boxShadow: {
        card: '0px 2px 6px 0px rgba(26, 24, 30, 0.04)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config
