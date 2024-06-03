import { defineStore } from "pinia";
import axios from "axios";

export const useSignupStore = defineStore("signup", {
  state: () => ({
    email: "",
    hasReceivedEmail: false,
    error: "",
    isLoading: false,
  }),
  persist: {
    paths: ["email", "hasReceivedEmail"],
    storage: window.localStorage,
  },

  getters: {
    getEmail: (state) => state.email,
    getHasReceivedEmail: (state) => state.hasReceivedEmail,
    getError: (state) => state.error,
    getIsLoading: (state) => state.isLoading,
  },

  actions: {
    setEmail(email: string) {
      this.$patch({ email: email });
    },

    setHasReceivedEmail(hasReceivedEmail: boolean) {
      this.$patch({ hasReceivedEmail: hasReceivedEmail });
    },

    setError(error: string) {
      this.$patch({ error: error });
    },

    setIsLoading(isLoading: boolean) {
      this.$patch({ isLoading: isLoading });
    },

    // NOTE: email と password でサインアップする。
    // NOTE: 認証コード再送の場合は、再び password を送信しなくて良い。
    async requestSignup(email: string, password: string | null) {
      try {
        this.setIsLoading(true);
        await axios.post<null>("/api/users/signup", {
          email: email,
          password: password,
        });
        this.setError("");
        this.setEmail(email);
        this.setHasReceivedEmail(true);
      } catch (error) {
        if (error instanceof Error) {
          this.setError(error.message);
          console.error("Error request:", error.message);
        } else {
          // 型がErrorでない場合の処理（オプション）
          console.error("Unknown error:", error);
        }
      } finally {
        this.setIsLoading(false);
      }
    },

    // 認証コードを送信して、サインアップを完了する。
    async requestVerify(verifyCode: string) {
      try {
        this.setIsLoading(true);
        await axios.patch<null>("/api/users/signup", {
          verifyCode: verifyCode,
        });
      } catch (error) {
        console.error("Error request:", error);
      } finally {
        this.setIsLoading(false);
      }
    },
  },
});
