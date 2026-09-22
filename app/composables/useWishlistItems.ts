import type { WishlistEntry } from "#server/types/wishlist";

interface WishlistResponse {
  success: boolean;
  data: WishlistEntry[];
}

export function useWishlistItems() {
  const { data } = useFetch<WishlistResponse>("/api/wishlist", {
    key: "wishlist",
  });
  const wishlistItems = computed<WishlistEntry[]>(() => data.value?.data ?? []);
  return { wishlistItems };
}
