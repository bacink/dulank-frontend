<script setup lang="ts">
useLegacyPage({
  title: "Register",
  styles: ["/css/style.css"],
  scripts: ["/js/component.js", "/js/profile.js"],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-register">
    <PagesRegisterAccountHeader />
    <main>
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-12">
            <div class="row justify-content-center">
              <PagesRegisterRegistrationIllustration />
              <PagesRegisterRegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
