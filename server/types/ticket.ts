export interface TicketReply {
  from: string;
  message: string;
  date: string;
}

export interface SupportTicket {
  id: string;
  userId: number;
  subject: string;
  type?: string;
  message: string;
  priority: string;
  status: string;
  date: string;
  replies: TicketReply[];
}
