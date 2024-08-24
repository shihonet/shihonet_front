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

    // INFO: X でのポストリンク
    getPostLink(): string {
      return `https://twitter.com/intent/tweet?text=%23%E3%81%A8%E3%81%97%E3%81%A1%E3%82%83%E3%82%93%E4%BB%8A%E6%97%A5%E3%82%82%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%20%F0%9F%AB%B6%0A%23%E6%97%A5%E5%90%91%E5%9D%8246%20%23%E5%8A%A0%E8%97%A4%E5%8F%B2%E5%B8%86%20%E3%81%A1%E3%82%83%E3%82%93%20%F0%9F%90%BB%0A%23shihonet%0A${this.blogUrl}`;
    },
  },
});
