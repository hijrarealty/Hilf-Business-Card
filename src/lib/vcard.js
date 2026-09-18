import { person, company, office, email, phone, linkedin } from '../data/profile';

/** vCard 3.0 text values escape backslash, comma, semicolon and newline. */
const esc = (v) => String(v).replace(/[\\,;]/g, (m) => `\\${m}`).replace(/\n/g, '\\n');

function buildVCard() {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${esc(person.familyName)};${esc(person.givenName)};;;`,
    `FN:${esc(person.name)}`,
    `ORG:${esc(company.name)}`,
    `TITLE:${esc(person.role)}`,
    `TEL;TYPE=CELL,VOICE:${phone}`,
    `EMAIL;TYPE=INTERNET,WORK:${email}`,
    `ADR;TYPE=WORK:;;${esc(office.street)};${esc(office.city)};;;${esc(office.country)}`,
    `URL:${company.site}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${linkedin}`,
    'END:VCARD',
  ].join('\r\n');
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
