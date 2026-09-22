const files = {
  clients: "clients.json",
  "printing-shops": "printing-shops.json",
  "paper-stores": "paper-stores.json",
  "printing-machines": "printing-machines.json",
  "die-cutting-blades": "die-cutting-blades.json",
  "paper-prices": "paper-prices.json",
  "paper-groups": "paper-groups.json",
  "paper-sizes": "paper-sizes.json",
  "paper-types": "paper-types.json",
} as const;

export default defineEventHandler((event) => {
  const kind = getRouterParam(event, "kind") as keyof typeof files;
  if (!Object.hasOwn(files, kind))
    throw createError({ statusCode: 404, statusMessage: "Unknown catalog" });
  const filename = files[kind];
  return createResponse(readJSON<unknown[]>(filename));
});
