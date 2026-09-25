/**
 * Single source of truth for every piece of copy and every link on the site.
 * Edit this file to update it — no component holds content of its own.
 *
 * One site, one card per employee. Each employee's card lives at
 *     https://hilf-business-card-new.vercel.app/<slug>
 * and that is the link the QR code on their printed card points to.
 *
 * Keep this file plain data (no imports): the build and the QR script
 * read it too.
 */

/** The live address. The QR codes are made from this. */
export const SITE_URL = 'https://hilf-business-card-new.vercel.app';

/* ------------------------------------------------------------------ *
 *  COMPANY — shared by every card.
 *  The description is HILF Shipping's own wording from hilfshipping.com.
 * ------------------------------------------------------------------ */
export const company = {
  name: 'HILF Shipping LLC FZ',
  site: 'https://hilfshipping.com/',
  siteLabel: 'hilfshipping.com',
  tagline: 'Dry bulk chartering with ethical global execution.',
  intro:
    'HILF Shipping supports the worldwide movement of dry bulk commodities through voyage charter, time charter and commercial management services.',
};

/* ------------------------------------------------------------------ *
 *  OFFICE — shared by every card. No directions button: the Location
 *  button opens the office's own listing on Google Maps.
 * ------------------------------------------------------------------ */
export const office = {
  label: 'HILF Shipping LLC FZ',
  lines: ['Tamani Arts Building', 'Al Asayel St, Business Bay', 'Dubai, United Arab Emirates'],
  /** vCard fields */
  street: 'Tamani Arts Building, Al Asayel St, Business Bay',
  city: 'Dubai',
  country: 'United Arab Emirates',
  /** The office's own Google Maps listing (its place ID). */
  map: 'https://maps.google.com/?cid=12299312600407320269',
};

/* ------------------------------------------------------------------ *
 *  EMPLOYEES — one entry each, in the order the team is listed.
 *
 *    slug          the link: SITE_URL/<slug>. Lowercase, dashes, no spaces.
 *                  Never change it once cards are printed — it is in the QR.
 *    phone         digits only, country code first, no +, spaces or dashes
 *    whatsapp      same format. Leave out and the WhatsApp button goes.
 *    phoneDisplay  the number as people read it
 *    linkedin      full URL. Leave out and the LinkedIn button goes.
 *    linkedinHandle  optional — the line under "LinkedIn". Worked out
 *                  from the URL when left out ("/in/asifbh").
 * ------------------------------------------------------------------ */
const STAFF = [
  {
    slug: 'asif',
    name: 'Asif bin Hossain',
    givenName: 'Asif',
    familyName: 'bin Hossain',
    role: 'Senior Chartering Manager',
    phone: '971504020908',
    phoneDisplay: '+971 50 402 0908',
    whatsapp: '971504020908',
    email: 'asif@hilfshipping.com',
    linkedin: 'https://www.linkedin.com/in/asifbh/',
  },
  {
    slug: 'hameed',
    name: 'Hameed Abdullah',
    givenName: 'Hameed',
    familyName: 'Abdullah',
    role: 'Founder & CEO',
    phone: '971545400107',
    phoneDisplay: '+971 54 540 0107',
    whatsapp: '971545400107',
    email: 'hameed@hilfshipping.com',
    // The company page, as supplied — not a personal profile.
    linkedin: 'https://www.linkedin.com/company/hilf-shipping-llc-fz/',
    linkedinHandle: 'HILF Shipping LLC FZ',
  },
  {
    slug: 'jana-alam',
    name: 'Md Jana Alam',
    givenName: 'Md Jana',
    familyName: 'Alam',
    role: 'Operations Director',
    phone: '971542008753',
    phoneDisplay: '+971 54 200 8753',
    whatsapp: '971542008753',
    email: 'janaalam@hilfshipping.com',
    linkedin: 'https://www.linkedin.com/in/md-jana-alam-294944248/',
  },
  {
    slug: 'akash',
    name: 'Akash Akkiparambath',
    givenName: 'Akash',
    familyName: 'Akkiparambath',
    role: 'Operations Manager',
    phone: '971585267580',
    phoneDisplay: '+971 58 526 7580',
    whatsapp: '971585267580',
    email: 'akash@hilfshipping.com',
    linkedin: 'https://www.linkedin.com/in/akash-akkiparambath-1a5a7221b/',
  },
  {
    slug: 'jabir',
    name: 'Jabir Mohamed',
    givenName: 'Jabir',
    familyName: 'Mohamed',
    role: 'Assistant Chartering Manager',
    phone: '971585984747',
    phoneDisplay: '+971 58 598 4747',
    whatsapp: '971585984747',
    email: 'jabir@hilfshipping.com',
    linkedin: 'https://www.linkedin.com/in/jabirnizam/',
  },
];

/**
 * The card the bare address shows. Asif's printed cards were made before
 * each employee had their own link, so their QR codes point at the bare
 * address — it must keep opening his card.
 */
const DEFAULT_SLUG = 'asif';

/** "/in/asifbh" from the full profile URL. */
const handleFromUrl = (url) => {
  try {
    return new URL(url).pathname.replace(/\/$/, '');
  } catch {
    return 'View profile';
  }
};

/**
 * Contact routes — one button each, in the order they appear.
 * Call and Save contact are not in this list: they are the two actions a
 * scanned card is for, so they sit at the top of the card as a pair.
 * A route the employee has no value for is simply left off.
 */
function buildRoutes(e) {
  return [
    e.whatsapp && {
      id: 'whatsapp',
      label: 'WhatsApp',
      handle: 'Message directly',
      href: `https://wa.me/${e.whatsapp}`,
      external: true,
    },
    e.email && {
      id: 'email',
      label: 'Email',
      handle: e.email,
      href: `mailto:${e.email}`,
    },
    e.linkedin && {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: e.linkedinHandle || handleFromUrl(e.linkedin),
      href: e.linkedin,
      external: true,
    },
  ].filter(Boolean);
}

export const employees = STAFF.map((e) => ({
  ...e,
  tel: `+${e.phone}`,
  url: `${SITE_URL}/${e.slug}`,
  routes: buildRoutes(e),
}));

/** The employee a path belongs to. An empty path is the default card. */
export function findEmployee(slug) {
  const s = String(slug || DEFAULT_SLUG).toLowerCase();
  return employees.find((e) => e.slug === s);
}

/** Page title and link-preview text for one employee. */
export const pageMeta = (e) => ({
  title: `${e.name} — ${e.role}, HILF Shipping`,
  description: `${e.name}, ${e.role} at HILF Shipping, Dubai. Call, WhatsApp, email or save their contact details.`,
});
