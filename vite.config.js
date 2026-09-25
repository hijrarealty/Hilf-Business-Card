import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { employees, pageMeta } from './src/data/profile.js';

const escapeHtml = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

/** The same page with a different title and link-preview text. */
function withMeta(html, title, description) {
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*"/, `$1${d}"`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*"/, `$1${t}"`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*"/, `$1${d}"`);
}

/**
 * After the build, write dist/<slug>/index.html for every employee, so
 * /jabir, /jana-alam … are real pages Vercel serves as they are — no
 * rewrite rules. Each carries that person's name in its title and preview
 * tags, which WhatsApp and LinkedIn read without running any script.
 *
 * dist/404.html is the same app again: Vercel serves it for any path
 * with no page, and the app shows the team from there.
 */
function employeePages() {
  let outDir;
  return {
    name: 'employee-pages',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const template = readFileSync(resolve(outDir, 'index.html'), 'utf8');

      for (const e of employees) {
        const { title, description } = pageMeta(e);
        mkdirSync(resolve(outDir, e.slug), { recursive: true });
        writeFileSync(resolve(outDir, e.slug, 'index.html'), withMeta(template, title, description));
      }

      writeFileSync(
        resolve(outDir, '404.html'),
        withMeta(template, 'Card not found — HILF Shipping', 'HILF Shipping, Dubai. Digital business cards.')
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), employeePages()],
  build: {
    target: 'es2020',
    assetsInlineLimit: 2048,
  },
});
