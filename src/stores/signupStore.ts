import { defineStore } from "pinia";
import axios from "axios";

export const useSignupStore = defineStore("signup", {
  state: () => ({
    email: "",
    hasRequested: false,
    error: undefined,
    isLoading: false,
  }),

  getters: {
    getEmail: (state) => state.email,
    getHasRequested: (state) => state.hasRequested,
    getError: (state) => state.error,
    getIsLoading: (state) => state.isLoading,
  },

  actions: {
    /**
     * サインアップリクエストを送信する。
     * 認証コード再送の場合は、再び password を送信しなくて良い。（パスワードはそのまま）
     * @param email
     * @param password
     * @param passwordConfirmation
     */
    async requestSignup(email: string, password: string, passwordConfirmation: string) {
      this.isLoading = true;
      try {
        await axios.post<null>("/api/users/signup", {
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        });
        this.error = undefined;
        this.email = email;
        this.hasRequested = true;
      } catch (error: any) {
        this.error = error.response?.data.error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
