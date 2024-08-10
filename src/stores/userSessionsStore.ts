import { defineStore } from "pinia";
import axios from "axios";
import { User, ApiResponseUser } from "@/types/userSessionsTypes";

export const useUserSessionsStore = defineStore("userSessions", {
  state: (): User => ({
    isLoggedIn: false,
    id: undefined,
    email: undefined,
    displayName: undefined,
    lastLoggedInAt: undefined,
    jwtToken: undefined,
  }),

  getters: {
    getIsLoggedIn: (state): boolean => state.isLoggedIn,
    getEmail: (state) => state.email,
    getJwtToken: (state): string | undefined => state.jwtToken,
  },

  actions: {
    async requestGetUserSessions() {
      console.log("requestGetUserSessions start");
      try {
        const response = await axios.get<ApiResponseUser>("/api/user_sessions");
        console.log("response.data:", response.data);
        this.isLoggedIn = response.data.is_logged_in;
        this.id = response.data.id;
        this.email = response.data.email;
        this.displayName = response.data.display_name;
        this.lastLoggedInAt = response.data.last_logged_in_at;
        this.jwtToken = response.data.jwt_token;
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        console.log(this);
        console.log("requestGetUserSessions end");
      }
    },
  },
});
