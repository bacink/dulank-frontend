# Percetakan Dulank — Nuxt 4 Storefront

Nuxt 4 application for an Indonesian printing shop (PT. Dulank Semesta Cida). This project is a modern migration from a legacy static HTML/Bootstrap codebase in `legacy/`.

## Tech Stack

- **Framework**: Nuxt 4.5.1 (file-based routing via `app/pages/`)
- **UI**: @nuxt/ui v4 (uses `UButton`, `UInput`, `UBadge`, `UContainer`, `UIcon`)
- **Styling**: Tailwind CSS 4 + theme-based brand colors (primary, secondary, accent, surface, text, border) defined via `@theme` directive in [app/assets/css/main.css](app/assets/css/main.css)
- **Language**: TypeScript (strict, with Nuxt auto-imports)
- **Font**: Inter (Google Fonts, loaded via Nuxt head config)

## Commands

```bash
bun install          # Install dependencies
bun dev              # Start dev server at http://localhost:3000
bun build            # Build for production
bun preview          # Preview production build locally
bun generate         # Static site generation (SSG)
```

## Project Structure

```
app/
  app.vue                  # Root wrapper (NuxtLayout + NuxtPage)
  pages/                   # File-based routes (index.vue, privacy.vue, terms.vue)
  layouts/
    default.vue            # Main layout: MainNavbar + <slot> + AppFooter
  components/
    layout/
      MainNavbar.vue       # Primary site navigation with product links
      AppHeader.vue        # Alternative sticky header (work in progress)
      AppFooter.vue        # Site footer with links, contact info, copyright
      CalculatorNavbar.vue # Navigation bar for calculator section pages
      CalculatorHeader.vue # Calculator page header with shop info
      ProfileSidebar.vue   # Sidebar for profile/kalkulator pages
      PrivacyTermsContent.vue # Reusable component for privacy/terms pages
    home/
      HeroSection.vue      # Hero with stats and CTA buttons
      AboutSection.vue     # About Us text block
      ProductShowcaseSection.vue # Reusable product image grid
      FeatureCardsSection.vue    # Feature cards (broken — see notes)
      BottomInfoSection.vue  # Contact + Article + Download columns
assets/
  css/main.css             # Brand tokens (:root CSS vars) + body font setup
public/                    # Static assets (favicon, robots.txt)
legacy/                    # Original static HTML site — reference for migration
docs/                      # Analysis docs (legacy-nuxt-migration-analysis.md)
```

## Brand Design Tokens

Theme colors defined in [app/assets/css/main.css](app/assets/css/main.css) via Tailwind `@theme` directive — use canonical classes, never `var(--color-*)`:

| Token | Tailwind Class | Value |
|-------|---------------|-------|
| `primary` | `text-primary`, `bg-primary`, `border-primary` | `#912748` |
| `secondary` | `text-secondary`, `bg-secondary`, `border-secondary` | `#1c2c47` |
| `accent` | `text-accent`, `bg-accent`, `border-accent` | `#e8964f` |
| `surface` | `text-surface`, `bg-surface`, `border-surface` | `#f8f9fa` |
| `text` | `text-text` | `#424242` |
| `border` | `text-border`, `border-border`, `divide-border` | `#e5e5e5` |

## Legacy Migration Context

The `legacy/` directory contains the original standalone HTML site (~70 pages). It uses Bootstrap 5, jQuery-style inline scripts, and raw CSS. When building new pages, reference the legacy HTML for:

- **Content**: Copy text, copy structure, product data
- **Routes**: Map legacy `.html` paths to Nuxt page routes (e.g., `legacy/cart.html` → `app/pages/cart.vue`)
- **Logic**: Migration notes are in [docs/legacy-nuxt-migration-analysis.md](docs/legacy-nuxt-migration-analysis.md)

Legacy JS behavior (component loading, form handling, etc.) lives in [legacy/js/component.js](legacy/js/component.js) and should be replaced with Vue composables or component lifecycle methods.

## Architecture Notes

- **Layouts**: Pages use `NuxtLayout` → `default.vue` which wraps everything in `MainNavbar` + `<slot>` + `AppFooter`. Calculator pages have their own `CalculatorNavbar`/`CalculatorHeader` — create a separate layout for them when needed.
- **Nuxt UI components**: Prefer `UButton`, `UInput`, `UBadge`, `UContainer`, `UIcon` from `@nuxt/ui` over raw HTML. The `UForm`, `UInput`, `USelect` pattern handles forms.
- **Head management**: Use `useHead()` composable in `<script setup>` for SEO metadata (title, meta description).
- **Pages without routes yet**: The `pages/` directory currently only has `index.vue`, `privacy.vue`, and `terms.vue`. All other legacy routes need new `.vue` files created under `app/pages/`.
- **Hardcoded data**: Current components have mock/placeholder data (Unsplash images, lorem ipsum text). Replace with real data from `legacy/json/` or the backend API when available.

## Migrated Pages (Homepage + Products)

### Pages created in this session
- `app/pages/index.vue` — Homepage with hero, about, feature cards, product showcase, bottom info
- `app/pages/categories.vue` — Categories page (migrated from legacy/categories.html) with sale banners and category grid
- `app/pages/store.vue` — Store page with tabbed product catalog (Kertas, Mesin Cetak, Laminasi, Pond, Poli)
- `app/pages/product.vue` — Product listing page with search functionality
- `app/pages/product/[slug].vue` — Dynamic product detail page supporting cetak-full-color, cetak-buku, kalender

### Shared components created
- `app/components/product/ProductCard.vue` — Reusable product card with badge, pricing, image
- `app/components/product/PriceTable.vue` — Price table with qty, unit price, discount, weight, processing
- `app/components/product/DesignCard.vue` — Design template grid with category filter tabs
- `app/components/product/SpecSelector.vue` — Specification selector for product specs

### All new pages return HTTP 200 and render correctly

## Known Issues

- [FeatureCardsSection.vue](app/components/home/FeatureCardsSection.vue) has a broken template — it references `card.eyebrow`, `card.description`, `card.cta` but the v-for loop is missing/wrong. Fix the template structure to iterate over `props.cards` properly.
