<template>
  <div v-if="isLoading">
    <WaitingForLoading />
  </div>
  <div v-else>
    <img :src="blog.imageUrl" class="rounded-lg w-full" />
    <p>{{ blog.title }}</p>
    <p>{{ blog.publishedAt }}</p>
    <p>{{ blog.url }}</p>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import WaitingForLoading from "@/views/components/common/WaitingForLoading.vue";

interface BlogImageRandom {
  title: string;
  publishedAt: string;
  memberName: string;
  url: string;
  imageUrl: string;
}

export default defineComponent({
  components: { WaitingForLoading },
  data() {
    return {
      isLoading: false,
      blog: {
        title: "",
        publishedAt: "",
        memberName: "",
        url: "",
        imageUrl: "",
      } as BlogImageRandom,
    };
  },
  created() {
    this.requestGetBlogImage();
  },
  methods: {
    requestGetBlogImage() {
      this.isLoading = true;
      axios
        .get("/api/blog_random")
        .then((response) => {
          const data = response.data;
          this.blog = {
            title: data.title,
            publishedAt: data.published_at,
            memberName: data.member_name,
            url: data.url,
            imageUrl: data.image_url,
          };
          this.isLoading = false;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>