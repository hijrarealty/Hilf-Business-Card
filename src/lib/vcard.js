import { company, office } from '../data/profile.js';

/**
 * Save contact — open the phone's own "new contact" screen with the
 * employee already filled in: name, company, role, mobile, email, office
 * address and website. The visitor just taps Save.
 *
 * No web link opens that screen on every phone the way tel: opens the
 * dialer, so each platform gets the route it does support — and none of
 * them leaves a file behind on a phone:
 *
 *   Android  an intent link straight to the Create contact screen with the
 *            details in it (Chrome, Samsung Internet). Nothing downloads.
 *            A browser that can't follow it (some in-app browsers) falls
 *            back to the contact file below.
 *   iPhone   the contact file, opened as a page rather than downloaded.
 *            Safari shows it as the native contact card: Create New Contact.
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

const isAndroid = () => /Android/i.test(ua());

// iPadOS reports itself as a Mac; the touch screen gives it away.
const isIOS = () =>
  /iPhone|iPad|iPod/i.test(ua()) ||
  (/Macintosh/i.test(ua()) && typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1);

/**
 * Android's Insert-contact screen, addressed as a link. The extras are
 * ContactsContract.Intents.Insert's keys. phone_type 2 is Mobile and
 * email_type 2 is Work (ContactsContract.CommonDataKinds.*.TYPE_*).
 * The website and LinkedIn have no Insert key; they travel in the file.
 */
function androidInsertIntent(e) {
  const fallback = `${window.location.origin}${contactPath(e)}`;
  const s = (key, value) => value && `S.${key}=${encodeURIComponent(value)}`;
  return [
    'intent:#Intent',
    'action=android.intent.action.INSERT',
    'type=vnd.android.cursor.dir/raw_contact',
    s('name', e.name),
    s('company', company.name),
    s('job_title', e.role),
    s('phone', e.tel),
    'i.phone_type=2',
    s('email', e.email),
    e.email && 'i.email_type=2',
    s('postal', `${office.street}, ${office.city}, ${office.country}`),
    s('browser_fallback_url', fallback),
    'end',
  ]
    .filter(Boolean)
    .join(';');
}

/**
 * The Save contact link for this visitor's device: its href, and whether
 * it should download (desktop only — on a phone the file must open).
 */
export function saveContactLink(e) {
  if (isAndroid()) return { href: androidInsertIntent(e) };
  if (isIOS()) return { href: contactPath(e) };
  return { href: contactPath(e), download: `${e.name.replace(/\s+/g, '-')}.vcf` };
}
