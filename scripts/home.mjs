// Replaces the VitePress home pages with the standalone landing pages in .vitepress/home.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'

const pages = [
  ['.vitepress/home/index.html', '.vitepress/dist/index.html'],
  ['.vitepress/home/vi.html', '.vitepress/dist/vi/index.html'],
]
for (const [from, to] of pages) {
  if (!existsSync(from)) continue
  mkdirSync(to.replace(/\/[^/]+$/, ''), { recursive: true })
  copyFileSync(from, to)
  console.log(`home: ${from} -> ${to}`)
}
