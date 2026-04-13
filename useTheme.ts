import { computed, ref } from 'vue'

const THEME_STORAGE_KEY = 'shopsphere-theme'
const isDark = ref(false)

const getStoredTheme = (): string | null => {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY)
  } catch {
    return null
  }
}

const setStoredTheme = (theme: 'light' | 'dark') => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Ignore storage write failures (private mode, restricted settings, etc.)
  }
}

const applyTheme = (dark: boolean) => {
  isDark.value = dark
  document.documentElement.classList.toggle('dark', dark)
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
}

export const initializeTheme = () => {
  const stored = getStoredTheme()

  if (stored === 'dark') {
    applyTheme(true)
    return
  }

  if (stored === 'light') {
    applyTheme(false)
    return
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(prefersDark)
}

export const useTheme = () => {
  const toggleTheme = () => {
    const nextTheme = !isDark.value
    applyTheme(nextTheme)
    setStoredTheme(nextTheme ? 'dark' : 'light')
  }

  return {
    isDark: computed(() => isDark.value),
    toggleTheme,
  }
}
