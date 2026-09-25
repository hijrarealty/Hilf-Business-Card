import { company, office } from '../data/profile';

/** vCard 3.0 text values escape backslash, comma, semicolon and newline. */
const esc = (v) => String(v).replace(/[\\,;]/g, (m) => `\\${m}`).replace(/\n/g, '\\n');

function buildVCard(e) {
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
    .join('\r\n');
}

/**
 * Hands the visitor a .vcf file. On a phone this opens the native
 * "add contact" sheet — the one action a business-card scan most needs.
 */
export function saveContact(employee) {
  const blob = new Blob([buildVCard(employee)], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${employee.name.replace(/\s+/g, '-')}.vcf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
