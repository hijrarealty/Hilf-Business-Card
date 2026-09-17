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
  whatsapp: '971504020908', // PLACEHOLDER
  instagram: 'asifbinhossain', // PLACEHOLDER
  facebook: 'asifbinhossain', // PLACEHOLDER
  linkedin: 'asifbh', // confirmed
  email: 'asif@hilfshipping.com', // PLACEHOLDER
};

/** Anything still matching these is a placeholder and is flagged in the console. */
const PLACEHOLDERS = ['971500000000', 'asifbinhossain', 'asif@example.com'];

export const socials = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    handle: 'Message on WhatsApp',
    href: `https://wa.me/${CONTACT_RAW.whatsapp}`,
    isPlaceholder: PLACEHOLDERS.includes(CONTACT_RAW.whatsapp),
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: `@${CONTACT_RAW.instagram}`,
    href: `https://instagram.com/${CONTACT_RAW.instagram}`,
    isPlaceholder: PLACEHOLDERS.includes(CONTACT_RAW.instagram),
  },
  {
    id: 'facebook',
    label: 'Facebook',
    handle: `/${CONTACT_RAW.facebook}`,
    href: `https://facebook.com/${CONTACT_RAW.facebook}`,
    isPlaceholder: PLACEHOLDERS.includes(CONTACT_RAW.facebook),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: '/in/asifbh',
    href: `https://www.linkedin.com/in/${CONTACT_RAW.linkedin}/`,
    isPlaceholder: false,
  },
  {
    id: 'email',
    label: 'Email',
    handle: CONTACT_RAW.email,
    href: `mailto:${CONTACT_RAW.email}`,
    isPlaceholder: PLACEHOLDERS.includes(CONTACT_RAW.email),
  },
];

export const email = CONTACT_RAW.email;

/* ------------------------------------------------------------------ */

export const person = {
  wordmark: 'ASIF',
  name: 'Asif Bin Hossain',
  role: 'Dry Bulk Chartering',
  location: 'Dubai, United Arab Emirates',
  signoff: ['The chartering desk.', "That's Asif."],
  headline: ['Dry Bulk,', 'Chartered', 'Differently.'],
  intro:
    'Working alongside owners, traders and operators to fix the right tonnage at the right time — and keep the voyage clean long after the deal is done.',
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
  { value: '2', label: ["Master's", 'degrees'] },
];

export const nav = [
  { id: 'hero', label: 'Home', icon: 'home' },
  { id: 'journey', label: 'About Me', icon: 'compass' },
  { id: 'expertise', label: 'Expertise', icon: 'layers' },
  { id: 'services', label: 'Services', icon: 'bolt' },
  { id: 'voices', label: 'Voices', icon: 'quote' },
  { id: 'contact', label: 'Contact', icon: 'send' },
];

/** Real, verifiable affiliations — not client claims. Runs as a marquee. */
export const affiliations = [
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
    meta: 'Dubai · 2022–',
  },
  {
    year: 'Now',
    title: 'Ever Glory Ship Charter',
    body: 'Chartering dry bulk tonnage out of Dubai. Nine years in, the operations background is still the part that pays for itself.',
    org: 'Ever Glory Ship Charter LLC',
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
  title: ['Solutions', 'That Deliver'],
  body: 'Same attention either way. The only difference is how much of the voyage sits on my desk.',
  items: [
    {
      icon: 'anchor',
      name: 'Dry Bulk Chartering',
      lede: 'Voyage and time charter fixtures, Handysize through Kamsarmax.',
      points: [
        'Tonnage and cargo matching against live position lists',
        'Freight negotiation and recap',
        'Charter party drafting, riders and clause review',
        'Laycan planning around your production schedule',
        'Owner and operator introductions across the Gulf',
      ],
      fit: 'For shippers and traders who need a vessel fixed and want the terms to hold.',
    },
    {
      icon: 'shield',
      name: 'Post-Fixture & Operations',
      lede: 'The part of the voyage where money quietly leaves the room.',
      points: [
        'Laytime statements and demurrage calculations',
        'Claims preparation, negotiation and settlement',
        'Port agency coordination and disbursement review',
        'Stowage, draft survey and documentation follow-through',
        'Final accounts reconciled against the charter party',
      ],
      fit: 'For owners and charterers carrying voyages they do not have the desk to police.',
    },
    {
      icon: 'chart',
      name: 'Commercial Advisory',
      lede: 'Market read and freight strategy, engagement by engagement.',
      points: [
        'Basin-level rate and tonnage analysis',
        'Freight budgeting and route comparison',
        'Counterparty and route risk assessment',
        'Contract of affreightment structuring input',
        'Desk setup and process review for new chartering teams',
      ],
      fit: 'For businesses moving into dry bulk, or rebuilding a chartering function.',
    },
  ],
};

/**
 * ⚠️  SYNTHETIC PLACEHOLDER CONTENT — these are NOT real testimonials.
 *     Replace every entry with a genuine quote (LinkedIn recommendations are
 *     a good source) or delete the Voices section from App.jsx before launch.
 */
export const voices = {
  title: ['From People', "I've Worked With"],
  synthetic: true,
  items: [
    {
      heading: 'Knows the cargo, not just the rate.',
      body: 'Placeholder testimonial. Asif came to every negotiation already knowing how the cargo would actually load and what it would cost us if the laycan slipped.',
      author: 'Replace with a real name',
      role: 'Role · Company',
    },
    {
      heading: 'Post-fixture is where he earns it.',
      body: 'Placeholder testimonial. The demurrage exposure was flagged before we fixed, not after the vessel sailed. That is not the normal experience.',
      author: 'Replace with a real name',
      role: 'Role · Company',
    },
    {
      heading: 'Straight answers, fast.',
      body: 'Placeholder testimonial. Across time zones and at short notice, the answer came back the same day and it was the honest one.',
      author: 'Replace with a real name',
      role: 'Role · Company',
    },
    {
      heading: 'A safe pair of hands on the desk.',
      body: 'Placeholder testimonial. We handed over a voyage mid-stream and it was reconciled cleanly without a single escalation to us.',
      author: 'Replace with a real name',
      role: 'Role · Company',
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
