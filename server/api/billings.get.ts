interface Billing {
  id: string;
  userId: number;
  orderId?: string;
  invoiceDate: string;
  dueDate: string;
  total: number;
  status: string;
}

export default defineEventHandler((event) => {
  const userId = Number(getQuery(event).userId) || 1;
  return createResponse(
    readJSON<Billing[]>("billings.json").filter(
      (bill) => bill.userId === userId,
    ),
  );
});
