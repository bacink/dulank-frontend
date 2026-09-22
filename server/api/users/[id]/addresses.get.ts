import type { User, UserAddress } from "#server/types/user";

export default defineEventHandler((event) => {
  const userId = Number(getRouterParam(event, "id")) || 1;
  const user = readJSON<User[]>("users.json").find(
    (entry) => entry.id === userId,
  );

  if (!user) throw createError({ status: 404, statusText: "User not found" });
  const addresses = readJSON<(UserAddress & { userId: number })[]>("addresses.json");
  return createResponse(addresses.filter((address) => address.userId === userId));
});
