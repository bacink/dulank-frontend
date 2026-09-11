export default defineEventHandler(() => {
  // Cart is ephemeral — return empty for now, mutations handle it
  return createResponse([])
})
