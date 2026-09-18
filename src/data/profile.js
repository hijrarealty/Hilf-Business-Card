/**
 * Single source of truth for every piece of copy and every link on the card.
 * Edit this file to update the site — no component holds content of its own.
 */

/* ------------------------------------------------------------------ *
 *  EMPLOYEE — exact spelling and capitalisation as supplied
 * ------------------------------------------------------------------ */
export const person = {
  /** The large display wordmark (decorative). */
  wordmark: 'ASIF',
  name: 'Asif bin Hossain',
  givenName: 'Asif',
  familyName: 'bin Hossain',
  role: 'Senior Chartering Manager',
  location: 'Dubai, United Arab Emirates',
};

/* ------------------------------------------------------------------ *
 *  CONTACT
 *      whatsapp — digits only, country code first, no +, spaces or dashes
 * ------------------------------------------------------------------ */
const CONTACT_RAW = {
  whatsapp: '971504020908',
  phone: '971504020908',
  linkedin: 'https://www.linkedin.com/in/asifbh/',
  email: 'asif@hilfshipping.com',
};

export const phone = `+${CONTACT_RAW.phone}`;
export const phoneDisplay = '+971 50 402 0908';
export const email = CONTACT_RAW.email;
export const linkedin = CONTACT_RAW.linkedin;

/* ------------------------------------------------------------------ *
 *  COMPANY
 *  The description is HILF Shipping's own wording from hilfshipping.com.
 * ------------------------------------------------------------------ */
export const company = {
  name: 'HILF Shipping',
  site: 'https://hilfshipping.com/',
  siteLabel: 'hilfshipping.com',
  kicker: 'Dry bulk ship operator · Dubai, UAE',
  tagline: 'Dry bulk chartering with ethical global execution.',
  intro:
    'HILF Shipping supports the worldwide movement of dry bulk commodities through voyage charter, time charter and commercial management services.',
};

/* ------------------------------------------------------------------ *
 *  OFFICE ADDRESS — shown in the footer and saved into the vCard.
 *  As listed on Google Maps for "HILF Shipping LLC FZ".
 * ------------------------------------------------------------------ */
const OFFICE_QUERY = 'HILF Shipping LLC FZ, Tamani Arts Building, Al Asayel St, Business Bay, Dubai';

export const office = {
  label: 'HILF Shipping LLC FZ',
  lines: ['Tamani Arts Building', 'Al Asayel St, Business Bay', 'Dubai, United Arab Emirates'],
  /** vCard fields */
  street: 'Tamani Arts Building, Al Asayel St, Business Bay',
  city: 'Dubai',
  country: 'United Arab Emirates',
  /** Opens the office's own Google Maps listing (its place ID). */
  map: 'https://maps.google.com/?cid=12299312600407320269',
  /** Opens Google Maps with a route from the visitor to the office. */
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(OFFICE_QUERY)}`,
};

/* ------------------------------------------------------------------ *
 *  CONTACT ROUTES — rendered as buttons in the hero, the footer and
 *  the mobile bar. Order is the order they appear.
 * ------------------------------------------------------------------ */
export const socials = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    handle: phoneDisplay,
    href: `https://wa.me/${CONTACT_RAW.whatsapp}`,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: '/in/asifbh',
    href: CONTACT_RAW.linkedin,
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
    handle: company.siteLabel,
    href: company.site,
  },
];

export const stats = [
  { value: '9+', label: ['Years in', 'dry bulk'] },
  { value: '13', label: ['Dry bulk', 'cargoes'] },
];
