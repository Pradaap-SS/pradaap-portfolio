import { onMounted, ref } from 'vue'

export type ThemeMode = 'light' | 'dark'

export const useTheme = () => {
  const theme = useState<ThemeMode>('theme', () => 'light')
  const initialized = ref(false)

  const applyTheme = (value: ThemeMode) => {
    if (!process.client) return
    const root = document.documentElement
    if (value === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', value)
  }

  const initTheme = () => {
    if (!process.client || initialized.value) return
    const saved = localStorage.getItem('theme') as ThemeMode | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    theme.value = saved ?? 'dark'
    applyTheme(theme.value)
    initialized.value = true
  }

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    applyTheme(theme.value)
  }

  onMounted(initTheme)

  return {
    theme,
    toggleTheme
  }
}
