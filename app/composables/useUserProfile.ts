export interface UserProfile {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  joinDate?: string;
  lastLogin?: string;
  companyType?: string;
  companyName?: string;
  departmentName?: string;
  npwp?: string;
  transactionCode?: string;
  taxAddress?: string;
  attachTaxInvoice?: boolean;
}

interface UserProfileResponse {
  success: boolean;
  data: UserProfile;
}

export function useUserProfile(userId = 1) {
  const { data, pending, error } = useFetch<UserProfileResponse>(
    `/api/users/${userId}`,
    { key: `user-profile-${userId}` },
  );

  const user = computed(() => data.value?.data ?? null);

  return { user, pending, error };
}
