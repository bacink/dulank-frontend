export default defineEventHandler(() => {
  return createResponse(readJSON<{ [k: string]: string }>('kota-kabupaten.json'))
})
