import type { Config } from 'tailwindcss'

const neutral = {
  50: '#f8f6f2',
  100: '#f1ede6',
  200: '#e3ddd2',
  300: '#cbc3b5',
  400: '#a79f92',
  500: '#7f786d',
  600: '#655f56',
  700: '#4f4a43',
  800: '#322f2a',
  900: '#1d1b18',
  950: '#11100e'
}

const brand = {
  50: '#eef9f8',
  100: '#d6f0ed',
  200: '#b0dfd9',
  300: '#7fc8c0',
  400: '#52aba5',
  500: '#2f7f7c',
  600: '#245f5f',
  700: '#1e4d4e',
  800: '#1b4041',
  900: '#183536'
}

const secondary = {
  50: '#faf5ed',
  100: '#f2e6d4',
  200: '#e6ceb0',
  300: '#d6b285',
  400: '#c29158',
  500: '#a86f35',
  600: '#875729',
  700: '#6e4523',
  800: '#5a391f',
  900: '#4b301c'
}

const accent = {
  50: '#eefaf5',
  100: '#d5f2e5',
  200: '#abe3ca',
  300: '#78cfa8',
  400: '#49b687',
  500: '#2d966c',
  600: '#237856',
  700: '#1f6047',
  800: '#1d4d3a',
  900: '#183f31'
}

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
      fontSize: {
        'display-lg': ['clamp(2.2rem, 6vw, 3.9rem)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.85rem, 4.7vw, 2.85rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }]
      },
      colors: {
        slate: neutral,
        neutral,
        brand,
        secondary,
        accent
      },
      boxShadow: {
        soft: '0 14px 32px -22px rgba(36, 95, 95, 0.42)',
        card: '0 18px 46px -32px rgba(17, 16, 14, 0.45)',
        'card-strong': '0 24px 58px -34px rgba(17, 16, 14, 0.56)',
        'surface-glow': '0 0 0 1px rgb(47 127 124 / 0.18), 0 0 0 4px rgb(168 111 53 / 0.1)'
      }
    }
  },
  plugins: []
} satisfies Config
