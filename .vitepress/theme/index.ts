import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'

// The home pages and the get-started check-in are standalone HTML (see scripts/home.mjs),
// so open them with a full page load.
const homes = [
  '/stress-coach-ai/', '/stress-coach-ai/index.html', '/stress-coach-ai/vi/', '/stress-coach-ai/vi/index.html',
  '/stress-coach-ai/get-started/', '/stress-coach-ai/get-started/index.html',
  '/stress-coach-ai/vi/get-started/', '/stress-coach-ai/vi/get-started/index.html',
]

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return
    router.onBeforeRouteChange = (to) => {
      const path = to.replace(/[?#].*$/, '')
      if (homes.includes(path)) {
        window.location.href = to
        return false
      }
    }
  },
} satisfies Theme
