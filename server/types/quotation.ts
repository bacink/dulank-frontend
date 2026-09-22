export interface QuotationItem {
  productId: number
  name: string
  category?: string
  quantity: number
  spec: string
  artwork?: string
  printResult?: string
  note?: string
  unitPrice: number
  total: number
}

export interface CustomerInfo {
  name: string
  email: string
  phone: string
}

export interface Quotation {
  id: string
  userId: number
  date: string
  validUntil?: string
  status: string
  items: QuotationItem[]
  customerInfo: CustomerInfo
  subtotal?: number
  tax?: number
  shippingCost?: number
  total: number
}
