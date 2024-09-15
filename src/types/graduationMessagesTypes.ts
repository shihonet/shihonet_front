export interface GraduationMessage {
  xAccountId: string,
  email: string,
  paymentMethod: string,
  selectedAmount: number,
  message: string | null,
  note: string,
  excludeFromSiteMessage: boolean,
}

export interface ApiRequestGraduationMessage {
  x_account_id: string,
  email: string,
  payment_method: string,
  selected_amount: number,
  message: string | null,
  note: string,
  exclude_from_site_message: boolean,
}
