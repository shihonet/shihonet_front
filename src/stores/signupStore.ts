import { defineStore } from "pinia";
import axios from "axios";

export const useSignupStore = defineStore("signup", {
  state: () => ({
    email: "",
    hasReceivedEmail: false,
  }),
  persist: {
    paths: ["email", "hasReceivedEmail"],
    storage: window.sessionStorage,
  },

  getters: {
    getEmail: (state) => state.email,
    getHasReceivedEmail: (state) => state.hasReceivedEmail,
  },

  actions: {
    setEmail(email: string) {
      this.$patch({ email: email });
    },

    setHasReceivedEmail(hasReceivedEmail: boolean) {
      this.$patch({ hasReceivedEmail: hasReceivedEmail });
    },

    // NOTE: email と password でサインアップする。
    // NOTE: 認証コード再送の場合は、再び password を送信しなくて良い。
    async requestSignup(email: string, password: string | null) {
      try {
        await axios.post<null>("/api/users/signup", {
          email: email,
          password: password,
        });
      } catch (error) {
        console.error("Error request:", error);
      }
    },

    // 認証コードを送信して、サインアップを完了する。
    async requestVerify(verifyCode: string) {
      try {
        await axios.patch<null>("/api/users/signup", {
          verifyCode: verifyCode,
        });
      } catch (error) {
        console.error("Error request:", error);
      }
    },
  },
});
