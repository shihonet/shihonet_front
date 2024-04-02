import { defineStore } from 'pinia';
import axios from 'axios';
import { Blog, ApiResponseBlog } from '@/types/blogsTypes';

export const useBlogsStore = defineStore('blogs', {
  state: () => ({
    blogs: [] as Blog[],
    currentPage: 1,
    limit: 20,
    totalPage: 3,
  }),

  getters: {
    getBlogs: (state): Blog[] => state.blogs,

    getCurrentPage: (state) => state.currentPage,

    getLimit: (state) => state.limit,

    getTotalPage: (state) => state.totalPage,
  },

  actions: {
    async requestGetBlogs() {
      try {
        const response = await axios.get("/api/blogs", {
          params: {
            page: this.currentPage,
            limit: this.limit,
          },
        });
        this.blogs = response.data.blogs.map((blog: ApiResponseBlog): Blog => {
          return {
            title: blog.title,
            memberName: blog.member_name,
            publishedAt: blog.published_at,
            thumbnailImageUrl: blog.thumbnail_image_url,
            urlPath: blog.url_path,
          };
        });
        console.log(this.blogs)
        this.totalPage = response.data.pagination.pages;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    async setPage(page: number) {
      this.currentPage = page;
      await this.requestGetBlogs();
    },
  },
});
