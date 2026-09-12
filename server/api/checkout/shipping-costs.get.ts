export default defineEventHandler((event) => {
  const query = getQuery(event)
  const origin = String(query.origin || '')
  const destination = String(query.destination || '')
  const weight = Number(query.weight) || 1

  const methods = [
    { method: 'REG', cost: 15000 + weight * 5000, eta: '2-3 hari' },
    { method: 'YES', cost: 25000 + weight * 8000, eta: '1-2 hari' },
    { method: 'FIRST', cost: 35000 + weight * 12000, eta: '1 hari' }
  ]

  return createResponse(methods)
})
