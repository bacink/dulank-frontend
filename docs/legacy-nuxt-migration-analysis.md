# Legacy → Nuxt 4 Migration Analysis

## 1. Current state

- The project is already a Nuxt 4 app shell with `@nuxt/ui` and Tailwind CSS installed.
- The current app entry in [app/app.vue](app/app.vue) is still the default Nuxt starter and does not yet reflect the legacy storefront structure.
- The legacy implementation lives under [legacy](legacy) and is organized as static HTML pages, shared fragments, and large CSS files.

## 2. What the legacy site is doing structurally

### Shared layout pieces

The legacy site repeatedly uses these fragments:

- navbar: [legacy/templates/navbar.html](legacy/templates/navbar.html)
- footer: [legacy/templates/footer.html](legacy/templates/footer.html)
- privacy/terms modal content: [legacy/templates/privacy-terms.html](legacy/templates/privacy-terms.html)
- calculator/profile sidebar fragments: [legacy/templates/sidebar-kalkulator.html](legacy/templates/sidebar-kalkulator.html) and [legacy/templates/sidebar-profile.html](legacy/templates/sidebar-profile.html)

These are ideal candidates for Nuxt layout components and page-level sections.

### Page composition pattern

The legacy pages follow a pattern of:

1. global shell and shared header/footer
2. page-specific content blocks
3. page-specific inline or CSS-file-based styling
4. client-side behavior initialized from [legacy/js/component.js](legacy/js/component.js)

This is a good fit for Nuxt pages + shared components + composables.

## 3. Templating migration map

### Layout components to create

- App shell: `app/components/AppShell.vue`
- Header/navigation: `app/components/layout/AppHeader.vue`
- Footer: `app/components/layout/AppFooter.vue`
- Breadcrumb or page hero section: `app/components/layout/PageHero.vue`
- Sidebar for calculator/profile: `app/components/layout/AppSidebar.vue`

### Page-level components to create

- Home hero/carousel: `app/components/home/HeroCarousel.vue`
- Product grid/cards: `app/components/product/ProductCard.vue`
- Category listing: `app/components/product/CategoryList.vue`
- Quote/cart/wishlist sections: `app/components/commerce/CartSummary.vue`, `app/components/commerce/QuotePanel.vue`

### Reusable UI patterns already present in legacy

- Search area
- Product/action icon area
- Dropdown menus
- Buttons with primary/outline/accent styles
- Cards and list layouts
- Modal-based privacy and terms content

These should be implemented using Nuxt UI components such as:

- `UHeader`, `UNavMenu`, `UDropdown`, `UModal`, `UCard`, `UButton`, `UInput`, `UBadge`, `UContainer`

## 4. Theming analysis

### Legacy color system

The legacy CSS uses a compact brand palette defined in [legacy/css/style.css](legacy/css/style.css) and [legacy/css/style-product-list.css](legacy/css/style-product-list.css):

- primary: `#912748`
- secondary: `#1c2c47`
- accent: `#e8964f`
- light: `#f8f9fa`
- dark: `#212529`
- text: `#424242`
- border: `#e5e5e5`

This is a strong foundation and should be preserved as the design system.

### Recommended Nuxt UI / Tailwind theme mapping

Use these tokens in the Nuxt app theme:

- primary: `#912748`
- secondary: `#1c2c47`
- accent: `#e8964f`
- neutral: `#f8f9fa`
- text: `#424242`
- border: `#e5e5e5`

### Suggested theme approach

- Define theme colors in `app/assets/css/main.css` using CSS variables.
- Expose them to Nuxt UI via `app.config.ts` or `nuxt.config.ts` theme configuration.
- Keep Tailwind utility classes aligned with the same tokens.

Example:

```css
:root {
  --color-primary: #912748;
  --color-secondary: #1c2c47;
  --color-accent: #e8964f;
  --color-surface: #f8f9fa;
  --color-text: #424242;
  --color-border: #e5e5e5;
}
```

## 5. Color scheme recommendations

### Brand direction

The legacy brand is warm, premium, and slightly editorial. The current palette is already suitable for a modern storefront.

### Recommended visual treatment

- Primary color: deep rose/magenta for CTAs and emphasis
- Secondary color: deep navy for headers, navigation, and strong text
- Accent color: orange for highlight badges and special offers
- Surface color: light gray for soft cards and sections
- Border color: soft gray for separation and subtle structure

### UI guidance

- Use the primary color for primary buttons and active states.
- Use the secondary color for navigation and headings.
- Use the accent color sparingly for sale labels, chips, and callout blocks.
- Keep rounded corners modest and consistent, matching the legacy style.

## 6. Legacy styling patterns to preserve

### Typography

- Font family: Inter
- Typography is generally clean and compact, with smaller text sizes for meta/details.
- Preserve the `text-standard` pattern as a utility style in Nuxt/Tailwind.

### Buttons

Legacy buttons use these patterns:

- primary button
- outline primary button
- accent button

These should become reusable button variants in a design system layer.

### Layout rhythm

- Start with a centralized container and spacious section spacing.
- Use the legacy homepage’s card and split-section composition.
- Preserve the strong header/footer separation and soft surface backgrounds.

### Component behaviors to migrate

From [legacy/js/component.js](legacy/js/component.js), the following behavior should be adapted into Nuxt:

- fragment loading for header/footer/sidebar
- bootstrap-based collapse and dropdown behavior
- text sanitization and number formatting
- specification-picker interactions
- enter-to-next-input navigation

In Nuxt, this should be moved to composables or component lifecycle methods instead of DOM-global scripts.

## 7. Recommended migration sequence

1. Set up a shared design token layer in Nuxt/Tailwind.
2. Build the app shell with header, footer, and main container.
3. Rebuild the home page first as the visual reference point.
4. Migrate shared commerce and quote flows next.
5. Replace legacy CSS custom classes with Tailwind + Nuxt UI components gradually.
6. Remove the dependency on legacy Bootstrap-specific patterns as the UI matures.

## 8. Recommended implementation strategy

### Preferred stack

- Nuxt 4
- Nuxt UI
- Tailwind CSS 4
- Component-based layout
- Minimal reliance on custom CSS

### Practical approach

- Keep the visual identity from legacy.
- Replace the old HTML structure with semantic Nuxt components.
- Use Tailwind for layout and spacing.
- Use Nuxt UI for interactive components.
- Keep only a small amount of custom CSS for brand-specific utilities.

## 9. Immediate next step

The first implementation should be a new home page using:

- a branded header,
- a hero section,
- a product showcase area,
- a footer,
- and the legacy color palette.
