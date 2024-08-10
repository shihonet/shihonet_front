import { defineStore } from "pinia";
import axios from "axios";
import {useUserSessionsStore} from "@/stores/userSessionsStore";

export const useSignupStore = defineStore("signup", {
  state: () => ({
    email: "",
    hasRequested: false,
    error: "",
    isLoading: false,
  }),
  // persist: {
  //   paths: ["email", "hasRequested"],
  //   storage: window.sessionStorage,
  // },

  getters: {
    getEmail: (state) => state.email,
    getHasRequested: (state) => state.hasRequested,
    getError: (state) => state.error,
    getIsLoading: (state) => state.isLoading,
  },

  actions: {
    setEmail(email: string) {
      this.$patch({ email: email });
    },

    setHasRequested(hasRequested: boolean) {
      this.$patch({ hasRequested: hasRequested });
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
    async requestSignup(
      email: string,
      password: string,
      passwordConfirmation: string
    ) {
      const userSessionsStore = useUserSessionsStore();
      await userSessionsStore.requestGetUserSessions();
      try {
        this.setIsLoading(true);
        const csrfToken = userSessionsStore.getCsrfToken;
        console.log(csrfToken);
        axios.defaults.headers.common = {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRF-Token": csrfToken,
        };
        await axios.post<null>("/api/users/signup", {
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        });
        this.setError("");
        this.setEmail(email);
        this.setHasRequested(true);
      } catch (error: any) {
        this.setError(error.response?.data.errors);
      } finally {
        this.setIsLoading(false);
      }
    },
  },
});
