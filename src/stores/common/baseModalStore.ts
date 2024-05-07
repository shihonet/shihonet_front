import { defineStore } from "pinia";

export const useBaseModalStore = defineStore("baseModal", {
  state: () => ({
    isModalOpen: true,
  }),

  getters: {
    getIsModalOpen: (state): Boolean => state.isModalOpen,
  },

  actions: {
    closeModal() {
      console.log(this.isModalOpen)
      this.isModalOpen = false;
    }
  },
});
