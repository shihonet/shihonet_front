import { defineStore } from "pinia";
import axios from "axios";
import { User, ApiResponseUser } from "@/types/userSessionsTypes";
import { useCookies } from "vue3-cookies";

interface UserSession extends User {
  isLoggedIn: boolean;
  id: number | undefined;
  email: string | undefined;
  displayName: string | undefined;
  lastLoggedInAt: string | undefined;
  error: string;
  isLoading: boolean;
}

export const useUserSessionsStore = defineStore("userSessions", {
  state: (): UserSession => ({
    isLoggedIn: false,
    id: undefined,
    email: undefined,
    displayName: undefined,
    lastLoggedInAt: undefined,
    error: "",
    isLoading: false,
  }),

  getters: {
    getIsLoggedIn: (state): boolean => state.isLoggedIn,
    getEmail: (state) => state.email,
    getError: (state): string => state.error,
    getIsLoading: (state): boolean => state.isLoading,
  },

  actions: {
    async requestGetUserSessions() {
      const { cookies } = useCookies();
      const token = cookies.get("shihonet_jwt_token");
      if (!token) return;

      try {
        const response = await axios.get<ApiResponseUser>("/api/user_sessions");
        this.setSessionUserData(response.data);
      } catch (error) {
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
        this.setSessionUserData(response.data);
        this.error = "";
      } catch (error: any) {
        this.error = error.response?.data.errors;
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
