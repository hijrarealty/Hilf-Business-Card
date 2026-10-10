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
 *    linkedinHandle  optional — the line under "LinkedIn". Their name
 *                  when left out; set it if the profile is named differently.
 *    teams         the email they sign in to Microsoft Teams with. Leave
 *                  out and the Teams button goes.
 *                  Set linkedin or teams to '' to keep its button on the
 *                  card, greyed out, until the link is known.
 * ------------------------------------------------------------------ */
const STAFF = [
  {
    slug: 'asif',
    name: 'Asif Bin Hossain',
    givenName: 'Asif',
    familyName: 'Bin Hossain',
    role: 'Senior Manager - Dry Cargo Chartering',
    phone: '971504020908',
    phoneDisplay: '+971 50 402 0908',
    whatsapp: '971504020908',
    email: 'asif@hilfshipping.com',
    linkedin: 'https://www.linkedin.com/in/asifbh/',
    teams: 'asif.asll@hotmail.com',
  },
  {
    slug: 'hameed',
    name: 'Hameed Abdullah',
    givenName: 'Hameed',
    familyName: 'Abdullah',
    role: 'CEO / Founder',
    phone: '971545400107',
    phoneDisplay: '+971 54 540 0107',
    whatsapp: '919884552834',
    email: 'hameed@hilfshipping.com',
    // The company page, as supplied — not a personal profile.
    linkedin: 'https://www.linkedin.com/company/hilf-shipping-llc-fz/',
    linkedinHandle: 'HILF Shipping LLC FZ',
    teams: 'hameedj6@gmail.com',
  },
  {
    slug: 'jana-alam',
    name: 'Md Jana Alam',
    givenName: 'Md Jana',
    familyName: 'Alam',
    role: 'Director - Dry Cargo Operations',
    phone: '971542008753',
    phoneDisplay: '+971 54 200 8753',
    whatsapp: '971542008753',
    email: 'janaalam@hilfshipping.com',
    linkedin: 'https://www.linkedin.com/in/md-jana-alam-294944248/',
    teams: 'janaalam2929@gmail.com',
  },
  {
    slug: 'akash',
    name: 'Akash Akkiparambath',
    givenName: 'Akash',
    familyName: 'Akkiparambath',
    role: 'Manager - Dry Cargo Chartering / Operations',
    phone: '971585267580',
    phoneDisplay: '+971 58 526 7580',
    whatsapp: '971585267580',
    email: 'akash@hilfshipping.com',
    linkedin: 'https://www.linkedin.com/in/akash-akkiparambath-1a5a7221b/',
    teams: 'akash_a@outlook.com',
  },
  {
    slug: 'jabir',
    name: 'Jabir Mohamed',
    givenName: 'Jabir',
    familyName: 'Mohamed',
    role: 'Manager - Dry Cargo Chartering',
    phone: '971585984747',
    phoneDisplay: '+971 58 598 4747',
    whatsapp: '971585984747',
    email: 'jabir@hilfshipping.com',
    linkedin: 'https://www.linkedin.com/in/jabirnizam/',
    teams: 'Jabirmohamed98@gmail.com',
  },
  {
    slug: 'shamsudeen',
    name: 'Mohammed Shamsudeen',
    givenName: 'Mohammed',
    familyName: 'Shamsudeen',
    role: 'Senior Manager - Dry Cargo Chartering',
    phone: '971542008754',
    phoneDisplay: '+971 54 200 8754',
    whatsapp: '971542008754',
    email: 'shams@hilfshipping.com',
    // Still to come — '' keeps the button on the card, greyed out.
    linkedin: '',
    teams: '',
  },
  {
    slug: 'saleem',
    name: 'Mohamed Saleem',
    givenName: 'Mohamed',
    familyName: 'Saleem',
    role: 'Director - Finance / HR',
    phone: '971589842522',
    phoneDisplay: '+971 58 984 2522',
    whatsapp: '971589842522',
    email: 'saleem@yourofficepartners.com',
    linkedin: 'https://www.linkedin.com/in/mohamedsaleem-taxconsultant/',
    teams: 'saleem@yourofficepartners.com',
  },
];

/**
 * The card the bare address shows. Asif's printed cards were made before
 * each employee had their own link, so their QR codes point at the bare
 * address — it must keep opening his card.
 */
const DEFAULT_SLUG = 'asif';

/** "+971 50 402 0908" from "971504020908". Other countries: "+91 98845 52834". */
const formatNumber = (digits) => {
  const d = String(digits).replace(/\D/g, '');
  if (d.startsWith('971') && d.length === 12) {
    return `+971 ${d.slice(3, 5)} ${d.slice(5, 8)} ${d.slice(8)}`;
  }
  if (d.startsWith('91') && d.length === 12) {
    return `+91 ${d.slice(2, 7)} ${d.slice(7)}`;
  }
  return `+${d}`;
};

/** The line under a button whose link is not known yet. */
const PENDING = 'Coming soon';

/**
 * Contact routes — one button each, in the order they appear.
 * Call and Save contact are not in this list: they are the two actions a
 * scanned card is for, so they sit at the top of the card as a pair.
 * A route the employee has no value for is simply left off; one set to ''
 * stays, with no href, and the card draws it greyed out.
 */
function buildRoutes(e) {
  return [
    e.whatsapp && {
      id: 'whatsapp',
      label: 'WhatsApp',
      handle: formatNumber(e.whatsapp),
      href: `https://wa.me/${e.whatsapp}`,
      external: true,
    },
    e.email && {
      id: 'email',
      label: 'Email',
      handle: e.email,
      href: `mailto:${e.email}`,
    },
    e.teams != null && {
      id: 'teams',
      label: 'Microsoft Teams',
      handle: e.teams || PENDING,
      href: e.teams && `https://teams.microsoft.com/l/chat/0/0?users=${encodeURIComponent(e.teams)}`,
      external: true,
    },
    e.linkedin != null && {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: e.linkedin ? e.linkedinHandle || e.name : PENDING,
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
