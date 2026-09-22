import type { Category } from "#server/types/category";

export default defineEventHandler(() => {
  return createResponse(readJSON<Category[]>("categories.json"));
});
