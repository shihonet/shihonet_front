import { defineStore } from 'pinia';
import axios from 'axios';
import { Blog, ApiResponseBlog } from '@/types/blogsTypes';

export const useTopBlogsStore = defineStore('topBlogs', {
  state: () => ({
    blogs: [] as Blog[],
    isLoading: false,
  }),

  getters: {
    getBlogs: (state): Blog[] => state.blogs,

    getIsLoading: (state) => state.isLoading,
  },

  actions: {
    async requestGetTopBlogs() {
      this.isLoading = true;
      try {
        const response = await axios.get("/api/blogs", {
          params: {
            limit: 3, // 表示件数
          },
        });
        this.blogs = response.data.blogs.map((blog: ApiResponseBlog): Blog => {
          return {
            id: blog.id,
            title: blog.title,
            publishedAt: blog.published_at,
            blogUrl: blog.blog_url,
            content: "",
            imageUrls: blog.image_urls,
            isFavorite: blog.is_favorite,
          };
        });
      } catch (error) {
        // error handling
      } finally {
        this.isLoading = false;
      }
    },
  },
});
