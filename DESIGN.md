# DESIGN.md — Bradley Ventures · New Company Launch Package (proposal demo)

---
tokens:
  bg: "#FAF7F1"      # warm paper
  surface: "#FFFFFF"
  surface-2: "#F1ECE2"
  ink: "#16130E"     # near-black, warm
  muted: "#6E655A"
  line: "rgba(22,19,14,.14)"
  accent: "#C7431F"  # launch vermilion — CTA voltage ONLY
  accent-ink: "#FFFFFF"
  accent-deep: "#A53618"
  radius: 6px
  font-display: "Fraunces, Georgia, serif"
  font-body: "Inter, system-ui, sans-serif"
  font-mono: "IBM Plex Mono, ui-monospace, monospace"
  ease-out: "cubic-bezier(0.16,1,0.3,1)"
  ease-state: "cubic-bezier(0.4,0,0.2,1)"
---

## Overview
Proposal demo site for LEAD 1 (Alan Bradley, Facebook): a "New Company Launch Package"
selling website + hosting + business-email setup in one package. Multipage static site
(6 pages). Audience: one founder drowning in 100 vendor DMs. Job: make him want to DM.
Mood in three words: **Confident. Warm. Precise.**

## Colors
- 60/30/10: warm paper dominant, ink text, vermilion accent quarantined to CTAs,
  eyebrows, progress, and checkmarks (one-voltage rule).
- Near-black `#16130E` (never pure black); off-white `#FAF7F1` (never pure white).
- WCAG AA verified: ink/paper 17.3, muted/paper 5.4, white/accent 4.9, accent/paper 4.6.

## Typography
- Fraunces (display, 560, tracking −0.03em, lh 0.95) / Inter (body 17px, lh 1.65) /
  IBM Plex Mono (labels 11px, uppercase, +0.18em tracking).
- H1 `clamp(2.75rem,7vw,5.5rem)` ≈ 5–6× body. Headlines ≤9 words, hand-broken to ≤3 lines.

## Layout
- 12-col, 1160px container, 24px gutters (20px mobile). Sections 112px / 64px mobile.
- Home: asymmetric editorial hero (copy left, interactive checklist right) → hairline
  marquee strip → numbered editorial rows (01/02/03) → 3-step process → dark proof
  block → FAQ → centered final CTA → designed footer.
- Phone is a second composition: stacked hero, 2-col rows, hamburger nav.

## Components
- **Signature (one live thing):** interactive Launch Checklist — 4 items, tick to
  complete, animated progress, expandable "+ details". Content fully visible without JS.
- Buttons: verb-first 2–3 words ("DM to start"), 44px targets, `:active` scale .97.
- FAQ + checklist details: grid-rows accordion, no layout jump.
- Marquee strip: 32s linear, paused under prefers-reduced-motion.
- Entrances: nav → eyebrow → H1 → sub → CTA stagger 0.1–0.2s, done by ~1.5s;
  rest state visible if JS fails.

## Shapes
- Radius ceiling 6px (buttons, cards 8–12px only where the card is the object).
- Hairline borders + surface steps for depth; one rationed soft shadow on the
  checklist card only. No glow, no blobs, no gradients-as-visual.

## Elevation & Depth
- Depth = layering (sticky blurred header over paper, dark proof block as tone step),
  never decoration.

## Do's and Don'ts
- DO: one primary CTA per section ("DM to start"); honest include/exclude lists;
  placeholder business name in ONE JS constant (`BUSINESS_NAME`).
- DON'T: invented stats/testimonials/prices; purple/blue gradients; centered-everything;
  emoji icons; lorem ipsum; fake urgency.

## Known Gaps
- No screenshots: Hatch Chromium renders blank here and the founder declined the
  Playwright download — visual QA was static (spec review + class/link/contrast/JS
  checks). Parent should eyeball the Vercel deploy before outreach.
- No real photography (no client assets exist); design is type/CSS-led instead.
- Contact page points to tiyandegital.com + contact@tiyandegital.com (real);
  no direct Facebook DM deep-link (no verified page URL — not invented).
