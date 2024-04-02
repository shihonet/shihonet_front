import { defineStore } from "pinia";
import axios from "axios";
import { RandomBlog, ApiResponseRandomBlog } from "@/types/blogsTypes";

export const useRandomBlogsStore = defineStore("randomBlogs", {
  state: () => ({
    blog: null as RandomBlog | null,
    isLoading: false,
    isClickedButton: false,
  }),

  getters: {
    getBlog: (state): RandomBlog | null => state.blog,

    getIsLoading: (state) => state.isLoading,

    getIsClickedButton: (state) => state.isClickedButton,
  },

  actions: {
    async requestGetRandomBlogs() {
      this.isLoading = true;
      try {
        const response = await axios.get<ApiResponseRandomBlog>("/api/blog_random");
        const data = response.data;
        this.blog = {
          title: data.title,
          memberName: data.member_name,
          publishedAt: data.published_at,
          blogUrl: data.blog_url,
          imageUrl: data.image_url,
        };
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.isLoading = false;
        this.isClickedButton = true;
      }
    },
  },
});
