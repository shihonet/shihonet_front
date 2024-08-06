import { defineStore } from "pinia";
import axios from "axios";
import { useBlogsStore } from "@/stores/blogsStore";
import { useBlogShowStore } from "@/stores/blogShowStore";

export const useFavoriteBlogsStore = defineStore("favoriteBlogs", {
  actions: {
    // ブログ一覧からお気に入りを更新する場合のリクエスト
    async requestPutFavoriteBlogInList(blogId: number) {
      const blogsStore = useBlogsStore();
      try {
        await axios.put(`/api/favorite_blogs/${blogId}`);
        blogsStore.updateIsFavoriteState(blogId);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    // ブログ詳細からお気に入りを更新する場合のリクエスト
    async requestPutFavoriteBlogInShow(blogId: number) {
      const blogShowStore = useBlogShowStore();
      try {
        await axios.put(`/api/favorite_blogs/${blogId}`);
        blogShowStore.updateIsFavoriteState();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
