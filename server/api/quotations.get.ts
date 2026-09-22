import type { Quotation } from "#server/types/quotation";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const userId = Number(query.userId) || 1;

  const quotations = readJSON<Quotation[]>("quotations.json").filter(
    (quotation) => quotation.userId === userId,
  );

  return createResponse(quotations);
});
