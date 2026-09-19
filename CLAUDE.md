# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Percetakan Dulank — Migrasi Nuxt 4 dari website statis toko percetakan (55+ halaman HTML) ke aplikasi Nuxt Vue 3. Mandat utama: **fidelitas visual** — pertahankan tampilan, konten, fitur, dan perilaku situs statis asli sembari mengganti Bootstrap JS/CSS dengan compatibility shim dan menggunakan Tailwind CSS 4 untuk layout utilities.

## Commands

```bash
npm install             # Install dependencies (butuh jaringan)
npm run dev             # Start dev server di http://localhost:3000
npm run build            # Production build
npm run preview          # Preview build secara lokal
npm run typecheck        # TypeScript check
npm run validate:migration   # Validasi 55+ halaman sumber terwakili
npm run validate:revision3   # Validasi syntax JS hasil migrasi
```

Registry npm mungkin tidak terjangkau di lingkungan terisolasi. `npm install`, typecheck, dan build butuh akses jaringan.

## Architecture

### Two-Layer Page Model

Halaman pakai dua strategi:

1. **Vue component layer** (`app/components/pages/*.vue`) — render struktur HTML, class, dan DOM hierarchy secara verbatim dari sumber statis asli
2. **Legacy JS runtime** — file JS asli dimuat via `useLegacyPage()` composable:
   - Inject Google Fonts, Font Awesome, Bootstrap Icons, SweetAlert2
   - Fetch & eval legacy JS setelah mount, patch `DOMContentLoaded` agar script existing jalan
   - Load SweetAlert2 on demand

Pattern halaman:

```vue
<script setup lang="ts">
useLegacyPage({
  title: "...",
  styles: ["/css/..."],
  scripts: ["/js/..."],
  sweetAlert: true,
});
</script>
<template><div class="dulank-page ..">/* HTML verbatim */</div></template>
```

### Bootstrap Compatibility Shim

`app/plugins/legacy-ui.client.ts` menyediakan implementasi minimal Bootstrap JS (Collapse, Modal, Tab, Toast, Carousel, Tooltip) sebagai client-side plugin. Menangani atribut `data-bs-toggle`, `data-bs-dismiss`, `data-bs-slide`. **Jangan tambahkan Bootstrap** — perbaiki styling lewat compatibility CSS layer.

### Layout System

3 navbar variant dipilih route di `app/layouts/default.vue`:

- `main` — nav standar untuk sebagian besar halaman
- `calculator` — sidebar-heavy nav untuk halaman calculator/produk
- `page` — tanpa navbar (login, register, checkout, forgot-password, verify-email)

### CSS Layers (dimuat di `app/assets/css/main.css`)

1. `bootstrap-compat.css` — recreates Botstrap grid/utilities tanpa framework
2. `legacy/style.css` & `legacy/pages/*.css` — disalin dari situs asli, jaga styling per-halaman
3. `fidelity-fixes.css` — perbaiki visual drift dari migrasi

Class Bootstrap asli tetap di template karena jadi DOM hook untuk legacy CSS/JS.

### Component Organization

Komponen di `app/components/` dikelompokkan:

- `pages/` — satu komponen per halaman (render HTML verbatim)
- `layout/` — AppHeader, AppFooter, MainNavbar, CalculatorNavbar, CalculatorHeader
- `auth/`, `cart/`, `category/`, `product/`, `profile/`, `quotation/`, `support/` — shared sub-components
- `common/` — Breadcrumb, EmptyState, QuantityControl (elemen generic)

Route file (`app/pages/*.vue`) adalah wrapper tipis yang render `Pages*Page` component.

### Static Assets

- Legacy JS/CSS/JSON/templates disalin ke `public/` (mimic path asli seperti `/js/pages/cart.js`)
- Gambar dari `public/images/`
- Source HTML disimpan di `legacy/static-source/` untuk referensi

## Key Constraints

- **Jangan tambahkan Bootstrap** — sengaja dikecualikan. Pakai `bootstrap-compat.css` atau `fidelity-fixes.css`
- **Jaga struktur DOM** — class, ID, dan hierarchy harus match HTML asli agar legacy JS/CSS jalan
- **Jangan refactor halaman jadi komponen kecil** kecuali diminta — fidelitas lebih prioritas
- **Halaman calculator** beda layout (sidebar + header) dari halaman utama
- **Link navigasi** yang指向 `.html` harus diubah ke Nuxt route (tanpa extension)
- **Tambah halaman baru**: buat route di `app/pages/`, component di `app/components/pages/`, salin JS/CSS ke `public/`

## Documentation

- `docs/ROUTES.md` — pemetaan lengkap 55+ halaman sumber ke route Nuxt
- `docs/COMPONENTS.md` — overview struktur komponen
- `docs/MIGRATION.md` — status migrasi dan guarantees
- `legacy/static-source/` — file statis asli untuk referensi dan comparison

```

```
