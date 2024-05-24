import { defineStore } from "pinia";

export const useBaseModalStore = defineStore("baseModal", {
  state: () => ({
    isModalOpen: false,
  }),

  getters: {
    getIsModalOpen: (state): Boolean => state.isModalOpen,
  },

  actions: {
    setIsModalOpen(isModalOpen: boolean) {
      this.isModalOpen = isModalOpen;
    },
  },
});
