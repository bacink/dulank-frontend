<script setup lang="ts">
useLegacyPage({
  title: "Profile Kalkulator",
  styles: ["/css/style.css", "/css/pages/profile-kalkulator-inline.css"],
  scripts: [
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/address-input.js",
    "/js/pages/profile-kalkulator.js",
  ],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-profile-kalkulator">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

          <div class="col-lg-9">
            <PagesProfileKalkulatorCalculatorProfileHeader />

            <PagesProfileKalkulatorCalculatorProfileForm />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
