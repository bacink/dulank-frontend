# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Percetakan Dulank — Nuxt 4 migration of a static printing shop website (55+ HTML pages) into a Nuxt Vue 3 application. The core mandate is **fidelity preservation**: maintain the exact visual appearance, content, features, and behavior of the original static site while replacing Bootstrap JS/CSS with a compatibility shim and using Tailwind CSS 4 for layout utilities.

## Commands

```bash
npm install              # Install dependencies (requires network)
npm run dev              # Start dev server at http://localhost:3000
npm run build            # Production build
npm run preview          # Preview production build locally
npm run typecheck        # TypeScript check
npm run validate:migration   # Validate all 55 source pages are represented
npm run validate:revision3   # Validate JS syntax of migrated scripts
```

The npm registry may be unreachable in isolated environments. `npm install`, typecheck, and build require network access.

## Architecture

### Two-Layer Page Model

Pages use a dual strategy:

1. **Vue component layer** (`app/components/pages/*.vue`) — renders the HTML structure, class names, and DOM hierarchy verbatim from the original static source
2. **Legacy JS runtime** — original page JavaScript files are loaded at runtime via `useLegacyPage()` composable, which:
   - Injects Google Fonts, Font Awesome, Bootstrap Icons, and SweetAlert2
   - Fetches and evals legacy JS files after mount, patching `DOMContentLoaded` so existing scripts fire correctly
   - Loads SweetAlert2 on demand

Page structure pattern:
```vue
<script setup lang="ts">
useLegacyPage({ title: "...", styles: ["/css/..."], scripts: ["/js/..."], sweetAlert: true })
</script>
<template><div class="dulank-page ...">/* verbatim HTML */</div></template>
```

### Bootstrap Compatibility Shim

`app/plugins/legacy-ui.client.ts` provides minimal Bootstrap JS implementations (Collapse, Modal, Tab, Toast, Carousel, Tooltip) as client-side plugin. These handle `data-bs-toggle`, `data-bs-dismiss`, `data-bs-slide` attributes used by legacy page scripts. **Do not add Bootstrap back** — fix styling through the compatibility CSS layer instead.

### Layout System

Three navbar variants selected by route in `app/layouts/default.vue`:
- `main` — standard nav for most pages
- `calculator` — sidebar-heavy nav for calculator/produk pages
- `page` — no navbar (login, register, checkout, forgot-password, verify-email)

### CSS Layers (loaded in `app/assets/css/main.css`)

1. `bootstrap-compat.css` — recreates Bootstrap grid/utilities without the framework
2. `legacy/style.css` and `legacy/pages/*.css` — copied from original site, preserves per-page styling
3. `fidelity-fixes.css` — fixes visual drift from the migration

Original Bootstrap class names are kept in templates because they are DOM hooks for legacy CSS/JS.

### Component Organization

Components live in `app/components/` grouped by domain:
- `pages/` — one component per page (renders verbatim HTML from source)
- `layout/` — AppHeader, AppFooter, MainNavbar, CalculatorNavbar, CalculatorHeader
- `auth/`, `cart/`, `category/`, `product/`, `profile/`, `quotation/`, `support/` — shared sub-components
- `common/` — Breadcrumb, EmptyState, QuantityControl (truly generic elements)

Page route files (`app/pages/*.vue`) are thin wrappers that render the corresponding `Pages*Page` component.

### Static Assets

- Legacy JS/CSS/JSON/templates copied to `public/` (mirrors original paths like `/js/pages/cart.js`, `/css/pages/cart.css`)
- Images served from `public/images/`
- Source HTML preserved in `legacy/static-source/` for reference

## Key Constraints

- **Never add Bootstrap** — it's intentionally excluded. Use `bootstrap-compat.css` or `fidelity-fixes.css` for any missing styles.
- **Preserve DOM structure** — class names, IDs, and element hierarchy in page templates must match the original HTML to keep legacy JS/CSS working.
- **Don't refactor page HTML into smaller components** unless explicitly requested — the fidelity requirement takes priority over Vue best practices.
- **Calculator pages** have a different layout (sidebar + header) from main site pages.
- Navigation links that pointed to `.html` files should be updated to Nuxt routes (no extension).
- When adding a new page, create: route file in `app/pages/`, page component in `app/components/pages/`, and copy any required JS/CSS to `public/`.

## Documentation

- `docs/ROUTES.md` — complete mapping of all 55+ source pages to Nuxt routes
- `docs/COMPONENTS.md` — component structure overview
- `docs/MIGRATION.md` — migration status and guarantees
- `legacy/static-source/` — original static site files for reference and comparison
