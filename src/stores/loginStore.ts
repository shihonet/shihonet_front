import { defineStore } from "pinia";
import axios from "axios";

export const useLoginStore = defineStore("login", {
  state: () => ({
    email: "",
    error: "",
    isLoading: false,
  }),

  getters: {
    getEmail: (state) => state.email,
    getError: (state) => state.error,
    getIsLoading: (state) => state.isLoading,
  },

  actions: {
    setError(error: string) {
      this.$patch({ error: error });
    },

    setIsLoading(isLoading: boolean) {
      this.$patch({ isLoading: isLoading });
    },

    /**
     * ログインリクエストを送信する。
     * @param email
     * @param password
     */
    async requestLogin(email: string, password: string) {
      try {
        this.setIsLoading(true);
        await axios.post<null>("/api/users/login", {
          email: email,
          password: password,
        });
        this.setError("");
      } catch (error: any) {
        this.setError(error.response?.data.errors);
      } finally {
        this.setIsLoading(false);
      }
    },
  },
});
