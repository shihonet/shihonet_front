import { defineStore } from "pinia";
import axios from "axios";
import { RandomBlog, ApiResponseRandomBlog } from "@/types/blogsTypes";
import router from "@/router";

export const useRandomBlogsStore = defineStore("randomBlogs", {
  state: () => ({
    id: 0,
    title: "",
    publishedAt: "",
    blogUrl: "",
    imageUrl: "",
    isLoading: false,
    hasClickedButton: false,
  }),
  persist: [
    {
      key: "randomBlogs",
      paths: ["id", "title", "publishedAt", "blogUrl", "imageUrl", "hasClickedButton"],
      storage: window.sessionStorage,
    },
  ],

  getters: {
    getId: (state) => state.id,
    getTitle: (state) => state.title,
    getPublishedUrl: (state) => state.publishedAt,
    getImageUrl: (state) => state.imageUrl,

    getIsLoading: (state) => state.isLoading,
    getHasClickedButton: (state) => state.hasClickedButton,
  },

  actions: {
    setHasClickedButton(hasClickedButton: boolean) {
      this.hasClickedButton = hasClickedButton;
    },

    async requestGetRandomBlogs() {
      if (this.hasClickedButton) return;

      this.isLoading = true;
      try {
        const response = await axios.get<ApiResponseRandomBlog>(
          "/api/blog_random"
        );
        const data = response.data;
        this.$patch({
          id: data.id,
          title: data.title,
          publishedAt: data.published_at,
          blogUrl: data.blog_url,
          imageUrl: data.image_url,
        });
      } catch (error) {
        // error handling
      } finally {
        this.isLoading = false;
        this.$patch({ hasClickedButton: true }); // sessionStorage を更新する場合は $patch を使う
      }
    },
  },
});
