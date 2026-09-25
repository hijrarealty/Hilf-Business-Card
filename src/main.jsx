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

document.title = employee ? pageMeta(employee).title : 'Card not found — HILF Shipping';

createRoot(document.getElementById('root')).render(
  <StrictMode>{employee ? <App employee={employee} /> : <Directory />}</StrictMode>
);
