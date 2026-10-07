import { ref } from 'vue'

const dark = ref(document.documentElement.classList.contains('dark'))

export function useDarkMode() {
  function toggleDarkMode() {
    dark.value = !dark.value
    document.documentElement.classList.toggle('dark', dark.value)
    localStorage.theme = dark.value ? 'dark' : 'light'
  }

  return { dark, toggleDarkMode }
}
