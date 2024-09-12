import { defineStore } from "pinia";

type ToastType = "success" | "error";

type OpenState = {
  showToastType: ToastType | "none";
  toastMessage: string;
  life: number;
};

export const useOpenStore = defineStore("open", {
  state: (): OpenState => ({
    showToastType: "none",
    toastMessage: "",
    life: 3000,
  }),

  getters: {
    getShowToastType: (state) => state.showToastType,
    getToastMessage: (state) => state.toastMessage,
    getLife: (state) => state.life,
  },

  actions: {
    setToast(type: ToastType, message: string, life?: number) {
      this.showToastType = type;
      this.toastMessage = message;
      this.life = life ?? 3000;
    },

    resetToast() {
      this.showToastType = "none";
      this.toastMessage = "";
    },
  },
});
