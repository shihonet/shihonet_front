import { defineStore } from "pinia";
import axios from "axios";
import { Blog, ApiResponseBlog } from "@/types/blogsTypes";

type State = {
  blogs: Blog[];
  currentPage: number;
  totalPage: number;
  isLoading: boolean;
  currentViewType: "all" | "favorite";
}

export const useBlogsStore = defineStore("blogs", {
  state: (): State => ({
    blogs: [] as Blog[],
    currentPage: 1,
    totalPage: 3,
    isLoading: false,
    currentViewType: "all",
  }),

  getters: {
    getBlogs: (state): Blog[] => state.blogs,

    getCurrentPage: (state): number => state.currentPage,

    getTotalPage: (state): number => state.totalPage,

    getIsLoading: (state): boolean => state.isLoading,

    getCurrentViewType: (state): "all" | "favorite" => state.currentViewType,
  },

  actions: {
    async requestGetBlogs(page: number, isFavoriteOnly: boolean = false) {
      window.scrollTo(0, 0);
      this.currentPage = page;
      this.isLoading = true;
      try {
        const response = await axios.get("/api/blogs", {
          params: {
            page: this.currentPage,
            limit: 15,
            is_favorite_only: isFavoriteOnly,
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
        this.totalPage = response.data.pagination.pages;
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.isLoading = false;
      }
    },

    updateIsFavoriteState(blogId: number) {
      const blog = this.blogs.find((blog) => blog.id === blogId);
      if (blog) {
        blog.isFavorite = !blog.isFavorite;
      }
    },

    setCurrentViewType(viewType: "all" | "favorite") {
      this.currentViewType = viewType;
    }
  },
});
