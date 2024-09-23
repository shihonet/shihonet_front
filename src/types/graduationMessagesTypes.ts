export type PaymentMethod = "credit_card" | "paypay" | "bank_transfer";

export interface GraduationMessage {
  participantId: string;
  xAccountId: string | null;
  email: string;
  paymentMethod: PaymentMethod;
  selectedAmount: number;
  paymentDeadline: string;
  message: string | null;
  note: string | null;
  excludeFromSiteMessage: boolean;
}

export interface ApiRequestGraduationMessage {
  x_account_id: string | null;
  email: string;
  payment_method: PaymentMethod;
  selected_amount: number;
  message: string | null;
  note: string | null;
  exclude_from_site_message: boolean;
}

export interface ApiResponseGraduationMessage {
  participant_id: string;
  email: string;
  payment_method: PaymentMethod;
  selected_amount: number;
  payment_deadline: string;
}
