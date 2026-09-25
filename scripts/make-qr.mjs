/**
 * One QR code per employee, for the printed business cards.
 *
 *     npm run qr
 *
 * Writes qr-codes/<slug>.png (2000px, for print) and qr-codes/<slug>.svg
 * (vector, for the designer). Each encodes that employee's own link —
 * SITE_URL/<slug> — read from src/data/profile.js, so adding someone
 * there and running this again makes their code.
 *
 * Plain black on white with a full quiet zone: the most reliable thing
 * for any phone camera to read. Scan every one before sending to print.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import QRCode from 'qrcode';
import { employees } from '../src/data/profile.js';

const outDir = resolve(process.cwd(), 'qr-codes');
mkdirSync(outDir, { recursive: true });

const options = {
  errorCorrectionLevel: 'M',
  margin: 4,
  color: { dark: '#000000', light: '#ffffff' },
};

const lines = [];

for (const e of employees) {
  await QRCode.toFile(resolve(outDir, `${e.slug}.png`), e.url, { ...options, width: 2000 });
  writeFileSync(resolve(outDir, `${e.slug}.svg`), await QRCode.toString(e.url, { ...options, type: 'svg' }));
  lines.push(`${e.name.padEnd(22)} ${e.url}`);
}

writeFileSync(resolve(outDir, 'links.txt'), lines.join('\n') + '\n');
console.log(lines.join('\n'));
console.log(`\n${employees.length} QR codes written to ${outDir}`);
