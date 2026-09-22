<script setup lang="ts">
import type { SupportTicket } from "#server/types/ticket";
useLegacyPage({
  title: "Support Ticket",
  styles: ["/css/style.css", "/css/pages/support-ticket-inline.css"],
  scripts: ["/js/component.js", "/js/profile.js"],
  sweetAlert: false,
});

const { data, refresh } = useFetch<{ success: boolean; data: SupportTicket[] }>(
  "/api/tickets?userId=1",
);
const tickets = computed(() => data.value?.data ?? []);
</script>

<template>
  <div class="dulank-page dulank-page-support-ticket">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><ProfileSidebar /></div>

          <div class="col-lg-9">
            <PagesSupportTicketList :tickets="tickets" />
          </div>
        </div>
      </div>
    </main>

    <PagesSupportTicketCreateTicketModal @created="refresh" />
  </div>
</template>
