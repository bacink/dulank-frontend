<script setup lang="ts">
import type { UserProfile } from "~/composables/useUserProfile";
import type { Order } from "~/composables/useOrders";
import type { Quotation } from "~/composables/useQuotations";
import type { UserAddress } from "#server/types/user";
import type { WishlistEntry } from "#server/types/wishlist";
import type { CartItem } from "#server/types/cart";

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

useLegacyPage({
  title: "Profile",
  styles: [
    "/css/style.css",
    "/css/pages/profile.css",
    "/css/pages/profile-inline.css",
  ],
  scripts: ["/js/component.js", "/js/profile.js", "/js/pages/profile.js"],
  sweetAlert: false,
});

const [
  userResponse,
  ordersResponse,
  quotationResponse,
  addressResponse,
  wishlistResponse,
  cartResponse,
  billingResponse,
] = await Promise.all([
  $fetch<ApiResponse<UserProfile>>("/api/users/1"),
  $fetch<ApiResponse<Order[]>>("/api/orders?userId=1"),
  $fetch<ApiResponse<Quotation[]>>("/api/quotations?userId=1"),
  $fetch<ApiResponse<UserAddress[]>>("/api/users/1/addresses"),
  $fetch<ApiResponse<WishlistEntry[]>>("/api/wishlist"),
  $fetch<ApiResponse<CartItem[]>>("/api/cart"),
  $fetch<ApiResponse<Array<{ id: string }>>>("/api/billings?userId=1"),
]);

const user = userResponse.data;
const orders = ordersResponse.data;
const quotations = quotationResponse.data;
const addresses = addressResponse.data;
const wishlistItems = wishlistResponse.data;
const cartItems = cartResponse.data;
const billings = billingResponse.data;

const profileStats = computed(() => ({
  orders: orders.length,
  history: orders.reduce((sum, order) => sum + order.items.length, 0),
  quotations: quotations.length,
  addresses: addresses.length,
  billings: billings.length,
  cart: cartItems.length,
  wishlist: wishlistItems.length,
}));
</script>

<template>
  <div class="dulank-page dulank-page-profile">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><ProfileSidebar /></div>

          <div class="col-lg-9">
            <PagesProfileHeader :user="user" />
            <div class="profile-content bg-white p-4 rounded-3 shadow-sm">
              <PagesProfileTabs />

              <PagesProfileDetailsForm
                :user="user"
                :stats="profileStats"
              />

              <PagesProfilePasswordForm />

              <PagesProfileTwoFactorAuthenticationForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
