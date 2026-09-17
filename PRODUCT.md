# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React 18 + Vite (user pinned "React.js"; Vite chosen as the build tool — delegated). Plain CSS with custom properties, no UI framework. Self-hosted fonts via @fontsource. Single-page marketing site, no backend.

## Users

Primary: ship owners, operators, traders and charterers in the dry bulk market — people evaluating whether to put a cargo or a vessel in Asif's hands. They arrive from a LinkedIn profile link or a referral, usually on mobile, and are deciding in under a minute whether this person knows the trade.

Secondary: recruiters and commercial managers at chartering houses screening for a desk hire.

## Product Purpose

A single-page personal portfolio for **Asif Bin Hossain**, a dry bulk chartering professional based in Dubai. It exists to convert a name into a contact: establish nine years of credibility in the trade, show the arc from operations in Dhaka to running a chartering desk in Dubai, and put five one-tap contact routes in front of the visitor.

Success = the visitor taps a social/contact button.

## Positioning

Operations-first, then broking, then the desk. Asif learned the trade from the operations side at Akij Shipping Line for six years before moving to broking and chartering — so he reads post-fixture risk (laytime, demurrage, claims) as a chartering input rather than an afterthought. Paired with an MSc in Mathematics and an MSc in Port & Shipping Management.

## Operating Context

The dry bulk market runs on WhatsApp, email and phone, at speed, across time zones. Contact affordances matter more than any other element on the page — hence the explicit five-button requirement. Mobile is the dominant device.

## Capabilities and Constraints

- Static front end only. No forms that post, no backend, no CMS.
- Must be fully responsive — phone through desktop.
- Sections **Projects** and **FAQ** from the reference are explicitly excluded.
- Five contact buttons required: WhatsApp, Instagram, Facebook, LinkedIn, Email.
- Only the LinkedIn URL is confirmed. The other four are **placeholders** the user will replace — all five live in one config object.

## Brand Commitments

**Binding visual reference (user-pinned):** the design of `heynesh.com` as captured in the user's screen recording. Warm stone ground, electric acid-yellow accent, oversized grotesque wordmark behind a cut-out portrait, sticky left rail, snaking-curve journey timeline. The user asked for "same exact design", so this direction beats any alternative.

**Assets on hand:** transparent-background portrait cut-out of Asif (`ChatGPT Image Sep 17, 2026, 10_54_48 AM.png`, 1163×1327).

## Evidence on Hand

Confirmed from public sources (LinkedIn `/in/asifbh`, GulfTalent profile 9084776):

- Name: Asif Bin Hossain. Location: Dubai, UAE.
- 9+ years in dry bulk shipping.
- Chartering Manager — Wealth Creation General Trading LLC, Dubai (Sep 2022 →)
- Dry Bulk Ship Broker — Triton Ships Limited, Dubai (May 2022 – Aug 2022)
- Assistant Manager — Akij Shipping Line Ltd, Dhaka (Sep 2016 – Apr 2022)
- LinkedIn headline associates him with Ever Glory Ship Charter LLC (current).
- MSc Port & Shipping Management — Bangabandhu Sheikh Mujibur Rahman Maritime University (2021–2022)
- MSc Mathematics — National University, Dhaka (2011–2012)
- Languages: Bengali, English.

**Absences future work must not fabricate:** no verified fixture counts, tonnage volumes, revenue figures, client names, prices, or testimonials exist. Testimonial copy in the build is synthetic and flagged as such in source; it must be replaced with real quotes or the section removed before launch.

## Product Principles

1. **Contact is the product.** Every viewport keeps a route to Asif within reach; the five buttons are a first-class element, not a footer afterthought.
2. **Claim only what is verified.** Nine years, four employers, two master's degrees. No invented fixture counts or client logos.
3. **The trade's own language.** Laytime, demurrage, fixtures, post-fixture, tonnage — written for someone who already knows the words.
4. **Credibility through arc, not adjectives.** The journey from Dhaka operations to a Dubai desk is the argument.
5. **Phone-first.** This market reads on a phone between calls.

## Accessibility & Inclusion

Acid yellow (#FCFF2A) is a display and surface colour only — never body text on the stone ground, where it fails contrast. Body copy runs near-black on stone. All five contact buttons need real focus states and accessible names, since they are the page's only conversion.
