export default defineEventHandler(() => {
  return createResponse(readJSON<{ [k: string]: { bps: string; nama: string } }>('kodepos.json'))
})
