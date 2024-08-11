import { defineStore } from "pinia";
import axios from "axios";
import { useBlogsStore } from "@/stores/blogsStore";
import { useBlogShowStore } from "@/stores/blogShowStore";
import { useOpenStore } from "@/stores/openStore";

export const useFavoriteBlogsStore = defineStore("favoriteBlogs", {
  state: () => ({
    isLoading: false,
  }),

  actions: {
    // ブログ一覧からお気に入りを更新する場合のリクエスト
    async requestPutFavoriteBlogInList(blogId: number) {
      if (this.isLoading) return;

      this.isLoading = true;
      const blogsStore = useBlogsStore();
      const openStore = useOpenStore();
      try {
        await axios.put(`/api/favorite_blogs/${blogId}`);
        blogsStore.updateIsFavoriteState(blogId);
      } catch (error) {
        openStore.setToast("error", "お気に入り登録に失敗しました。");
        console.error("Error fetching data:", error);
      } finally {
        this.isLoading = false;
      }
    },

    // ブログ詳細からお気に入りを更新する場合のリクエスト
    async requestPutFavoriteBlogInShow(blogId: number) {
      if (this.isLoading) return;

      this.isLoading = true;
      const blogShowStore = useBlogShowStore();
      const openStore = useOpenStore();
      try {
        await axios.put(`/api/favorite_blogs/${blogId}`);
        blogShowStore.updateIsFavoriteState();
      } catch (error) {
        openStore.setToast("error", "お気に入り登録に失敗しました。");
        console.error("Error fetching data:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
