import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = path.join(root, 'public')
const envFiles = ['.env', '.env.local', '.env.production', '.env.production.local']

function readSiteUrlFromEnvFiles() {
  for (const file of envFiles) {
    const filePath = path.join(root, file)
    if (!fs.existsSync(filePath)) continue
    const line = fs.readFileSync(filePath, 'utf8').split(/\r?\n/).find((entry) => /^\s*VITE_SITE_URL\s*=/.test(entry))
    if (line) return line.replace(/^\s*VITE_SITE_URL\s*=\s*/, '').replace(/^['"]|['"]$/g, '')
  }
  return ''
}

const siteUrl = (process.env.VITE_SITE_URL || readSiteUrlFromEnvFiles()).trim().replace(/\/+$/, '')
const robots = ['User-agent: *', 'Allow: /', ...(siteUrl ? [`Sitemap: ${siteUrl}/sitemap.xml`] : []), ''].join('\n')
fs.mkdirSync(publicDir, { recursive: true })
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8')

const sitemapPath = path.join(publicDir, 'sitemap.xml')
if (siteUrl) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <changefreq>weekly</changefreq>\n  </url>\n</urlset>\n`
  fs.writeFileSync(sitemapPath, sitemap, 'utf8')
} else if (fs.existsSync(sitemapPath)) {
  fs.rmSync(sitemapPath)
}
