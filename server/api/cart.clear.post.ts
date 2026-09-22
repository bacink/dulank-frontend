export default defineEventHandler(() => {
  writeJSON("cart.json", []);
  return createResponse({ cleared: true });
});
