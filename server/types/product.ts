export interface ProductSpec {
  group: string
  options: string[]
}

export interface Product {
  id: number
  name: string
  slug: string
  categoryId: number
  description: string
  priceFrom: number
  priceTo: number
  image: string
  specs: ProductSpec[]
  tags: string[]
  isCalculator?: boolean
}
