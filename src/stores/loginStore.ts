import { defineStore } from "pinia";
import axios from "axios";

export const useSignupStore = defineStore("signup", {
  state: () => ({
    email: "",
    hasGotEmailAuthCode: false,
    error: "",
    isLoading: false,
  }),
  persist: {
    paths: ["email", "hasGotEmailAuthCode"],
    storage: window.sessionStorage,
  },

  getters: {
    getEmail: (state) => state.email,
    getHasGotEmailAuthCode: (state) => state.hasGotEmailAuthCode,
    getError: (state) => state.error,
    getIsLoading: (state) => state.isLoading,
  },

  actions: {
    setEmail(email: string) {
      this.$patch({ email: email });
    },

    setHasGotEmailAuthCode(hasGotEmailAuthCode: boolean) {
      this.$patch({ hasGotEmailAuthCode: hasGotEmailAuthCode });
    },

    setError(error: string) {
      this.$patch({ error: error });
    },

    setIsLoading(isLoading: boolean) {
      this.$patch({ isLoading: isLoading });
    },

    /**
     * サインアップリクエストを送信する。
     * 認証コード再送の場合は、再び password を送信しなくて良い。（パスワードはそのまま）
     * @param email
     * @param password
     * @param passwordConfirmation
     */
    async requestSignup(email: string, password: string, passwordConfirmation: string) {
      try {
        this.setIsLoading(true);
        await axios.post<null>("/api/users/signup", {
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        });
        this.setError("");
        this.setEmail(email);
        this.setHasGotEmailAuthCode(true);
      } catch (error: any) {
        this.setError(error.response?.data.errors);
      } finally {
        this.setIsLoading(false);
      }
    },
  },
});
