import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './data/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Manrope"', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#d9e9ff',
          200: '#b5d3ff',
          300: '#86b5ff',
          400: '#5895ff',
          500: '#2f6fff',
          600: '#1f55e0',
          700: '#1b43b0',
          800: '#193b8f',
          900: '#162f70'
        }
      },
      boxShadow: {
        soft: '0 12px 30px -20px rgba(30, 64, 175, 0.4)'
      }
    }
  },
  plugins: []
} satisfies Config
