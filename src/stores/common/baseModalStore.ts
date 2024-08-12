import { defineStore } from "pinia";

export const useBaseModalStore = defineStore("baseModal", {
  state: () => ({
    isModalOpen: false,
    hasVisited: false,
  }),
  persist: [
    {
      key: 'hasVisited',
      paths: ['hasVisited'],
      storage: window.sessionStorage,
    },
  ],

  getters: {
    getIsModalOpen: (state): Boolean => state.isModalOpen,
    getHasVisited: (state): Boolean => state.hasVisited,
  },

  actions: {
    setIsModalOpen(isModalOpen: boolean) {
      this.isModalOpen = isModalOpen;
    },

    setHasVisited(hasVisited: boolean) {
      this.$patch({ hasVisited: hasVisited }); // sessionStorage を更新する場合は $patch を使う
    },
  },
});
