import { defineStore } from "pinia";
import axios from "axios";
import { useBlogsStore } from "@/stores/blogsStore";

export const useFavoriteBlogsStore = defineStore("favoriteBlogs", {
  actions: {
    async requestPutFavoriteBlog(blogId: number) {
      const blogsStore = useBlogsStore();
      try {
        await axios.put(`/api/favorite_blogs/${blogId}`);
        blogsStore.updateIsFavoriteState(blogId);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
