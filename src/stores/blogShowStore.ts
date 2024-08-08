import { defineStore } from "pinia";
import axios from "axios";
import { Blog, ApiResponseBlog } from "@/types/blogsTypes";
import router from "@/router";

export const useBlogShowStore = defineStore("blogShow", {
  state: () => ({
    blog: {
      id: 0,
      title: '',
      publishedAt: '',
      content: '',
      imageUrls: [],
      blogUrl: '',
      isFavorite: false,
    } as Blog,
    isLoading: false,
  }),

  getters: {
    getBlog: (state): Blog => state.blog,

    getIsLoading: (state): boolean => state.isLoading,
  },

  actions: {
    async requestFetchBlog(id: number) {
      window.scrollTo(0, 0);
      this.isLoading = true;
      try {
        const response = await axios.get<ApiResponseBlog>(`/api/blogs/${id}`);
        this.blog = {
          id: response.data.id,
          title: response.data.title,
          publishedAt: response.data.published_at,
          blogUrl: response.data.blog_url,
          imageUrls: response.data.image_urls,
          content: response.data.content,
          isFavorite: response.data.is_favorite,
        };
      } catch (error) {
        router.push('/blogs');
        console.error("Error fetching data:", error);
      } finally {
        this.isLoading = false;
      }
    },

    updateIsFavoriteState() {
      this.blog.isFavorite = !this.blog.isFavorite;
    },
  },
});
