/**
 * Save contact — open the phone's own "new contact" screen with the
 * employee's number already filled in. The visitor adds a name if they
 * want and taps Save. Nothing else is pre-filled, by design.
 *
 * No web link opens that screen on every phone the way tel: opens the
 * dialer, so each platform gets the route it does support:
 *
 *   Android  an intent link straight to the Create contact screen with the
 *            number in it (Chrome, Samsung Internet). A browser that can't
 *            follow it falls back to the contact file below.
 *   iPhone   the contact file, opened as a page rather than downloaded.
 *            Safari shows it as the native contact card: Create New Contact.
 *   Desktop  the contact file, downloaded.
 *
 * The contact files are written at build time — dist/contacts/<slug>.vcf —
 * by vite.config.js, which is why this file has no imports: the build
 * reads it too. A real file on the site, not one made in the browser, is
 * what lets iPhone open it directly instead of asking to download it.
 */

/** Where an employee's contact file is served. */
export const contactPath = (e) => `/contacts/${e.slug}.vcf`;

/** The contact file: the phone number only. */
export function phoneOnlyVCard(e) {
  return ['BEGIN:VCARD', 'VERSION:3.0', 'N:;;;;', 'FN:', `TEL;TYPE=CELL:${e.tel}`, 'END:VCARD', ''].join('\r\n');
}

const ua = () => (typeof navigator === 'undefined' ? '' : navigator.userAgent);

const isAndroid = () => /Android/i.test(ua());

// iPadOS reports itself as a Mac; the touch screen gives it away.
const isIOS = () =>
  /iPhone|iPad|iPod/i.test(ua()) ||
  (/Macintosh/i.test(ua()) && typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1);

/**
 * Android's Insert-contact screen, addressed as a link.
 * phone_type 2 is "Mobile" (ContactsContract.CommonDataKinds.Phone.TYPE_MOBILE).
 */
function androidInsertIntent(e) {
  const fallback = `${window.location.origin}${contactPath(e)}`;
  return [
    'intent:#Intent',
    'action=android.intent.action.INSERT',
    'type=vnd.android.cursor.dir/raw_contact',
    `S.phone=${encodeURIComponent(e.tel)}`,
    'i.phone_type=2',
    `S.browser_fallback_url=${encodeURIComponent(fallback)}`,
    'end',
  ].join(';');
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
