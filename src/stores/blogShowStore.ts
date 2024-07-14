import { defineStore } from "pinia";
import axios from "axios";
import { Blog, ApiResponseBlog } from "@/types/blogsTypes";

export const useBlogShowStore = defineStore("blogShow", {
  state: () => ({
    blog: {} as Blog,
    isLoading: false,
  }),

  getters: {
    getBlog: (state): Blog => state.blog,

    getIsLoading: (state): boolean => state.isLoading,
  },

  actions: {
    async requestFetchBlog(id: number) {
      window.scrollTo(0, 0);
      this.isLoading = true; // 読み込み開始
      try {
        const response = await axios.get(`/api/blogs/${id}`, {
          params: { id: id },
        });
        this.blog = {
          id: response.data.id,
          title: response.data.title,
          memberName: response.data.member_name,
          publishedAt: response.data.published_at,
          blogUrl: response.data.blog_url,
          imageUrls: response.data.image_urls,
          content: response.data.content,
          thumbnailImageUrl: "",
        };
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.isLoading = false; // 読み込み終了
      }
    },
  },
});
