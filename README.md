# Sanan Manufacturing — Website

A Next.js (App Router) marketing site for **Sanan Manufacturing SMC — Private Limited**, a
medical-device manufacturer (syringes, IV systems, blood transfusion devices). Built from the
Stitch "Precision Medical Cleanroom" design system.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v3** with the full cleanroom design-token theme (`tailwind.config.ts`)
- **Framer Motion** for scroll reveals, staggered grids, word-by-word headings, count-ups,
  animated filter pills, and modal transitions
- **next/font** for Plus Jakarta Sans (display), Inter (body), JetBrains Mono (specs)
- Material Symbols (Outlined) for iconography

## Pages

| Route        | Description                                                        |
| ------------ | ------------------------------------------------------------------ |
| `/`          | Hero, fact matrix, product showcase (filterable), facility, pillars, CTA |
| `/products`  | Searchable + filterable catalog, spec modals, OEM manufacturing block    |
| `/about`     | Story, animated stats, values, journey timeline, certifications          |
| `/contact`   | Contact channels, map, multi-step RFQ form, audit protocol               |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve production build
```

## Structure

```
app/            # routes (layout, home, products, about, contact) + globals.css
components/     # Header, Footer, Hero, ProductCard/Explorer, SpecModal, RfqForm, motion helpers
lib/            # site config + product data
public/images/  # product, facility, hero, map, and logo assets (brought in from the design)
```

## Design tokens

All colors, typography scales, spacing, radii, and elevation shadows from the Stitch
`DESIGN.md` are mapped to Tailwind theme extensions — e.g. `bg-cleanroom-navy`,
`text-clinical-cyan-glow`, `shadow-level-2`, `text-headline-lg`, `font-mono`.
