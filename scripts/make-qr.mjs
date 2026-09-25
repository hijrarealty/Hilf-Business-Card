/**
 * One QR code per employee, for the printed business cards.
 *
 *     npm run qr
 *
 * Each encodes that employee's own link — SITE_URL/<slug> — read from
 * src/data/profile.js, so adding someone there and running this again
 * makes their code. Writes, into qr-codes/:
 *
 *   <slug>.png        2000px wide, with the person's name and role printed
 *                     under the code, so it is plain whose code it is
 *   <slug>.svg        the same, as a vector
 *   plain/<slug>.png  the code alone, no name — for the card designer
 *   plain/<slug>.svg  the same, as a vector
 *   links.txt         every name and the link its code opens
 *
 * Plain black on white with a full quiet zone: the most reliable thing
 * for any phone camera to read. Scan every one before sending to print.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import QRCode from 'qrcode';
import { Resvg } from '@resvg/resvg-js';
import { employees } from '../src/data/profile.js';

const outDir = resolve(process.cwd(), 'qr-codes');
const plainDir = resolve(outDir, 'plain');
mkdirSync(plainDir, { recursive: true });

const options = {
  errorCorrectionLevel: 'M',
  margin: 4,
  color: { dark: '#000000', light: '#ffffff' },
};

const SIZE = 2000; // px — the code's width, and the image's
const LABEL = 330; // px of white under the code for the name and role

const escapeXml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]);

/** The code with the person's name and role set under it. */
function labelled(qrSvg, e) {
  const code = qrSvg.replace(/^<svg /, `<svg x="0" y="0" width="${SIZE}" height="${SIZE}" `);
  const font = 'Arial, Helvetica, sans-serif';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE + LABEL}" viewBox="0 0 ${SIZE} ${SIZE + LABEL}">
  <rect width="100%" height="100%" fill="#ffffff"/>
  ${code}
  <text x="${SIZE / 2}" y="${SIZE + 60}" text-anchor="middle" font-family="${font}" font-size="130" font-weight="700" fill="#000000">${escapeXml(e.name)}</text>
  <text x="${SIZE / 2}" y="${SIZE + 190}" text-anchor="middle" font-family="${font}" font-size="80" fill="#444444">${escapeXml(e.role)}</text>
</svg>`;
}

const lines = [];

for (const e of employees) {
  const qrSvg = await QRCode.toString(e.url, { ...options, type: 'svg' });

  // The code alone.
  await QRCode.toFile(resolve(plainDir, `${e.slug}.png`), e.url, { ...options, width: SIZE });
  writeFileSync(resolve(plainDir, `${e.slug}.svg`), qrSvg);

  // The code with the name under it.
  const svg = labelled(qrSvg, e);
  writeFileSync(resolve(outDir, `${e.slug}.svg`), svg);
  const png = new Resvg(svg, { font: { loadSystemFonts: true, defaultFontFamily: 'Arial' } }).render().asPng();
  writeFileSync(resolve(outDir, `${e.slug}.png`), png);

  lines.push(`${e.name.padEnd(22)} ${e.url}`);
}

writeFileSync(resolve(outDir, 'links.txt'), lines.join('\n') + '\n');
console.log(lines.join('\n'));
console.log(`\n${employees.length} QR codes written to ${outDir}`);
