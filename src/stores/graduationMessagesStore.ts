import { defineStore } from "pinia";
import axios from "axios";
import {
  GraduationMessage,
  ApiRequestGraduationMessage,
  ApiResponseGraduationMessage,
  PaymentMethod,
} from "@/types/graduationMessagesTypes";
import { useOpenStore } from "@/stores/common/openStore";
import router from "@/router";

interface GraduationMessageState extends GraduationMessage {
  isLoading: boolean;
}

export const useGraduationMessagesStore = defineStore("graduationMessages", {
  state: (): GraduationMessageState => ({
    participantId: "",
    xAccountId: null,
    email: "",
    paymentMethod: "" as PaymentMethod,
    selectedAmount: 0,
    paymentDeadline: "",
    message: null,
    note: null,
    excludeFromSiteMessage: false,
    isLoading: false,
  }),
  persist: [
    {
      key: 'graduationMessages',
      paths: ['participantId', 'email', 'paymentMethod', 'selectedAmount', 'paymentDeadline'],
      storage: window.sessionStorage,
    },
  ],

  getters: {
    getIsLoading: (state) => state.isLoading,
    getParticipantId: (state) => state.participantId,
    getEmail: (state) => state.email,
    getPaymentMethod: (state) => state.paymentMethod,
    getSelectedAmount: (state) => state.selectedAmount,
    getPaymentDeadline: (state) => state.paymentDeadline,
  },

  actions: {
    async requestPost(graduationMessage: GraduationMessage) {
      this.isLoading = true;
      const openStore = useOpenStore();
      try {
        // Request to the server
        const response = await axios.post<ApiResponseGraduationMessage>(
          "/api/graduation_messages",
          {
            x_account_id: graduationMessage.xAccountId,
            email: graduationMessage.email,
            payment_method: graduationMessage.paymentMethod,
            selected_amount: graduationMessage.selectedAmount,
            message: graduationMessage.message,
            note: graduationMessage.note,
            exclude_from_site_message: graduationMessage.excludeFromSiteMessage,
          } as ApiRequestGraduationMessage
        );
        console.log(response);
        // Get the response data
        const data = response.data;
        this.participantId = data.participant_id;
        this.email = data.email;
        this.paymentMethod = data.payment_method;
        this.selectedAmount = data.selected_amount;
        this.paymentDeadline = data.payment_deadline;
        // Redirect to the completion page
        await router.push("/graduation/messages/form/complete");
        openStore.setToast(
          "success",
          "フォームを正常に送信しました！"
        );
      } catch (error: any) {
        openStore.setToast("error", "エラーが発生しました。運営者へお問い合わせください。");
      } finally {
        this.isLoading = false;
      }
    },
  },
});
