import { defineStore } from "pinia";

type ToastType = "success" | "error";

type OpenState = {
  showToastType: ToastType | "none";
  toastMessage: string;
};

export const useOpenStore = defineStore("open", {
  state: (): OpenState => ({
    showToastType: "none",
    toastMessage: "",
  }),

  getters: {
    getShowToastType: (state) => state.showToastType,
    getToastMessage: (state) => state.toastMessage,
  },

  actions: {
    setToast(type: ToastType, message: string) {
      this.showToastType = type;
      this.toastMessage = message;
    },

    resetToast() {
      this.showToastType = "none";
      this.toastMessage = "";
    },
  },
});
