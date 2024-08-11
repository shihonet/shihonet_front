import { defineStore } from "pinia";
import axios from "axios";
import { Blog, ApiResponseBlog } from "@/types/blogsTypes";
import { useUserSessionsStore } from "@/stores/userSessionsStore";
import { useOpenStore } from "@/stores/openStore";

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
      this.currentPage = page;
      this.isLoading = true;
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
        console.error("Error fetching data:", error);
      } finally {
        this.isLoading = false;
      }
    },

    updateIsFavoriteState(blogId: number) {
      const blog = this.blogs.find((blog) => blog.id === blogId);
      const openStore = useOpenStore();
      if (blog) {
        blog.isFavorite = !blog.isFavorite;
        openStore.setToast(
          "success",
          blog.isFavorite
            ? "お気に入りに登録しました。"
            : "お気に入りを解除しました。"
        );
      }
    },

    setCurrentViewType(viewType: "all" | "favorite") {
      this.currentViewType = viewType;
    },
  },
});
