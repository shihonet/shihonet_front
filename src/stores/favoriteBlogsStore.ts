import { defineStore } from "pinia";
import axios from "axios";

export const useFavoriteBlogsStore = defineStore("favoriteBlogs", {
  actions: {
    async requestPutFavoriteBlog(blogId: number) {
      try {
        await axios.put(`/api/favorite_blogs/${blogId}`);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
