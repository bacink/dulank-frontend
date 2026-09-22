import type { BlogPost } from "#server/types/blog";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const posts = readJSON<BlogPost[]>("blog.json");
  const limit = Math.min(Number(query.limit) || 10, 100);
  const page = Math.max(Number(query.page) || 1, 1);
  const total = posts.length;
  const start = (page - 1) * limit;

  return createResponse(posts.slice(start, start + limit), {
    page,
    limit,
    total,
  });
});
