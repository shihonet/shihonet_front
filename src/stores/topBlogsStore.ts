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
      try {
        const response = await axios.get("/api/blogs", {
          params: {
            limit: 3, // 表示件数
          },
        });
        this.blogs = response.data.blogs.map((blog: ApiResponseBlog): Blog => {
          return {
            title: blog.title,
            memberName: blog.member_name,
            publishedAt: blog.published_at,
            blogUrl: blog.blog_url,
            thumbnailImageUrl: blog.thumbnail_image_url,
          };
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
