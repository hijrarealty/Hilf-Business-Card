import { person, company, email, phone, socials } from '../data/profile';

/** vCard 3.0 text values escape backslash, comma, semicolon and newline. */
const esc = (v) => String(v).replace(/[\\,;]/g, (m) => `\\${m}`).replace(/\n/g, '\\n');

function buildVCard() {
  // "Bin Hossain" is the family name as a whole — "Bin" is not a middle name.
  const [given, ...family] = person.name.split(' ');
  const linkedin = socials.find((s) => s.id === 'linkedin')?.href;
  const street = company.office.lines.slice(0, 2).join(', ');

  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${esc(family.join(' '))};${esc(given)};;;`,
    `FN:${esc(person.name)}`,
    `ORG:${esc(company.legalName)}`,
    `TITLE:${esc(person.role)}`,
    `TEL;TYPE=CELL,VOICE:${phone}`,
    `EMAIL;TYPE=INTERNET,WORK:${email}`,
    `ADR;TYPE=WORK:;;${esc(street)};Dubai;;;United Arab Emirates`,
    `URL:${company.site}`,
    linkedin && `X-SOCIALPROFILE;TYPE=linkedin:${linkedin}`,
    'END:VCARD',
  ]
    .filter(Boolean)
    .join('\r\n');
}

/**
 * Hands the visitor a .vcf file. On a phone this opens the native
 * "add contact" sheet — the one action a business-card scan most needs.
 */
export function saveContact() {
  const blob = new Blob([buildVCard()], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${person.name.replace(/\s+/g, '-')}.vcf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
