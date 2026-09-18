# Asif bin Hossain — HILF Shipping digital business card

The page behind the QR code on Asif bin Hossain's HILF Shipping business card.
React 18 + Vite, plain CSS with custom properties, no backend.

When the QR code is scanned:

1. **Blue screen** — the HILF navy, for a moment.
2. **HILF logo motion** — on a light ground, the grey Arabic حلف writes in right to left, then the navy Latin "hilf" wipes in left to right over it.
3. **The card** — Asif bin Hossain, Senior Chartering Manager, HILF Shipping, with Call and Save contact straight away.

---

## Run it

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

`npm run build` writes a static site to `dist/`. Deploy that folder anywhere (Vercel, Netlify, S3, cPanel).

---

## Editing the card

**Every piece of copy and every link lives in [`src/data/profile.js`](src/data/profile.js).**

| Export | Controls |
|---|---|
| `person` | name, designation, the ASIF wordmark, and the given/family split used in the saved contact |
| `CONTACT_RAW` | WhatsApp number, phone number, LinkedIn URL, email |
| `company` | company name, website, and the short introduction |
| `office` | the Dubai office address — footer, Maps link and saved contact all read from here |
| `socials` | the WhatsApp / LinkedIn / Email / Website buttons, in display order |
| `stats` | the two figures in the hero |

The company introduction is HILF Shipping's own wording from hilfshipping.com. The office address is the Google Maps listing for **HILF Shipping LLC FZ** (Tamani Arts Building, Al Asayel St, Business Bay). `office.map` opens that exact listing by its place ID, and `office.directions` opens a route to it. Change `company.intro` or `office` to update them everywhere.

To make a card for another employee, change `person`, `CONTACT_RAW` and `stats`. Everything else is shared.

---

## The contact buttons

| Button | Link | Where |
|---|---|---|
| Call | `tel:+971504020908` | hero, footer, mobile bar |
| Save contact | downloads `Asif-bin-Hossain.vcf` | hero, footer |
| WhatsApp | `https://wa.me/971504020908` | hero (desktop), footer, mobile bar |
| LinkedIn | profile URL | hero (desktop), footer, mobile bar |
| Email | `mailto:` | hero (desktop), footer, mobile bar |
| Website | `https://hilfshipping.com/` | hero (desktop), company section, footer, mobile bar |
| Directions to office | Google Maps route to HILF Shipping LLC FZ | company section, footer |
| Open in Maps | the office's Google Maps listing | footer, under the address |

The saved contact carries name, company, designation, phone, email, office address, website and LinkedIn. On a phone it opens the "add contact" screen.

---

## The logo intro

[`src/components/IntroSplash.jsx`](src/components/IntroSplash.jsx) is a port of the supplied `HILF Logo Motion.html` (its `hilp-reveal.jsx`). It uses the same timeline (Arabic 1.5s, Latin 1.5s), the same cue offsets and easing curves, the same clip-path wipes, ink edges and 103.5% → 100% settle. It runs as a `requestAnimationFrame` loop instead of shipping the original's React + Babel runtime (~3.3 MB).

The logo keeps its own colours — navy `#050544` and grey `#5f5f5f` (the layers in `src/assets/intro/` are the original artwork). The sequence opens on the HILF blue; the light ground then opens out of the centre (a wipe, not a colour fade, so no washed-out blue appears between the two) and the mark draws on it. `index.html` paints the blue before any script loads, so a refresh never flashes white.

Timings are constants at the top of the file: `BLUE_HOLD` (blue before the light ground), `TO_LIGHT` (wipe lead before the mark starts), `LOGO_HOLD` (rest on the finished mark), `EXIT` (the lift into the card). With `prefers-reduced-motion`, the finished mark shows briefly with no motion.

---

## Structure

```
src/
  index.css              design tokens (light paper + .theme-dark bands), reset, buttons, glass plates
  App.jsx                the sequence: IntroSplash → Hero, Company, Contact; MobileBar
  data/profile.js        all content and links
  lib/motion.js          Lenis smooth scroll, GSAP reveals, hero entrance + scroll dissolve
  lib/vcard.js           builds the downloadable contact card
  components/
    IntroSplash          blue screen + logo motion
    Hero                 wordmark, name, designation, company, Call / Save contact, links, stats
    Company              short HILF Shipping introduction and website button
    Contact              the footer band: details, phone, office address, all contact routes
    MobileBar            the fixed contact bar below 1180px
    SocialButtons        the contact routes, three renderings (chips / bar / full)
    Icon                 authored SVG icon set
```

---

## Responsive behaviour

| Width | Layout |
|---|---|
| ≥ 1181px | Full-height hero: ASIF across the top with "bin Hossain" under its end; designation left, actions and stats right |
| 641 – 1180px | Same card stacked; a fixed bar at the bottom carries WhatsApp, LinkedIn, Email, Website and Call |
| ≤ 640px | Name, designation, Call and Save contact sit directly under the wordmark in the first screen |
