import { defineStore } from "pinia";
import axios from "axios";
import { User, ApiResponseUser } from "@/types/userSessionsTypes";

interface UserSession extends User {
  isLoggedIn: boolean;
  id: number | undefined;
  email: string | undefined;
  displayName: string | undefined;
  lastLoggedInAt: string | undefined;
  error: string | undefined;
  isLoading: boolean;
}

export const useUserSessionsStore = defineStore("userSessions", {
  state: (): UserSession => ({
    isLoggedIn: false,
    id: undefined,
    email: undefined,
    displayName: undefined,
    lastLoggedInAt: undefined,
    error: undefined,
    isLoading: false,
  }),

  getters: {
    getIsLoggedIn: (state): boolean => state.isLoggedIn,
    getEmail: (state) => state.email,
    getError: (state): string | undefined => state.error,
    getIsLoading: (state): boolean => state.isLoading,
  },

  actions: {
    async requestGetUserSessions() {
      try {
        const response = await axios.get<ApiResponseUser>("/api/user_sessions");
        this.setSessionUserData(response.data);
        this.isLoggedIn = true;
      } catch (error) {
        this.isLoggedIn = false;
        console.error("Error fetching data:", error);
      }
    },

    /**
     * ログインリクエストを送信する。
     * @param email
     * @param password
     */
    async requestLogin(email: string, password: string) {
      try {
        this.isLoading = true;
        const response = await axios.post<ApiResponseUser>("/api/users/login", {
          email: email,
          password: password,
        });
        const jwtToken = response.headers['authorization'].split(' ')[1];
        localStorage.setItem('shihonet-token', jwtToken);
        this.setSessionUserData(response.data);
        this.isLoggedIn = true;
        this.error = undefined;
      } catch (error: any) {
        this.error = error.response?.data.error;
      } finally {
        this.isLoading = false;
      }
    },

    setSessionUserData(user: ApiResponseUser) {
      this.isLoggedIn = user.is_logged_in;
      this.id = user.id;
      this.email = user.email;
      this.displayName = user.display_name;
      this.lastLoggedInAt = user.last_logged_in_at;
    },
  },
});
