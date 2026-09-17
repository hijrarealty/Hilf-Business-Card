# Asif Bin Hossain — Portfolio

Single-page personal portfolio for **Asif Bin Hossain**, dry bulk chartering professional, Dubai.
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

## Before you publish — 2 things to change

### 1. The four placeholder contact links

Open [`src/data/profile.js`](src/data/profile.js) and edit `CONTACT_RAW` at the very top. Only the LinkedIn value is real.

```js
const CONTACT_RAW = {
  whatsapp:  '971500000000',      // ← REPLACE: digits only, country code first, no + or spaces
  instagram: 'asifbinhossain',    // ← REPLACE: handle without the @
  facebook:  'asifbinhossain',    // ← REPLACE: the slug from facebook.com/<slug>
  linkedin:  'asifbh',            //    confirmed — leave as is
  email:     'asif@example.com',  // ← REPLACE: real address
};
```

Then delete the matching strings from the `PLACEHOLDERS` array on the next line so the dev-console warning stops firing.

While any placeholder is in place, `npm run dev` prints a warning naming exactly which ones are still unset.

### 2. The testimonials

The four quotes in the `voices` export are **synthetic placeholders**, clearly marked. Either:

- replace each `heading` / `body` / `author` / `role` with a real quote (LinkedIn recommendations are the natural source) and set `synthetic: false`, **or**
- delete the section: remove `<Voices />` from [`src/App.jsx`](src/App.jsx) and the `voices` entry from the `nav` array in `profile.js`.

A dashed dev-only notice appears above the carousel while `synthetic` is `true`. It never ships in a production build.

---

## Editing content

**Every piece of copy and every link lives in [`src/data/profile.js`](src/data/profile.js).** No component holds content of its own, so you can retitle sections, rewrite the journey, or add a service without touching a component file.

| Export | Controls |
|---|---|
| `CONTACT_RAW` / `socials` | the five contact buttons |
| `person` | name, wordmark, headline, intro, and the five traits (each `{ label, icon }`) |
| `stats` | the two figures in the hero and rail |
| `nav` | section list — drives the hero row, the rail and the mobile sheet |
| `affiliations` | the scrolling organisation names and the footer row |
| `journey` | the timeline cards (add or remove freely; the curve re-measures itself) |
| `expertise` | the capability statement and its inline chips |
| `services` | the three service columns |
| `voices` | testimonials |
| `contact` | closing section copy |

Icon names used in the data must exist in [`src/components/Icon.jsx`](src/components/Icon.jsx). Available: `home compass layers bolt quote send chart anchor clock users shield arrow plus copy check left right pin menu close ring`, plus the brand marks `whatsapp instagram facebook linkedin email`.

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
  hooks/useScrollUtils.js  reveal-on-scroll, active section, past-hero
  components/
    Hero / Rail / MobileBar / Journey / Expertise / Services / Voices / Contact
    SocialButtons        the five contact routes, three renderings
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
| 641 – 1180px | Rail is replaced by a persistent five-button contact bar plus a slide-in section sheet |
| ≤ 640px | Hero becomes a poster — headline still lands on the shirt, with the stat plates, trait list, signature and intro left-anchored beneath it; timeline runs single-column with the spine down the left |

The five contact buttons are reachable at every width — in the rail on desktop, in the fixed bottom bar below it, and full-size in the contact section on every device.

---

## Accessibility notes

- Acid yellow is a display and surface colour only; it is never body text on the stone ground.
- Where acid carries display type on a light plate — the timeline years and every stat numeral — it is outlined with an ink stroke (`paint-order: stroke fill`), so the stroke carries the contrast. Each timeline date is also repeated as plain ink text in the card footer.
- Skip link, visible focus rings, keyboard-operable carousel and menu sheet, `Escape` closes the sheet, focus returns to the trigger.
- `prefers-reduced-motion` disables the marquee, the scroll-drawn timeline and all transitions.
