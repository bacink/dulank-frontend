import type { Product } from '#server/types/product'

export async function useHomeProducts() {
  const { data } = await useFetch('/api/products?limit=10', {
    key: 'index-products'
  })

  const products = computed<Product[]>(() => data.value?.data ?? [])

  const featuredProducts = computed(() => {
    if (!products.value.length) return { brosur: null, yasin: null, kaos: null }
    const brosur = products.value.find(p => p.tags.includes('brosur') || p.image.includes('brosur'))
    const yasin = products.value.find(p => p.tags.includes('yasin') || p.image.includes('yasin'))
    const kaos = products.value.find(p => p.tags.includes('kaos') || p.image.includes('kaos'))
    return { brosur, yasin, kaos }
  })

  const newProduct = computed(() => {
    if (!products.value.length) return null
    return products.value.find(p => p.tags.includes('sticker') || p.image.includes('sticker')) || null
  })

  return { products, featuredProducts, newProduct }
}
