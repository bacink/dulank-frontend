import type { SupportTicket } from "#server/types/ticket";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const body = await readBody<{ message?: string; close?: boolean }>(event);
  const message = body?.message?.trim();
  if (!message)
    throw createError({
      statusCode: 400,
      statusMessage: "Message is required",
    });

  const tickets = readJSON<SupportTicket[]>("tickets.json");
  const ticket = tickets.find((entry) => entry.id === id);
  if (!ticket)
    throw createError({ statusCode: 404, statusMessage: "Ticket not found" });

  ticket.replies.push({
    from: "user",
    message,
    date: new Date().toISOString(),
  });
  if (body.close) ticket.status = "closed";
  writeJSON("tickets.json", tickets);
  return createResponse(ticket);
});
