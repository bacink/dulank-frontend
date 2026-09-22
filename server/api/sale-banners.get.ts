import type { SaleBanner } from "#server/types/sale-banner";

export default defineEventHandler(() => {
  return createResponse(readJSON<SaleBanner[]>("sale-banners.json"));
});
