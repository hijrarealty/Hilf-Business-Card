---
name: Asif Bin Hossain — Dry Bulk Chartering
description: Deep indigo ground, one half-white signal, a name set at cargo scale.
colors:
  navy: "#05005c"
  stone: "#05005c"
  stone-raised: "#120d74"
  stone-raised-2: "#191382"
  stone-sunk: "#03003f"
  stone-line: "rgba(242, 239, 230, 0.18)"
  stone-line-soft: "rgba(242, 239, 230, 0.1)"
  bone: "#f2efe6"
  acid: "#f2efe6"
  acid-press: "#ffffff"
  on-acid: "#05005c"
  ink: "#f2efe6"
  ink-2: "rgba(242, 239, 230, 0.78)"
  ink-3: "rgba(242, 239, 230, 0.62)"
  ink-4: "rgba(242, 239, 230, 0.36)"
  pitch: "#f2efe6"
  glass-content: "rgba(242, 239, 230, 0.08)"
  glass-overlay: "rgba(242, 239, 230, 0.06)"
  glass-edge: "rgba(242, 239, 230, 0.18)"
  glass-edge-strong: "rgba(242, 239, 230, 0.3)"
typography:
  wordmark:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "max(5.5rem, min(40vw, 64svh))"
    fontWeight: 700
    lineHeight: 0.78
    letterSpacing: "normal"
  wordmark-closing:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(4rem, 23vw, 24rem)"
    fontWeight: 700
    lineHeight: 0.76
    letterSpacing: "-0.055em"
  display:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 5.1vw, 4.05rem)"
    fontWeight: 700
    lineHeight: 1.16
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5.6vw, 4.9rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.052em"
  section-title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6.4vw, 5.2rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.045em"
  numeral:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4vw, 3.15rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.055em"
  title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.08rem, 1.55vw, 1.32rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.032em"
  lead:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.25vw, 1.18rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.011em"
  body:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "-0.011em"
  detail:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.58
    letterSpacing: "-0.011em"
  label:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.055em"
  micro:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.011em"
rounded:
  sm: "0.75rem"
  md: "1.15rem"
  lg: "1.75rem"
  glyph: "0.65rem"
  pill: "999px"
spacing:
  s-3: "0.75rem"
  s-4: "1rem"
  s-5: "1.5rem"
  s-6: "2rem"
  s-7: "3rem"
  s-8: "4rem"
  gutter: "clamp(1.15rem, 4vw, 3.5rem)"
  section-y: "clamp(4.5rem, 11vh, 9rem)"
components:
  button-acid:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.on-acid}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.6rem"
    typography: "{typography.detail}"
  button-acid-hover:
    backgroundColor: "{colors.acid-press}"
    textColor: "{colors.on-acid}"
  button-stone:
    backgroundColor: "{colors.stone-raised-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.6rem"
    typography: "{typography.detail}"
  plate:
    backgroundColor: "{colors.glass-content}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "clamp(1.3rem, 2.2vw, 1.85rem)"
  plate-overlay:
    backgroundColor: "{colors.glass-overlay}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.8rem 1.25rem"
  chip-inline:
    backgroundColor: "{colors.stone-raised-2}"
    textColor: "{colors.acid-press}"
    rounded: "0.24em"
    width: "1.5em"
    height: "1.06em"
  chip-inline-active:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.on-acid}"
  badge-monogram:
    backgroundColor: "{colors.pitch}"
    textColor: "{colors.on-acid}"
    rounded: "{rounded.glyph}"
    size: "2.3rem"
    typography: "{typography.label}"
  nav-link:
    backgroundColor: "{colors.stone-raised-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.36rem 0.72rem"
    typography: "{typography.label}"
  nav-link-active:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.on-acid}"
  contact-route:
    backgroundColor: "{colors.stone-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "1.15rem 1.3rem"
  stat-tile:
    backgroundColor: "{colors.stone-sunk}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.md}"
    padding: "0.85rem 0.5rem"
---

# Design System: Asif Bin Hossain — Dry Bulk Chartering

## Overview

**Creative North Star: "The Night Hull"**

A name painted on steel at cargo scale, read after dark. The page is a single deep indigo field — near-black but unmistakably blue — with one enormous half-white word laid across it and the person standing in front of that word. Everything else (statistics, traits, navigation, contact routes) is a pane of frosted light set onto the field, never a box drawn on it.

Density is generous at the section level and tight inside a plate. Type is a single grotesque, Archivo, run from a 0.68rem uppercase label to a wordmark that is 40% of the viewport width. Tracking closes as size grows (-0.032em at title, -0.055em on the closing wordmark); the hero wordmark instead distributes its letters edge to edge with `space-between`, so the word always spans the full measure at any width.

The palette is inverted from the original light warm-stone direction named in the direction contract's OWN-WORLD block: the ground went from stone to indigo and the signal from acid yellow to half-white. The token names survived the inversion and their meanings shifted with it — `--ink` is now a light colour meaning "primary foreground", `--acid` is the half-white signal, `--pitch` is a light chip. One consequence runs through this whole document: the outlining that display type needed on a light plate is gone, because half-white on indigo measures roughly 14.5:1 unaided.

Confirmed rejections: navy-and-white corporate shipping stock, container-yard photography, the centred-avatar personal portfolio, and neutral grey. No neutral in this system is grey — every surface is the ground mixed with light, every foreground tier is the signal stepped down by alpha, so the ground's hue shows through all of them.

**Key Characteristics:**
- One ground colour (`#05005c`) and one signal colour (`#f2efe6`); nothing else competes.
- Surfaces lift by mixing light into the ground, never by adding grey — they stay in one hue family.
- One plate material everywhere: light-on-dark frosted glass — a thin wash of half-white, a backdrop blur, a brighter hairline edge, no shadow at rest.
- Foreground is one colour at four alphas, so every text tier keeps the indigo showing through.
- A single type family at every level; hierarchy comes from size, weight and tracking alone.
- Soft-cornered plates (12–28px), pill buttons, and drawn 24px-grid icons — never a typographic or emoji glyph.

## Colors

A deep indigo field with exactly one voice raised above it, and both foreground and surfaces derived from that pair.

### Primary
- **Half-White Signal** (`acid`, aliased from `bone`): the signal. It carries the hero and closing wordmarks, the primary button, the rail and sheet wordmark chips, every numeral, the journey dots and live spine, the service icon tiles, the quote marks, the drag cursor, the active navigation state and the mobile menu trigger. It is also the primary text colour, which is what makes the inverted system cohere: signal and foreground are the same colour, separated only by surface.
- **Signal Press** (`acid-press`): pure white — the primary button's hover fill, the inline expertise glyph at rest, and the lit segments of the Voices progress bar.
- **Indigo on Signal** (`on-acid`): the ground colour returning as type on every half-white surface — button faces, the monogram badge, active nav rows, the service icon glyph, the selection highlight.

### Neutral
- **Indigo Ground** (`navy`, aliased as `stone`): the page field, the browser theme colour, and the favicon plate. Journey and Services alternate over it with a soft `rgba(242,239,230,0.045)` gradient band rather than a second surface colour.
- **Raised Indigo** (`stone-raised`): the lifted solid surface — contact routes, Voices arrow buttons, the mobile sheet.
- **Light Indigo** (`stone-raised-2`): the highest solid step — secondary button, rail links, mobile sheet nav rows, the inline expertise chip.
- **Sunk Indigo** (`stone-sunk`): recessed surfaces — the fit note in Services, the rail's copy-email strip, compact social tiles, the mobile sheet's stat tiles and close button, the Voices avatar and progress track, the location pill, the scrollbar track.
- **Hairlines** (`stone-line`, `stone-line-soft`): light-on-dark dividers — structural rules at 0.18 alpha, in-plate dividers at 0.1.
- **Foreground ramp** (`ink` through `ink-4`): one half-white stepped down by alpha. `ink` for headings, list copy and the live journey spine; `ink-2` for body and supporting copy; `ink-3` for meta, handles and legal; `ink-4` for the scrollbar thumb and underline rests.
- **Glass** (`glass-content`, `glass-overlay`, `glass-edge`, `glass-edge-strong`): the plate wash at two densities and its two edge weights. Content plates take the 0.08 wash; the hero's overlay plates take 0.06 so the wordmark and portrait read through them.
- **Inverted Chip** (`pitch`): half-white carrying indigo letters. Its shipped scope is narrow — the journey employer monogram badges and nothing else.

### Named Rules

**The One Plate Rule.** There is one plate material on this page: light-on-dark frosted glass — a thin half-white wash, a backdrop blur (`blur(12px) saturate(1.08)` for content, `blur(20px) saturate(1.05)` for overlay), and a hairline of brighter light around the edge with the top edge brightest. **No drop shadow at rest**; on a near-black ground a cast shadow has nothing to fall onto, so the edge carries the depth. Not a second register — one material, two densities.

**The Same-Hue Lift Rule.** A surface is lifted by mixing light into the ground, never by adding grey. `#05005c` → `#120d74` → `#191382` climbs in lightness inside one hue family; `#03003f` recedes the same way. A slate or charcoal panel anywhere in this system is a bug.

**The One Signal Rule.** Half-white is both the signal and the foreground. Because they are the same colour, a surface does the separating: the signal reads as signal when it is a *fill* (wordmark, button, badge, dot) and as text when it sits on the ground or a plate. There is no second accent hue, and adding one would collapse the scheme.

## Typography

**Display Font:** Archivo Variable (with Archivo, system-ui, -apple-system, sans-serif)
**Body Font:** Archivo Variable — the same family at every level
**Label Font:** Archivo Variable at 700, uppercase, +0.055em tracking

**Character:** One industrial grotesque doing all the work. Wide, square-shouldered and unapologetic at display sizes; quiet and tightly tracked (-0.011em) at body. Numerals are tabular page-wide, so statistics and dates align down a column.

### Hierarchy
- **Wordmark** (700, `max(5.5rem, min(40vw, 64svh))`, line-height 0.78): the hero's name, one span per letter distributed edge to edge with `justify-content: space-between`. It carries no letter-spacing — tracking does not apply between flex items, so distribution is the only mechanism that holds the word to the full measure. Drops to `min(42vw, 26svh)` at 640px and `clamp(4rem, 17vw, 12rem)` on short landscape phones.
- **Closing Wordmark** (700, `clamp(4rem, 23vw, 24rem)`, 0.76, -0.055em): the same word returning over the contact block; `clamp(3.4rem, 25vw, 8rem)` on phone.
- **Headline** (700, `clamp(2.4rem, 5.6vw, 4.9rem)`, 0.92, -0.052em): the hero's three authored lines — "Senior / Chartering / Manager" — centred on the portrait at every width including phone; `clamp(2.05rem, 10.5vw, 3rem)` below 640px.
- **Display Statement** (700, `clamp(1.75rem, 5.1vw, 4.05rem)`, 1.16, -0.05em): the Expertise sentence, capped at 21ch, with capability chips set inline into it.
- **Section Title** (700, `clamp(2.6rem, 6.4vw, 5.2rem)`, 0.96, -0.045em): every section head. A second step, `clamp(2rem, 4.6vw, 3.5rem)`, sets the contact title.
- **Display Numeral** (700, `clamp(2.1rem, 4vw, 3.15rem)`, 0.88, -0.055em): journey years. Smaller numeral steps: hero stats `clamp(1.6rem, 2.6vw, 2.35rem)`, mobile sheet tiles 1.6rem, rail stats 1.45rem — all at -0.05em, all plain half-white fill.
- **Title** (700, `clamp(1.08rem, 1.55vw, 1.32rem)`, 1.15, -0.032em): card and column headings in Journey, Services and Voices.
- **Lead** (400, `clamp(1rem, 1.25vw, 1.18rem)`, 1.6): section standfirsts, capped at 34ch.
- **Body** (400, `clamp(0.95rem, 1.05vw, 1.05rem)`, 1.55): the document default.
- **Detail** (400, 0.875rem, 1.58): card copy, capped at 44ch; also the button face at 700.
- **Label** (700, 0.68–0.78rem, +0.055em, uppercase): rail links, hero nav links, mobile sheet nav rows, the drag cursor. The only uppercase in the system.
- **Micro** (500–700, 0.62–0.79rem): plate meta — employer names, handles, footer legal, stat captions.

### Named Rules

**The Unaided Contrast Rule.** Display type is plain half-white fill. There is no `-webkit-text-stroke` and no `paint-order` anywhere in the build: half-white on indigo measures roughly 14.5:1 unaided, so the outline the light theme required around acid numerals has been deleted from the journey years, the hero stat numerals, the rail stat numerals and the mobile-sheet stat tiles. This is the direct, deliberate consequence of the inversion — an outline here would only muddy the letterform. New numerals inherit the plain fill.

**The One Family Rule.** Archivo sets every word on the page. Hierarchy is built from size, weight and tracking only; a second face is never introduced for contrast.

**The Tightening Rule.** Tracking closes as size opens: -0.011em at body, -0.032em at title, -0.045em at section heading, -0.052/-0.055em at display. The one exception is uppercase labels, which open to +0.055em.

## Layout

The shell is a single flowing column. Above 1180px a fixed left rail owns 15.5rem of the page and the content's left padding becomes `calc(15.5rem + gutter * 0.6)`; that column is reserved at all widths above the breakpoint and never toggled, so nothing reflows when the rail slides in. Below 1180px the rail is replaced by a fixed bottom contact bar and a right-hand sheet menu, and sections gain bottom clearance for the bar.

Horizontal rhythm is one fluid gutter, `clamp(1.15rem, 4vw, 3.5rem)`; vertical rhythm is `clamp(4.5rem, 11vh, 9rem)` of section padding. Inside plates the spacing scale runs 0.75 / 1 / 1.5 / 2 / 3 / 4rem.

The hero is a 12×12 grid over a full `100svh` stage: wordmark at z-1, portrait at z-2, all furniture at z-3. The headline block sits at `grid-row: 8 / span 5`, low enough that its first line starts at the chin rather than across the face. Journey is a two-column zigzag with one card per row over an SVG spine measured from the real cards. Services is three columns divided by hairlines inside one plate. Voices is a horizontally snapped rail that breaks the gutter to run its cards to the screen edge.

Breakpoints: **1180px** (rail to mobile contact bar, and the hero's straddling nav row), **900px** (hero plates drop to the base, journey stacks to one column, contact goes single column), **640px** (phone poster), plus a local **980px** where the services grid collapses to one column.

On the phone poster the headline stays centred over the centred portrait, and every piece of furniture below it — stat plates, the trait plate as one vertical list, signature line, positioning paragraph — is left-anchored, so the phone keeps the desktop's asymmetry instead of collapsing to a symmetrical stack. The portrait is `min(58svh, 25rem, 107vw)` tall; the `107vw` term caps its width so the cut-out cannot overhang a narrow phone, and the stage's `padding-top` is derived from that same expression so the headline always lands on the shirt.

## Elevation & Depth

Depth is carried by light, not by shade. On a near-black indigo ground a cast shadow is invisible, so plates are separated from the field by a hairline of light around the edge — brighter across the top, the way light falls on a real pane — over a backdrop blur. A tonal stack sits underneath for solid surfaces (`stone-sunk` under the ground under `stone-raised` under `stone-raised-2`), each step mixing more light into the same hue.

Shadows survive in three narrow jobs: under solid raised controls (contact routes, Voices arrows, the secondary button), as a hover lift, and as a half-white *glow* beneath the primary button, the drag cursor and the mobile trigger — the one place the system uses a coloured shadow, and it now blooms light instead of the olive smudge the yellow button used to cast. Every shadow has vertical offset; a symmetric zero-offset halo is never used.

### Shadow Vocabulary
- **Plate** (`box-shadow: 0 1px 2px rgba(0,0,0,0.22), 0 8px 20px -12px rgba(0,0,0,0.45)`): solid raised controls — the secondary button, contact routes, Voices arrows, the inline expertise chip.
- **Lift** (`box-shadow: 0 2px 5px rgba(0,0,0,0.28), 0 22px 44px -16px rgba(0,0,0,0.55)`): hover on a plate or a route, the expertise reveal card, the skip link.
- **Signal Glow** (`box-shadow: 0 2px 6px rgba(0,0,0,0.32), 0 16px 34px -12px rgba(242,239,230,0.3)`): under half-white surfaces only — the primary button, the drag cursor, the mobile menu trigger. The wide blur is half-white, so the fill glows rather than sits in a hole.
- **Sunk** (`box-shadow: inset 0 1px 2px rgba(32,30,18,0.12)`): the rail's copy-email strip, the one recessed control.

### Named Rules

**The Edge-Not-Shadow Rule.** Frosted plates carry no shadow at rest. Their separation from the ground is a 0.8px `rgba(242,239,230,0.18)` border with a `rgba(242,239,230,0.3)` top edge over a backdrop blur. Hover may add the lift shadow; rest may not.

**The Portrait Stage Rule.** The cut-out subject wears black, and on a near-black indigo ground the shoulders would sink into the field and leave a floating head. So a radial half-white bloom sits *behind* the figure (`.hero__portrait::before`, `rgba(242,239,230,0.16)` at centre falling to zero at 72%, inset `-6% -14% -2%`), giving the silhouette an edge to read against. The bloom is behind the cut-out, never on it: this is a stage light, not a glow effect. Any dark-clothed cut-out placed on this ground gets the same treatment.

**The Flat Cut-Out Rule.** The portrait itself carries no cast shadow or `drop-shadow()`. A soft blur skirting hair and shoulders reads as a failed alpha matte; the cut-out sits flat against its stage.

## Shapes

Soft-cornered rectangles throughout, on a four-step radius scale: 0.75rem (sunk notes, bar buttons), 1.15rem (overlay plates, contact routes, sheet rows), 1.75rem (the standard plate), and full pill (all buttons, rail links, avatars, arrow controls). Small glyph tiles use their own tighter radii — 0.42–0.8rem for the monogram badge, service icon, quote mark, wordmark chip and social tile — so an icon square never looks like a shrunken card.

Borders are hairlines of light, never outlines: `rgba(242,239,230,0.1)` inside plates for dividers, `rgba(242,239,230,0.18)` for structural rules and plate edges, and a `rgba(242,239,230,0.3)` top edge on every plate. Icons are drawn on a 24px grid at 1.75 stroke with round caps and joins; the hero's five trait marks — chart, shield, users, anchor, bolt, one per trait — weight up to 2.4 because at 16px a hairline has none of the mass the signal needs. List bullets in Services are a drawn ring with a filled half-white centre, not a typographic dot.

## Components

### Buttons
- **Shape:** full pill (999px), padding `0.95rem 1.6rem`, 0.875rem/700 face, 0.55rem icon gap.
- **Primary (signal):** half-white fill, indigo face, signal glow. Hover fills to pure white and lifts 2px. Active returns to 0.
- **Secondary (indigo):** light-indigo fill (`stone-raised-2`), half-white face, plate shadow. Hover lifts 2px to the lift shadow.
- **Focus:** a 2.5px half-white ring at 3px offset with a `0.75rem` radius, page-wide.

### Chips
- **Inline capability chip (Expertise):** a light-indigo tile (`stone-raised-2`) at 1.5em × 1.06em with a white drawn glyph, set into the display sentence as an object rather than listed under it. On hover or expand it inverts to indigo-on-half-white, rotates -5deg, scales 1.06, thickens its stroke to 2 and takes the lift shadow; a half-opacity plus mark in its corner says there is more here. It opens a 17rem frosted plate below it as a tooltip, edge-clamped for the first and last chips.
- **Location pill (Contact):** sunk indigo, pill, `0.5rem 0.9rem`, `ink-2` label with a leading drawn mark.

### Cards / Containers
- **Corner Style:** 1.75rem for the standard `.plate`; 1.15rem for hero overlay plates and sheet rows.
- **Background:** `glass-content` (0.08 half-white) over `blur(12px) saturate(1.08)`; `glass-overlay` (0.06) over `blur(20px) saturate(1.05)` for the hero's stat and trait plates, which must let the wordmark and portrait through. On the phone poster those hero plates step up to the content wash, because there they sit on plain ground.
- **Shadow Strategy:** none at rest; lift on hover (see Elevation & Depth).
- **Border:** 0.8px `glass-edge` all round, `glass-edge-strong` on the top edge.
- **Internal Padding:** `clamp(1.3rem, 2.2vw, 1.85rem)` for content cards; 0.8–0.9rem for the hero's overlay plates; 0.85rem for rail cards.

### Navigation
- **Rail (above 1180px):** a fixed column of frosted plates — brand, stats, links, affiliations marquee, copy-email strip, CTA. It is translated off-canvas and `visibility: hidden` until the hero is behind you, so it leaves the tab order too. Links are uppercase 0.68rem/700 pills on light indigo; hover slides 3px right, active fills half-white with indigo type. Its stat block is a frosted plate with plain half-white numerals divided by a hairline. Under 700px of viewport height the blurb and marquee drop.
- **Hero nav (above 1180px):** a horizontal split row at the grid's vertical midline, uppercase 0.7–0.83rem, separated by a 1px half-white rule at 0.32 alpha, with a 2px half-white underline that wipes in from the left on hover. Below 1180px the row is removed and the sheet owns navigation.
- **Mobile (1180px and below):** a fixed half-white trigger top-right opens a right-hand sheet on raised indigo over an `rgba(2,0,34,0.62)` blurred scrim; rows are light-indigo uppercase blocks, the active row fills half-white. The sheet's foot carries two sunk-indigo stat tiles with plain half-white numerals.
- **Contact bar (1180px and below):** the five routes, always within thumb reach, on translucent indigo (`rgba(12,8,86,0.9)`) over `blur(16px) saturate(1.3)`, inset light edge, safe-area padded.

### Signature Components

**The Distributed Wordmark.** One span per letter in a flex row with `justify-content: space-between`, spanning gutter to gutter. It appears twice: behind the portrait in the hero, and returning at scale over the contact block. It is `aria-hidden`; the accessible name lives in the portrait's alt text and the page copy. It carries no trademark or superscript mark.

**The Portrait Stage.** The hero cut-out stands on a radial half-white bloom rather than on bare ground — the only way a black-clothed figure keeps its shoulders on a near-black field. The bloom is wider than the figure and fades to zero at 72%, so it reads as light behind a subject rather than a halo around a sticker. A separate, darker radial scrim under the headline (`rgba(16,15,9,0.5)` at centre) is the contrast floor for half-white type crossing skin.

**The Journey Spine.** A zigzag of alternating cards over an SVG curve measured from the real card positions and drawn on scroll: a ghost stroke at `rgba(242,239,230,0.2)`/1.5 under a live half-white stroke at 1.75, with half-white dots that scale from 0 to 1 as they are reached. Each card foots with a half-white monogram badge carrying indigo letters — the only inverted chip in the build.

**The Five Routes.** The contact buttons keep each platform's own colour on hover so the row reads as five destinations rather than five identical chips (WhatsApp `#25d366`, Instagram `#e1306c`, Facebook `#1877f2`, LinkedIn `#0a66c2`, Email half-white with an indigo face). In the full grid the brand colour sweeps in from the left on `scaleX`; in the mobile bar it also fills on `:active`. The fifth route takes a full row so two columns never leave a hole.

## Do's and Don'ts

### Do:
- **Do** build every container from the one plate material: `glass-content` over `blur(12px) saturate(1.08)`, 1.15–1.75rem radius, 0.8px light edge with a brighter top edge, no resting shadow.
- **Do** lift a surface by mixing light into the indigo ground (`#120d74`, `#191382`) and recess it the same way (`#03003f`).
- **Do** set display numerals and wordmarks in plain half-white fill — the ground gives them roughly 14.5:1 without help.
- **Do** step foreground tiers by alpha on the one half-white (0.78 / 0.62 / 0.36) so the ground's hue shows through every tier.
- **Do** give every shadow vertical offset, and make the wide blur under a half-white surface half-white so it glows.
- **Do** put a light bloom behind a dark-clothed cut-out, never a glow on it.
- **Do** draw new icons on the 24px grid at 1.75 stroke with round caps and joins, and give each list item its own mark rather than repeating one glyph.
- **Do** keep the five contact routes reachable in every viewport — rail on desktop, fixed bar below 1180px, full grid in the contact block.

### Don't:
- **Don't** reintroduce `-webkit-text-stroke` or `paint-order: stroke fill`. The outline belonged to the light theme and was deleted with it.
- **Don't** introduce a second accent hue. Half-white is both the signal and the foreground; a third colour has no role to play.
- **Don't** reach for grey, slate or charcoal for a surface, or for a neutral grey text tier.
- **Don't** put a resting drop shadow on a frosted plate; the edge carries the depth and a shadow on this ground reads as dirt.
- **Don't** carry warm or olive shadow tints over from the light theme — shadows on this ground are near-black, and the only tinted blur is the half-white glow.
- **Don't** extend `pitch` past the journey monogram badges; it is a chip colour, not a section background.
- **Don't** put a cast shadow or `drop-shadow()` under the portrait cut-out.
- **Don't** introduce a second type family, an italic, or a serif for contrast.
- **Don't** use an emoji, a unicode dingbat, or a font glyph where a drawn SVG mark belongs.
- **Don't** add a kicker or eyebrow above a section title, or a trademark superscript on the wordmark.

---

## Motion

Motion is driven by **GSAP 3.15 + ScrollTrigger**, with **Lenis** smoothing the scroll so scrubbed animations track an eased position rather than raw wheel deltas. Everything lives in `src/lib/motion.js`; the `MOTION` object is the single source of timing truth. CSS transitions run on `cubic-bezier(0.16, 1, 0.3, 1)` at 180ms (hover and colour), 380ms (transform, shadow, sheet scrim, chip expansion) and 720ms (rail slide-in, sheet slide).

**The Blur Reveal Rule.** Nothing fades in flatly. Content arrives out of a blur — `filter: blur(9px) → 0` paired with a rise — and the hero's opening runs the same move at larger radii (26px on the wordmark, 22px on the portrait). Blur is the page's entrance grammar.

**The Line Mask Rule.** Display headings reveal one line at a time. Each line sits in an `overflow: hidden` box (`.ln`) and rises out of it (`.ln-i`, `yPercent: 105 → 0`) on a 55ms stagger. Where the markup already declares its own line breaks — one `<span>` per line — those breaks are honoured rather than re-measured, because they are a typographic decision. Prose without authored breaks is split by measuring word positions and re-split on resize.

**The Hero Handover.** The hero has two owners: an intro timeline on load, and a scroll scrub that dissolves it. They write to overlapping elements, so the handover is explicit — the intro is completed and its inline values cleared before the scrub is allowed to attach. The scrub is written `fromTo`, never `to`, so its resting state is declared rather than sampled. Without both of these, scrolling during the intro strands the hero half-invisible.

**The Cascade Rule.** The hero does not leave as one block. Each piece scrubs out over its own range across the first 30–46% of the hero, so the exit reads as a cascade.

**The Focus Override.** Scroll-driven reveals complete immediately on `focusin`. Keyboard focus can outrun scroll position, and a focus stop on invisible content is a defect no visual review would catch.

**The Marquee.** The rail's affiliations strip runs 34s linear infinite behind a 22%/78% mask fade, paused on hover and under `prefers-reduced-motion`.

**Reduced motion.** `prefers-reduced-motion: reduce` disables Lenis, the intro, the scrub and every reveal. No blur, no transform, no smoothing — the page renders in its natural resting state, which is also what ships if JavaScript never runs.
