import type { User } from "#server/types/user";

export default defineEventHandler((event) => {
  const userId = Number(getRouterParam(event, "id"));
  if (!userId) throw createError({ statusCode: 400, statusMessage: "User ID required" });

  const user = readJSON<User[]>("users.json").find((item) => item.id === userId);
  if (!user) throw createError({ statusCode: 404, statusMessage: "User not found" });

  return createResponse(user);
});
