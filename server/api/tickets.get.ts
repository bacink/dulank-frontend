import type { SupportTicket } from "#server/types/ticket";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const userId = Number(query.userId) || 1;

  const tickets = readJSON<SupportTicket[]>("tickets.json").filter(
    (ticket) => ticket.userId === userId,
  );

  return createResponse(tickets);
});
