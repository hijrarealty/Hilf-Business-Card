# Asif Bin Hossain — Portfolio

Single-page personal portfolio for **Asif Bin Hossain**, Senior Chartering Manager at **HILF Shipping LLC**, Dubai.
React 18 + Vite, plain CSS with custom properties, no UI framework, no backend.

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

`npm run build` writes a static site to `dist/` — deploy that folder anywhere (Netlify, Vercel, GitHub Pages, S3, cPanel). There is no server component.

---

## What it is for

The page sits behind the QR code on Asif's HILF Shipping business card, so it is built for a phone first:

- **Four contact routes** — WhatsApp, LinkedIn, email and hilfshipping.com — in a fixed bar at the bottom of the screen at every width below 1180px.
- **Save** (in that bar and in the contact section) downloads a vCard, which opens the phone's own "add contact" sheet.
- **HILF Shipping section** — the company's own description, its four pillars, cargoes, clients and head office, with buttons into hilfshipping.com (home, About, Our Business, Why Us, Contact).

Every company fact in `profile.js` is taken from hilfshipping.com. If the company site changes, update the `company` export to match.

The Ever Glory Ship Charter card in the timeline is labelled **"Then"** because its start year is not known. Put the real year in the `journey` entry when you have it.

---

## Editing content

**Every piece of copy and every link lives in [`src/data/profile.js`](src/data/profile.js).** No component holds content of its own, so you can retitle sections, rewrite the journey, or add a service without touching a component file.

| Export | Controls |
|---|---|
| `CONTACT_RAW` / `socials` | the four contact buttons |
| `company` | the HILF Shipping section, the hero lockup and every link to hilfshipping.com |
| `person` | name, wordmark, headline, intro, and the five traits (each `{ label, icon }`) |
| `stats` | the two figures in the hero and rail |
| `nav` | section list — drives the hero row, the rail and the mobile sheet |
| `affiliations` | the scrolling organisation names and the footer row |
| `journey` | the timeline cards (add or remove freely; the curve re-measures itself) |
| `expertise` | the capability statement and its inline chips |
| `services` | the three service columns |
| `contact` | closing section copy |

Icon names used in the data must exist in [`src/components/Icon.jsx`](src/components/Icon.jsx). Available: `home compass layers bolt quote send chart anchor clock users shield arrow plus copy check left right pin menu close ring`, `globe building download mail`, plus the brand marks `whatsapp linkedin email` (`website` renders as the globe).

### The portrait

`src/assets/asif-portrait.webp` (900×1032) and `asif-portrait-sm.webp` (560px wide, served below a 560px viewport) were derived from the transparent-background cut-out you supplied — `ChatGPT Image Sep 17, 2026, 05_26_24 PM.png`, 1171×1343, 1.6 MB — resized and encoded to WebP with alpha preserved (1.6 MB → 93 KB + 39 KB). No retouching, recolouring or recomposition was applied.

To swap it, replace both files. The replacement needs a **transparent background** — the layout stands the cut-out in front of the wordmark, and a rectangular photo will break the effect.

---

## How it is put together

```
src/
  index.css              design tokens, reset, themed browser surfaces, shared primitives
  App.css                shell layout + the column the sticky rail reserves
  App.jsx                section order and scroll wiring
  data/profile.js        all content and links
  lib/vcard.js           builds the downloadable contact card
  hooks/useScrollUtils.js  reveal-on-scroll, active section, past-hero
  components/
    Hero / Company / Rail / MobileBar / Journey / Expertise / Services / Contact
    SocialButtons        the contact routes, three renderings
    Icon                 authored SVG icon set
    *.css                one stylesheet per component
```

Colour, type, spacing, radius, shadow and easing are all tokens on `:root` in `index.css`. Change the palette there and the whole page follows.

`DESIGN.md` records the design system as built.

---

## Responsive behaviour

| Width | Layout |
|---|---|
| ≥ 1181px | Hero nav straddles the portrait; sticky left rail slides in past the hero |
| 641 – 1180px | Rail is replaced by a persistent contact bar (four routes + Save) plus a slide-in section sheet |
| ≤ 640px | Hero becomes a poster — headline still lands on the shirt, with the stat plates, trait list, signature and intro left-anchored beneath it; timeline runs single-column with the spine down the left |

The contact buttons are reachable at every width — in the rail on desktop, in the fixed bottom bar below it, and full-size in the contact section on every device.

---

## Accessibility notes

- Two themes from one token set: a light paper ground (`#F6F6F3`, ink `#0C0D24`) for the reading sections, and near-black navy bands (`.theme-dark`, `#0B0C1F`) for the hero, Expertise and Contact. The accent is the HILF logo navy `#05005C`, with its grey `#606060` for secondary labels. Every token is redefined inside `.theme-dark`, so a component reads correctly in either band.
- The portrait is a black-clothed cut-out on a dark band, so a soft light bloom sits behind it to keep the shoulders from vanishing.
- Skip link, visible focus rings, keyboard-operable carousel and menu sheet, `Escape` closes the sheet, focus returns to the trigger.
- `prefers-reduced-motion` disables the marquee, the scroll-drawn timeline and all transitions.
