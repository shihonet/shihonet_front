export type PaymentMethod = "credit_card" | "paypay" | "bank_transfer";

export interface GraduationMessage {
  xAccountId: string;
  email: string;
  paymentMethod: PaymentMethod;
  selectedAmount: number;
  message: string | null;
  note: string;
  excludeFromSiteMessage: boolean;
}

export interface ApiRequestGraduationMessage {
  x_account_id: string;
  email: string;
  payment_method: PaymentMethod;
  selected_amount: number;
  message: string | null;
  note: string;
  exclude_from_site_message: boolean;
}
