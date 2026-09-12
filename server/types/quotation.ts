export interface QuotationItem {
  productId: number
  name: string
  quantity: number
  spec: string
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
  status: string
  items: QuotationItem[]
  customerInfo: CustomerInfo
  total: number
}
