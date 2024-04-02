import { defineStore } from 'pinia';
import axios from 'axios';
import { Blog, ApiResponseBlog } from '@/types/blogsTypes';

export const useTopBlogsStore = defineStore('topBlogs', {
  state: () => ({
    blogs: [] as Blog[],
    limit: 3,
    isLoading: false,
  }),

  getters: {
    getBlogs: (state): Blog[] => state.blogs,

    getLimit: (state) => state.limit,

    getIsLoading: (state) => state.isLoading,
  },

  actions: {
    async requestGetTopBlogs() {
      try {
        const response = await axios.get("/api/blogs", {
          params: {
            limit: this.limit,
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
