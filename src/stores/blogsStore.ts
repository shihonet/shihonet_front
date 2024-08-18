import { defineStore } from "pinia";
import axios from "axios";
import { Blog, ApiResponseBlog } from "@/types/blogsTypes";
import { useUserSessionsStore } from "@/stores/userSessionsStore";

type State = {
  blogs: Blog[];
  currentPage: number;
  totalPage: number;
  isLoading: boolean;
  currentViewType: "all" | "favorite";
};

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
      this.isLoading = true;
      this.currentPage = page;
      const userSessionsStore = useUserSessionsStore();
      try {
        await userSessionsStore.requestGetUserSessions();
        const isLoggedIn = userSessionsStore.getIsLoggedIn;

        let url = "/api/blogs"; // isFavoriteなしのブログ一覧
        if (isFavoriteOnly) {
          url = "/api/favorite_blogs"; // isFavoriteありのお気に入りブログ一覧
        } else if (isLoggedIn) {
          url = "/api/blogs_with_login"; // isFavoriteありのブログ一覧
        }

        const response = await axios.get(url, {
          params: {
            page: this.currentPage,
            limit: 15,
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
        // error handling
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
    },
  },
});
