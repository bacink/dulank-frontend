<script setup lang="ts">
useLegacyPage({
  title: "Detail Blog",
  styles: ["/css/style.css", "/css/blog.css", "/css/pages/post-inline.css"],
  scripts: ["/js/component.js"],
  sweetAlert: false,
});

const route = useRoute();
const { posts } = useBlogPosts();
const post = computed(() => {
  const slug = String(route.query.slug ?? "");
  return (
    posts.value.find((entry) => entry.slug === slug) ?? posts.value[0] ?? null
  );
});
const relatedPosts = computed(() =>
  posts.value.filter((entry) => entry.id !== post.value?.id).slice(0, 3),
);
const popularPosts = computed(() => posts.value.slice(0, 4));
</script>

<template>
  <div class="dulank-page dulank-page-post">
    <main class="container my-md-5 my-2">
      <div class="row">
        <div v-if="post" class="col-lg-8">
          <PagesPostArticleHeader :post="post" />
          <PagesPostSocialShareLinks />
          <PagesPostArticleBody :post="post" />
          <hr class="my-4" />

          <PagesPostArticleActions />
          <hr class="my-4" />

          <PagesPostArticleNavigation />

          <div class="mb-2 d-flex align-items-center">
            <span class="fw-semibold py-1 rounded-1 me-2"
              >RELATED ARTICLES</span
            >
          </div>
          <hr class="mt-0 mb-3" />
          <PagesPostRelatedArticles :posts="relatedPosts" />
        </div>

        <div class="col-lg-4">
          <PagesPostArticleSearchForm />
          <PagesPostPopularArticles :posts="popularPosts" />
        </div>
      </div>
    </main>
  </div>
</template>
