import type { Quotation } from "#server/types/quotation";

export default defineEventHandler((event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "Quotation ID required",
    });
  }

  const quotation = readJSON<Quotation[]>("quotations.json").find(
    (item) => item.id === id,
  );
  if (!quotation) {
    throw createError({
      statusCode: 404,
      statusMessage: "Quotation not found",
    });
  }

  return createResponse(quotation);
});
