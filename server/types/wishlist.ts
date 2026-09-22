export interface WishlistEntry {
  id: number;
  userId: number;
  productId: number;
  name: string;
  image: string;
  price: number;
  spec: string;
  addedAt: string;
  expireDate: string;
  expired?: boolean;
}
