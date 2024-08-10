export interface User {
  isLoggedIn: boolean;
  id: number | undefined;
  email: string | undefined;
  displayName: string | undefined;
  lastLoggedInAt: string | undefined;
  jwtToken: string | undefined;
}

export interface ApiResponseUser {
  is_logged_in: boolean;
  id: number | undefined;
  email: string | undefined;
  display_name: string | undefined;
  last_logged_in_at: string | undefined;
  jwt_token: string;
}
