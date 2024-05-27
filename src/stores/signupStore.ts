import { defineStore } from "pinia";
import axios from "axios";

export const useSignupStore = defineStore("signup", {
  actions: {
    async requestSignup(email: string, password: string) {
      try {
        await axios.post<null>("/api/signup", {
          email: email,
          password: password,
        });
      } catch (error) {
        console.error("Error request:", error);
      }
    },
  },
});
