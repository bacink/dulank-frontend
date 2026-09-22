import type { UserAddress } from "#server/types/user";

interface AddressResponse {
  success: boolean;
  data: UserAddress[];
}

export function useUserAddresses(userId = 1) {
  const { data } = useFetch<AddressResponse>(`/api/users/${userId}/addresses`, {
    key: `user-${userId}-addresses`,
  });
  const addresses = computed<UserAddress[]>(() => data.value?.data ?? []);
  return { addresses };
}
