import type { SupportTicket } from "#server/types/ticket";

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    userId?: number;
    subject?: string;
    message?: string;
    priority?: string;
    type?: string;
  }>(event);
  if (!body?.subject?.trim() || !body?.message?.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: "Subject and message are required",
    });
  }
  const tickets = readJSON<SupportTicket[]>("tickets.json");

  const id = `TK-${String(tickets.length + 1).padStart(3, "0")}`;
  const ticket: SupportTicket = {
    id,
    userId: body.userId || 1,
    subject: body.subject.trim(),
    type: body.type || "Info Inquiry",
    message: body.message.trim(),
    priority: body.priority || "medium",
    status: "open",
    date: new Date().toISOString().split("T")[0],
    replies: [],
  };

  tickets.push(ticket);
  writeJSON("tickets.json", tickets);

  return createResponse(ticket);
});
