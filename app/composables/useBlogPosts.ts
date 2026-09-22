import type { BlogPost } from "#server/types/blog";

interface BlogResponse {
  success: boolean;
  data: BlogPost[];
}

export function useBlogPosts() {
  const { data } = useFetch<BlogResponse>("/api/blog?page=1&limit=10", {
    key: "blog-posts",
  });

  const posts = computed<BlogPost[]>(() => data.value?.data ?? []);
  return { posts };
}
