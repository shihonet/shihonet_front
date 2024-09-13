import { defineStore } from "pinia";
import axios from "axios";
import {
  GraduationMessage,
  ApiRequestGraduationMessage,
} from "@/types/graduationMessagesTypes";
import { useOpenStore } from "@/stores/common/openStore";
import router from "@/router";

export const useGraduationMessagesStore = defineStore("graduationMessages", {
  state: () => ({
    xAccountName: "",
    contact: "",
    paymentMethod: "",
    selectedAmount: 0,
    message: "",
    note: "",
    excludeFromSiteMessage: false,
    isLoading: false,
  }),

  getters: {
    getIsLoading: (state) => state.isLoading,
  },

  actions: {
    async requestPost(graduationMessage: GraduationMessage) {
      this.isLoading = true;
      const openStore = useOpenStore();
      try {
        await axios.post<ApiRequestGraduationMessage>(
          "/api/graduation_messages",
          {
            x_account_name: graduationMessage.xAccountName,
            contact: graduationMessage.contact,
            payment_method: graduationMessage.paymentMethod,
            selected_amount: graduationMessage.selectedAmount,
            message: graduationMessage.message,
            note: graduationMessage.note,
            exclude_from_site_message: graduationMessage.excludeFromSiteMessage,
          }
        );
        // TODO: 遷移先パス差し替え
        await router.push("/graduation/payment/ORDypUSr");
        openStore.setToast(
          "success",
          "ご参加いただきありがとうございます！\nお支払い方法をご確認ください！"
        );
      } catch (error: any) {
        openStore.setToast("error", "エラーが発生しました。");
      } finally {
        this.isLoading = false;
      }
    },
  },
});
