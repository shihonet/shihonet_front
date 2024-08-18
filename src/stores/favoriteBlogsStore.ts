import { defineStore } from "pinia";
import axios from "axios";
import { useBlogsStore } from "@/stores/blogsStore";
import { useBlogShowStore } from "@/stores/blogShowStore";
import { useOpenStore } from "@/stores/common/openStore";

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
        blogsStore.updateIsFavoriteState(blogId);
        await axios.put(`/api/favorite_blogs/${blogId}`);
        openStore.setToast(
          "success",
          blogsStore.getBlogs.find((blog) => blog.id === blogId)?.isFavorite
            ? "お気に入りに登録しました。"
            : "お気に入りを解除しました。"
        );
      } catch (error) {
        // 失敗時はお気に入り状態を元に戻す
        blogsStore.updateIsFavoriteState(blogId);
        openStore.setToast("error", "お気に入り登録に失敗しました。");
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
        blogShowStore.updateIsFavoriteState();
        await axios.put(`/api/favorite_blogs/${blogId}`);
        openStore.setToast(
          "success",
          blogShowStore.getBlog.isFavorite
            ? "お気に入りに登録しました。"
            : "お気に入りを解除しました。"
        );
      } catch (error) {
        blogShowStore.updateIsFavoriteState(); // 失敗時はお気に入り状態を元に戻す
        openStore.setToast("error", "お気に入り登録に失敗しました。");
      } finally {
        this.isLoading = false;
      }
    },
  },
});
