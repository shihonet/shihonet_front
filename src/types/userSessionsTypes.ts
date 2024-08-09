export interface User {
  csrfToken: string;
  isLoggedIn: boolean;
  id: number | undefined;
  email: string | undefined;
  displayName: string | undefined;
  lastLoggedInAt: string | undefined;
}

export interface ApiResponseUser {
  csrf_token: string;
  is_logged_in: boolean;
  id: number | undefined;
  email: string | undefined;
  display_name: string | undefined;
  last_logged_in_at: string | undefined;
}
