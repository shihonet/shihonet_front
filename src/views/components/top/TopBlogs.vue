<template>
  <FadeInOnScroll>
    <div class="mt-40 mb-10 mx-10">
      <TitlePart
        :title="title"
        :border-class="borderClass"
        :textColorClass="textColorClass"
      />
    </div>
  </FadeInOnScroll>

  <div v-if="isLoading">
    <WaitingForLoading />
  </div>

  <div v-else class="mx-6 mt-2">
    <div v-for="(blog, index) in blogs" :key="index" class="mt-6">
      <FadeInOnScroll>
        <div class="relative">
          <img :src="blog.thumbnail_image_url" class="rounded-lg w-full" />
          <a :href="'https://www.hinatazaka46.com' + blog.url_path">
            <div
              class="absolute bottom-0 left-0 right-0 text-white px-4 py-2 rounded-lg bg-site-blog-color"
            >
              <div class="text-[12px] font-bold text-white opacity-100">
                {{ blog.published_at }}
              </div>
              <div class="text-[16px] font-extrabold text-white opacity-100">
                {{ blog.title }}
              </div>
            </div>
          </a>
        </div>
      </FadeInOnScroll>
    </div>
  </div>
  <FadeInOnScroll>
    <div class="mt-10 flex flex-col items-center justify-center">
      <router-link to="/blogs">
        <MoreView :borderClass="'border-site-color'" />
      </router-link>
    </div>
  </FadeInOnScroll>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import TitlePart from "@/views/components/common/TitlePart.vue";
import MoreView from "@/views/components/common/MoreView.vue";
import WaitingForLoading from "@/views/components/common/WaitingForLoading.vue";

export default defineComponent({
  components: { WaitingForLoading, MoreView, TitlePart, FadeInOnScroll },
  data() {
    return {
      isLoading: false,
      blogs: [] as any[],
      title: "Blogs",
      borderClass: "border-site--color",
      textColorClass: "top-color",
    };
  },
  created() {
    this.requestGetBlogs();
  },
  methods: {
    requestGetBlogs() {
      this.isLoading = true;
      axios
        .get("/api/blogs", {
          params: {
            limit: 3,
          },
        })
        .then((response) => {
          this.blogs = response.data.blogs;
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
