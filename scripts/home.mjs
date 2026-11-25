// Replaces the VitePress home pages with the standalone landing pages in .vitepress/home,
// and adds the standalone get-started check-in.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'

const pages = [
  ['.vitepress/home/index.html', '.vitepress/dist/index.html'],
  ['.vitepress/home/vi.html', '.vitepress/dist/vi/index.html'],
  // One file for both languages: the page picks its language from the URL.
  ['.vitepress/home/get-started.html', '.vitepress/dist/get-started/index.html'],
  ['.vitepress/home/get-started.html', '.vitepress/dist/vi/get-started/index.html'],
]
for (const [from, to] of pages) {
  if (!existsSync(from)) continue
  mkdirSync(to.replace(/\/[^/]+$/, ''), { recursive: true })
  copyFileSync(from, to)
  console.log(`home: ${from} -> ${to}`)
}
