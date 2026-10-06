import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Tokens and base styles load first so component CSS can override them.
import './index.css';
import App from './App';
import Directory from './components/Directory';
import { findEmployee, pageMeta } from './data/profile';

/**
 * One site, one card per employee: the first part of the path picks the
 * person (/jabir, /jana-alam …). The bare address is Asif's card, since
 * his printed QR codes point there. A path that matches nobody shows the
 * team, so a mistyped or old link still reaches the right person.
 */
const slug = decodeURIComponent(window.location.pathname.split('/')[1] || '');
const employee = findEmployee(slug);

/**
 * A reload always starts at the top — the logo intro, then the card. The
 * browser would otherwise put the visitor back where they were scrolled
 * (e.g. down at the company section), and a #company in the address would
 * jump there too, so drop the hash.
 */
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
if (window.location.hash) {
  window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);

document.title = employee ? pageMeta(employee).title : 'Card not found — HILF Shipping';

createRoot(document.getElementById('root')).render(
  <StrictMode>{employee ? <App employee={employee} /> : <Directory />}</StrictMode>
);
