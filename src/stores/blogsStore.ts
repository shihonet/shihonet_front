import { defineStore } from 'pinia';
import axios from 'axios';
import { Blog, ApiResponseBlog } from '@/types/blogsTypes';

export const useBlogsStore = defineStore('blogs', {
  state: () => ({
    blogs: [] as Blog[],
    currentPage: 1,
    limit: 20,
    totalPage: 3,
    isLoading: false,
  }),

  getters: {
    getBlogs: (state): Blog[] => state.blogs,

    getCurrentPage: (state) => state.currentPage,

    getLimit: (state) => state.limit,

    getTotalPage: (state) => state.totalPage,

    getIsLoading: (state) => state.isLoading,
  },

  actions: {
    async requestGetBlogs() {
      window.scrollTo(0, 0);
      this.isLoading = true; // 読み込み開始
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
            blogUrl: blog.blog_url,
            thumbnailImageUrl: blog.thumbnail_image_url,
          };
        });
        this.totalPage = response.data.pagination.pages;
        this.isLoading = false; // 読み込み終了
      } catch (error) {
        console.error("Error fetching data:", error);
        this.isLoading = false; // 読み込み終了
      }
    },

    async setPage(page: number) {
      this.currentPage = page;
      await this.requestGetBlogs();
    },
  },
});
