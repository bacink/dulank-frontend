export default defineEventHandler(() => {
  return createResponse(readJSON<{ [k: string]: string }>('provinsi.json'))
})
