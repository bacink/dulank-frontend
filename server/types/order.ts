export interface OrderItem {
  productId: number
  name: string
  quantity: number
  price: number
  total: number
}

export interface ShippingAddress {
  name: string
  phone: string
  type: string
  street: string
  district: string
  city: string
  province: string
  postalCode: string
  country: string
}

export interface OrderTimeline {
  status: string
  date: string
}

export interface Order {
  id: string
  userId: number
  status: string
  date: string
  items: OrderItem[]
  shippingAddress: ShippingAddress
  total: number
  timeline?: OrderTimeline[]
}
