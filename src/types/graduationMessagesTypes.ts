export interface GraduationMessage {
  xAccountName: string,
  contact: string,
  paymentMethod: string,
  selectedAmount: number,
  message: string,
  note: string,
  excludeFromSiteMessage: boolean,
}

export interface ApiRequestGraduationMessage {
  x_account_name: string,
  contact: string,
  payment_method: string,
  selected_amount: number,
  message: string,
  note: string,
  exclude_from_site_message: boolean,
}
