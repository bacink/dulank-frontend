<script setup lang="ts">
useLegacyPage({
  title: "Blog List",
  styles: ["/css/style.css", "/css/blog.css"],
  scripts: ["/js/component.js"],
  sweetAlert: false,
});

const { posts } = useBlogPosts();
</script>

<template>
  <div class="dulank-page dulank-page-blog">
    <main class="container my-md-5 my-2">
      <div class="row">
        <PagesBlogMobileSearchForm />
        <h5 class="fw-bold mb-3">Artikel Terbaru</h5>

        <div class="col-lg-8">
          <PagesBlogArticleGrid :posts="posts" />

          <PagesBlogPaginationControls />
        </div>

        <div class="col-lg-4">
          <PagesBlogDesktopSearchForm />
          <PagesBlogPopularArticles :posts="posts" />
        </div>
      </div>
    </main>
  </div>
</template>
