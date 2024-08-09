import { defineStore } from "pinia";
import axios from "axios";
import { User, ApiResponseUser } from "@/types/userSessionsTypes";

export const useUserSessionsStore = defineStore("userSessions", {
  state: (): User => ({
    csrfToken: "",
    isLoggedIn: false,
    id: undefined,
    email: undefined,
    displayName: undefined,
    lastLoggedInAt: undefined,
  }),

  getters: {
    getCsrfToken: (state): string => state.csrfToken,
    getIsLoggedIn: (state): boolean => false,
    getEmail: (state) => state.email,
  },

  actions: {
    async requestGetUserSessions() {
      try {
        const response = await axios.get<ApiResponseUser>("/api/user_sessions");
        this.csrfToken = response.data.csrf_token;
        this.isLoggedIn = response.data.is_logged_in;
        this.id = response.data.id;
        this.email = response.data.email;
        this.displayName = response.data.display_name;
        this.lastLoggedInAt = response.data.last_logged_in_at;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
