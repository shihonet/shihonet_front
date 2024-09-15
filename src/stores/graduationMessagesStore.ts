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
    xAccountId: "",
    email: "",
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
        // await axios.post<ApiRequestGraduationMessage>(
        //   "/api/graduation_messages",
        //   {
        //     x_account_id: graduationMessage.xAccountId,
        //     email: graduationMessage.email,
        //     payment_method: graduationMessage.paymentMethod,
        //     selected_amount: graduationMessage.selectedAmount,
        //     message: graduationMessage.message,
        //     note: graduationMessage.note,
        //     exclude_from_site_message: graduationMessage.excludeFromSiteMessage,
        //   }
        // );
        // TODO: 遷移先パス差し替え
        await router.push("/graduation/messages/form/complete/ORDypUSr");
        openStore.setToast(
          "success",
          "メールを送信しました。内容をご確認の上、一週間以内にお支払いを完了させてください。",
          5000
        );
      } catch (error: any) {
        openStore.setToast("error", "エラーが発生しました。");
      } finally {
        this.isLoading = false;
      }
    },
  },
});
