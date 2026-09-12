import type { Product } from '#server/types/product'

export function useHomeProducts() {
  const { data } = useFetch('/api/products?limit=10', {
    key: 'index-products'
  })

  const products = computed<Product[]>(() => data.value?.data ?? [])

  const featuredProducts = computed<{ brosur: Product | null; yasin: Product | null; kaos: Product | null }>(() => {
    if (!products.value.length) return { brosur: null, yasin: null, kaos: null }
    const brosur = products.value.find(p => p.tags.includes('brosur') || p.image.includes('brosur')) ?? null
    const yasin = products.value.find(p => p.tags.includes('yasin') || p.image.includes('yasin')) ?? null
    const kaos = products.value.find(p => p.tags.includes('kaos') || p.image.includes('kaos')) ?? null
    return { brosur, yasin, kaos }
  })

  const newProduct = computed(() => {
    if (!products.value.length) return null
    return products.value.find(p => p.tags.includes('sticker') || p.image.includes('sticker')) || null
  })

  return { products, featuredProducts, newProduct }
}
