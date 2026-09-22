import type { SupportTicket } from "#server/types/ticket";

export default defineEventHandler((event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Ticket ID required" });
  }

  const ticket = readJSON<SupportTicket[]>("tickets.json").find(
    (item) => item.id === id,
  );
  if (!ticket) {
    throw createError({ statusCode: 404, statusMessage: "Ticket not found" });
  }

  return createResponse(ticket);
});
