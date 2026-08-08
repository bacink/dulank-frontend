<template>
  <div class="min-h-screen bg-white text-slate-700">
    <LayoutMainNavbar />
    <main class="pb-16">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
