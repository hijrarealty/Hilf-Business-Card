import { company, office } from '../data/profile.js';

/**
 * Save contact — hand the phone the employee's full card: name, company,
 * role, mobile, email, office address and website.
 *
 *   iPhone   the contact file, opened as a page rather than downloaded.
 *            Safari shows it as the native contact card: Create New Contact.
 *   Android  the contact file, downloaded; tapping Open on it shows the
 *            Contacts import screen. A web page cannot open Android's
 *            Create contact screen itself: Chrome only lets a link open an
 *            app screen marked BROWSABLE, and that one is not.
 *   Desktop  the contact file, downloaded.
 *
 * The contact files are written at build time — dist/contacts/<slug>.vcf —
 * by vite.config.js, which reads this file too. A real file on the site,
 * not one made in the browser, is what lets iPhone open it directly
 * instead of asking to download it.
 */

/** Where an employee's contact file is served. */
export const contactPath = (e) => `/contacts/${e.slug}.vcf`;

/** vCard 3.0 text values escape backslash, comma, semicolon and newline. */
const esc = (v) => String(v).replace(/[\\,;]/g, (m) => `\\${m}`).replace(/\n/g, '\\n');

/** The contact file: everything a business card carries. */
export function contactVCard(e) {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${esc(e.familyName)};${esc(e.givenName)};;;`,
    `FN:${esc(e.name)}`,
    `ORG:${esc(company.name)}`,
    `TITLE:${esc(e.role)}`,
    `TEL;TYPE=CELL,VOICE:${e.tel}`,
    e.email && `EMAIL;TYPE=INTERNET,WORK:${e.email}`,
    `ADR;TYPE=WORK:;;${esc(office.street)};${esc(office.city)};;;${esc(office.country)}`,
    `URL:${company.site}`,
    e.linkedin && `X-SOCIALPROFILE;TYPE=linkedin:${e.linkedin}`,
    'END:VCARD',
  ]
    .filter(Boolean)
    .join('\r\n') + '\r\n';
}

const ua = () => (typeof navigator === 'undefined' ? '' : navigator.userAgent);

// iPadOS reports itself as a Mac; the touch screen gives it away.
const isIOS = () =>
  /iPhone|iPad|iPod/i.test(ua()) ||
  (/Macintosh/i.test(ua()) && typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1);

/**
 * The Save contact link for this visitor's device: its href, and whether
 * it should download (everywhere but iPhone, where the file must open).
 */
export function saveContactLink(e) {
  if (isIOS()) return { href: contactPath(e) };
  return { href: contactPath(e), download: `${e.name.replace(/\s+/g, '-')}.vcf` };
}
