/**
 * Single source of truth for every piece of copy and every link on the page.
 * Edit this file to update the site — no component holds content of its own.
 */

/* ------------------------------------------------------------------ *
 *  CONTACT — the five buttons
 *
 *  ⚠️  ONLY `linkedin` IS CONFIRMED. Replace the four placeholders below
 *      with real destinations before publishing.
 *
 *      whatsapp  — digits only, country code first, no +, spaces or dashes
 *                  e.g. UAE mobile 050 123 4567  →  '971501234567'
 *      instagram — the handle without the @
 *      facebook  — the profile slug from facebook.com/<slug>
 *      email     — the address to receive enquiries
 * ------------------------------------------------------------------ */
const CONTACT_RAW = {
  whatsapp: '971500000000', // PLACEHOLDER
  instagram: 'asifbinhossain', // PLACEHOLDER
  facebook: 'asifbinhossain', // PLACEHOLDER
  linkedin: 'asifbh', // confirmed
  email: 'asif@example.com', // PLACEHOLDER
};

/** Anything still matching these is a placeholder and is flagged in the console. */
const PLACEHOLDERS = ['971500000000', 'asifbinhossain', 'asif@example.com'];

export const socials = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    handle: '+971 50 402 0908',
    href: `https://wa.me/${CONTACT_RAW.whatsapp}`,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: '/in/asifbh',
    href: `https://www.linkedin.com/in/${CONTACT_RAW.linkedin}/`,
  },
  {
    id: 'email',
    label: 'Email',
    handle: CONTACT_RAW.email,
    href: `mailto:${CONTACT_RAW.email}`,
  },
  {
    id: 'website',
    label: 'HILF Shipping',
    short: 'Website',
    handle: 'hilfshipping.com',
    href: 'https://hilfshipping.com/',
  },
];

export const email = CONTACT_RAW.email;
export const phone = `+${CONTACT_RAW.whatsapp}`;
export const phoneDisplay = '+971 50 402 0908';

/* ------------------------------------------------------------------ *
 *  COMPANY — every fact here is taken from hilfshipping.com
 * ------------------------------------------------------------------ */
const SITE = 'https://hilfshipping.com/';

export const company = {
  name: 'HILF Shipping',
  legalName: 'HILF Shipping LLC',
  tagline: 'Your Voyage, Our Expertise',
  site: SITE,
  siteLabel: 'hilfshipping.com',
  kicker: 'Dry bulk ship operator · Dubai, UAE',
  lead: 'Dry bulk chartering with ethical global execution.',
  about: [
    'HILF Shipping supports the worldwide movement of dry bulk commodities through voyage charter, time charter and commercial management services.',
    'Headquartered in Dubai, the team brings decades of maritime expertise — combining commercial judgment, operational discipline and sustainable thinking to support clients across global shipping markets.',
  ],
  pillars: [
    { name: 'Proven', body: 'Track record in shipping and reliable cargo execution.' },
    { name: 'Expert', body: 'Sourcing and operational management with minimum claims.' },
    { name: 'Steadfast', body: 'Professional, cooperative teams focused on execution quality.' },
    { name: 'Clear', body: 'Transparent communication with real-time shipping updates.' },
  ],
  cargoes: [
    'Limestone',
    'Gypsum',
    'Dolomite',
    'Iron ore',
    'Coal',
    'Minerals',
    'Grains',
    'Fertilizers',
    'Agri-products',
    'Bauxite',
    'Alumina',
    'Cement',
    'Aggregates',
  ],
  clients: ['Aditya Birla Global Trading', 'Tata Chemicals', 'ArcelorMittal', 'TotalEnergies', 'Saint-Gobain'],
  office: {
    lines: ['Office #2007, Level 20, Tamani Arts Building', 'Al Asayel Street, Business Bay', 'Dubai, United Arab Emirates'],
    map: 'https://www.google.com/maps/search/?api=1&query=Tamani+Arts+Building+Business+Bay+Dubai',
  },
  desk: 'chartering@hilfshipping.com',
  /** Deep links into the company site's own sections. */
  links: [
    { label: 'About HILF', href: `${SITE}#about` },
    { label: 'Our Business', href: `${SITE}#business` },
    { label: 'Why HILF', href: `${SITE}#why-us` },
    { label: 'Contact', href: `${SITE}#contact` },
  ],
};

/* ------------------------------------------------------------------ */

export const person = {
  wordmark: 'ASIF',
  /** Set under the wordmark's right-hand end, completing the full name. */
  surname: 'Bin Hossain',
  name: 'Asif Bin Hossain',
  role: 'Senior Chartering Manager',
  company: company.legalName,
  location: 'Dubai, United Arab Emirates',
  signoff: ['The chartering desk.', "That's Asif."],
  headline: ['Dry Bulk,', 'Chartered', 'Differently.'],
  intro:
    'Fixing dry bulk tonnage at HILF Shipping in Dubai — the right vessel at the right time, and a voyage kept clean long after the deal is done.',
  /** Each trait carries its own drawn mark — see Icon.jsx for the set. */
  traits: [
    { label: 'Analytical', icon: 'chart' },
    { label: 'Reliable', icon: 'shield' },
    { label: 'Negotiator', icon: 'users' },
    { label: 'Operator', icon: 'anchor' },
    { label: 'Decisive', icon: 'bolt' },
  ],
};

export const stats = [
  { value: '9+', label: ['Years in', 'dry bulk'] },
  { value: '13', label: ['Dry bulk', 'cargoes'] },
];

export const nav = [
  { id: 'hero', label: 'Home', icon: 'home' },
  { id: 'company', label: 'HILF Shipping', icon: 'building' },
  { id: 'journey', label: 'About Me', icon: 'compass' },
  { id: 'expertise', label: 'Expertise', icon: 'layers' },
  { id: 'services', label: 'Services', icon: 'bolt' },
  { id: 'contact', label: 'Contact', icon: 'send' },
];

/** Real, verifiable affiliations — not client claims. Runs as a marquee. */
export const affiliations = [
  'HILF Shipping LLC',
  'Ever Glory Ship Charter',
  'Wealth Creation Gen. Trading',
  'Triton Ships Ltd',
  'Akij Shipping Line',
  'BSMR Maritime University',
];

export const journeyIntro = {
  eyebrowless: 'About Me (&)',
  title: ['About Me (&)', 'My Journey'],
  body: 'Nine years ago I started on the operations side of a Dhaka shipping line. What happened after that is easier to show than to explain.',
};

export const journey = [
  {
    year: "'16",
    title: 'Where it started',
    body: 'Assistant Manager at Akij Shipping Line in Dhaka. Six years learning the trade from the operations side — the part most chartering people only read about in a claim.',
    org: 'Akij Shipping Line Ltd',
    meta: 'Dhaka · 2016–2022',
  },
  {
    year: "'21",
    title: 'Back to school, mid-career',
    body: 'MSc in Port & Shipping Management at Bangabandhu Sheikh Mujibur Rahman Maritime University, taken while working full time. A second master’s, after Mathematics.',
    org: 'BSMR Maritime University',
    meta: 'Dhaka · 2021–2022',
  },
  {
    year: "'22",
    title: 'Dubai, and the broker’s chair',
    body: 'Moved to the Gulf as a dry bulk ship broker with Triton Ships. Same cargoes, opposite side of the table — and a much faster clock.',
    org: 'Triton Ships Limited',
    meta: 'Dubai · 2022',
  },
  {
    year: "'22",
    title: 'Running the desk',
    body: 'Chartering Manager at Wealth Creation General Trading. Owning the fixture end to end: market read, negotiation, recap, then operations.',
    org: 'Wealth Creation General Trading LLC',
    meta: 'Dubai · from 2022',
  },
  {
    year: 'Then',
    title: 'Ever Glory Ship Charter',
    body: 'Chartering dry bulk tonnage out of Dubai, with the operations background still the part that pays for itself.',
    org: 'Ever Glory Ship Charter LLC',
    meta: 'Dubai',
  },
  {
    year: 'Now',
    title: 'Senior Chartering Manager',
    body: 'Leading dry bulk fixtures at HILF Shipping in Business Bay — voyage charter, time charter and commercial management for producers, traders and industrial end-users worldwide.',
    org: 'HILF Shipping LLC',
    meta: 'Dubai · Present',
  },
];

export const expertise = {
  title: 'Expertise',
  /**
   * The statement renders as a run of words with `chip` entries inlined.
   * Each chip reveals a card on hover / focus.
   */
  statement: [
    { text: 'Market read, fixture strategy, and post-fixture' },
    {
      chip: {
        icon: 'chart',
        title: 'Market Analysis',
        body: 'Reading rates, tonnage lists and cargo flow across the Atlantic and Pacific basins before the fixture, not after.',
      },
    },
    { text: 'discipline combined — turning your' },
    {
      chip: {
        icon: 'anchor',
        title: 'Dry Bulk Chartering',
        body: 'Voyage and time charter fixtures on Handysize through Kamsarmax. Negotiation, recap, and a charter party that holds.',
      },
    },
    { text: 'cargo into a voyage that pays, with the' },
    {
      chip: {
        icon: 'clock',
        title: 'Laytime & Demurrage',
        body: 'Laytime calculations and demurrage claims handled as a chartering input, so the exposure is priced into the fixture.',
      },
    },
    { text: 'risk priced in and the' },
    {
      chip: {
        icon: 'users',
        title: 'Owner Relations',
        body: 'Long relationships with owners and operators across the Gulf, the subcontinent and Southeast Asia.',
      },
    },
    { text: 'surprises' },
    {
      chip: {
        icon: 'shield',
        title: 'Post-Fixture Ops',
        body: 'Laycan, stowage, port agency and documentation followed through to final accounts.',
      },
    },
    { text: 'left ashore.' },
  ],
};

export const services = {
  title: ['What I Handle', 'at HILF'],
  body: 'HILF Shipping’s three lines of business, run from my desk — cargo in, voyage out, accounts closed.',
  items: [
    {
      icon: 'anchor',
      name: 'Voyage Charter',
      lede: 'Structured voyage charters tailored to cargo profile, route economics and operational requirements.',
      points: [
        'Tonnage and cargo matching against live position lists',
        'Freight negotiation and recap',
        'Charter party drafting, riders and clause review',
        'Laycan planning around the production schedule',
        'Laytime and demurrage priced into the fixture',
      ],
      fit: 'For producers, traders, importers and exporters moving dry bulk cargo.',
    },
    {
      icon: 'clock',
      name: 'Time Charter',
      lede: 'Dependable tonnage with commercial clarity and controlled execution.',
      points: [
        'Period and trip time charter fixtures',
        'Delivery and redelivery planning',
        'Hire, bunkers and off-hire terms that hold',
        'Owner and operator relationships across the Gulf and Asia',
        'Post-fixture follow-through to final accounts',
      ],
      fit: 'For clients who need a vessel on hand, not just a single voyage.',
    },
    {
      icon: 'chart',
      name: 'Commercial Management',
      lede: 'Aligning vessel employment, cargo timing and market opportunity with client objectives.',
      points: [
        'Basin-level rate and tonnage analysis',
        'Freight budgeting and route comparison',
        'Counterparty and route risk assessment',
        'Port agency coordination and disbursement review',
        'Claims preparation, negotiation and settlement',
      ],
      fit: 'For steel mills, power companies and industrial end-users with recurring cargo.',
    },
  ],
};

export const contact = {
  title: ['Have a cargo', 'or a vessel?'],
  body: 'Dry bulk moves on WhatsApp and email at odd hours. Pick whichever is easiest — all five reach me.',
};

/* Dev-time nudge so the placeholders do not quietly ship. */
if (import.meta.env?.DEV) {
  const pending = socials.filter((s) => s.isPlaceholder).map((s) => s.label);
  if (pending.length) {
    console.warn(
      `[profile] Placeholder contact links still in place: ${pending.join(', ')}. ` +
        'Update CONTACT_RAW in src/data/profile.js before publishing.'
    );
  }
  if (voices.synthetic) {
    console.warn('[profile] Voices section contains SYNTHETIC placeholder testimonials. Replace or remove before publishing.');
  }
}
