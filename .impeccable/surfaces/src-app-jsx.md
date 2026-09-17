---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: []
---

## Scope

Single-page portfolio for Asif Bin Hossain, dry bulk chartering professional, Dubai. Visitor mode: **Persuade** — design is the product; the visitor must decide Asif is worth contacting and tap one of five contact buttons.

Audience: owners, operators, traders, charterers, and chartering-desk recruiters. Job: judge credibility fast, then reach him. Action: tap WhatsApp / Instagram / Facebook / LinkedIn / Email.

Sections shipped: Hero, Journey, Expertise, Services, Voices, Contact. **Projects and FAQ are excluded by explicit user instruction.**

## Direction contract

**THESIS:** A chartering desk rendered as a piece of industrial signage — the name at cargo scale, the person standing in front of it. It refuses the category default for shipping professionals (navy-and-white corporate stock photography, container-yard hero image, "Global Logistics Solutions") and the default for personal portfolios (centred avatar, three icon cards, timid neutral palette). The page is loud the way a hull marking is loud: one enormous word, one signal colour, no apology.

**OWN-WORLD:** Warm stone ground `#D3CFBE` — the colour of dry cargo, not of corporate blue. One electric acid yellow `#FCFF2A` doing hazard-marking duty: the wordmark, the year markers, the primary buttons, the icon glyphs, nothing else. Warm near-black ink `#14140F` tinted from the ground, never neutral grey. Components are soft-cornered raised stone panels (`#DCD9CA`) at 20–28px radius with a light top edge and a diffuse warm shadow — physical plates set on the ground, not floating glass. Type is one grotesque (Archivo) run from 14px label to a hero wordmark clamped past 20vw, tracking tightened to -0.055em at display sizes. Recognisable with every word removed: stone field, acid slab, plate stack, tight left rail.

**STORY:** The visitor understands in one viewport that this is a named individual in dry bulk, not an agency. They believe it because the journey section walks six years of Dhaka operations into a Dubai broking chair into a chartering desk, dated and employer-named — verifiable, not adjectival. They act by tapping one of five contact buttons, which sit in the sticky rail on desktop, in the hero on mobile, and full-width in the contact block.

**FIRST VIEWPORT:** "ASIF" set edge-to-edge in acid yellow at ~22vw, baseline low; the transparent-background portrait cut-out stands in front of it, overlapping the S and I, bottom-cropped by the viewport edge. Headline "Dry Bulk, Chartered Differently." in white over the portrait's dark shirt, three lines, left-aligned to the portrait's centre mass. Two primary buttons directly under it — "Get in Touch" (acid) and "My Journey" (stone). Bottom-left: "The chartering desk. That's Asif." Floating stone plates: 9+ years and 2 master's degrees on the left, a five-trait list on the right, positioning paragraph bottom-right. Nav is a horizontal split row at the vertical midline on desktop, collapsing to a sticky bottom action bar on mobile.

**FORM:** Brief-pinned. The user supplied a screen recording of `heynesh.com` and asked for the same exact design, which under new-work §3 beats the concept roll — no `concept-seed` run, no seed key, no alternates presented. Every composition decision derives from frame analysis of that recording; only the content, the journey data, and the five-button contact system are authored for Asif.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved

- WhatsApp number, Instagram, Facebook handles and email are placeholders in `src/data/profile.js` → `contact`. User replaces before launch.
- Testimonial quotes in `voices` are synthetic, flagged `SYNTHETIC` in source. Replace with real recommendations or delete the section before launch.
- Ever Glory Ship Charter start date unknown; rendered as "Now" rather than a fabricated year.

## Finish record

Discharged. Finish review run against five DPR-2 captures in `.impeccable/review/` (disposition: fix). Seven material fixes returned; five accepted in full, two adjudicated against the pinned frames:

- **Wordmark cropping (rejected, with evidence).** The review asked for the word to overrun and crop against the viewport edges. Frame `f_059` shows `NESH` inset roughly 2% on each side with its cap-heights uncropped and a top inset matching this build's `4.5svh`. The build already matches the reference's defining behaviour — full-measure span, uncropped. The one valid part was accepted: the inert `letter-spacing` was removed, since tracking does not apply between flex items.
- **Portrait bloom (partially accepted).** The `drop-shadow()` cast shadow was removed. The radial scrim behind the headline was kept — it is not a portrait bloom but the contrast floor for white type over a photographic cut-out, and removing it drops that copy below 4.5:1.

Accepted and applied: one stone plate material across the whole page (hero plates now translucent stone compositing to `#ccc7b8`, against the reference's sampled `#CFC7BA`); five distinct drawn trait marks; `®` removed from the personal wordmark; marquee edge fade widened; mobile hero furniture left-anchored with the traits restored to a single vertical list.

DESIGN.md and `.impeccable/design.json` regenerated from the shipped artifact after the fixes landed. Shipping rasters carry their provenance in README.md.
