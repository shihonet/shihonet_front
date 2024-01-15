<template>
  <div class="mx-6">
    <div v-for="(blog, index) in blogs" :key="index" class="mt-6">
      <FadeInOnScroll>
        <div class="relative">
          <img :src="blog.thumbnail_image_url" class="rounded-lg w-full" />
          <a :href="'https://www.hinatazaka46.com' + blog.url_path">
            <div
              class="absolute bottom-0 left-0 right-0 bg-shiho-color bg-opacity-50 text-white px-4 py-2 rounded-lg"
            >
              <div class="text-[12px] font-extrabold">
                {{ blog.published_at }}
              </div>
              <div class="text-[16px] font-extrabold">{{ blog.title }}</div>
            </div>
          </a>
        </div>
      </FadeInOnScroll>
    </div>
    <FadeInOnScroll>
      <div class="mt-20">
        <div class="flex justify-center items-center text-[20px] font-bold">
          <span
            class="w-12 h-12 mx-1.5 my-1.5 flex justify-center rounded-full bg-blue-200 items-center text-white"
            >＜＜</span
          >
          <span
            class="w-12 h-12 mx-1.5 my-1.5 flex justify-center rounded-full bg-blue-200 items-center text-white"
            >＜</span
          >
          <span
            class="w-12 h-12 mx-1.5 my-1.5 flex justify-center items-center rounded-full border-2 border-blue-200 text-blue-200"
            >{{ page }}</span
          >
          <span
            class="w-12 h-12 mx-1.5 my-1.5 flex justify-center rounded-full bg-blue-200 items-center text-white"
            >＞</span
          >
          <span
            class="w-12 h-12 mx-1.5 my-1.5 flex justify-center rounded-full bg-blue-200 items-center text-white"
            >＞＞</span
          >
        </div>
      </div>
    </FadeInOnScroll>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, PropType } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";

export default defineComponent({
  components: { FadeInOnScroll },
  props: {
    member: {
      type: String as PropType<string>,
    },
    page: {
      type: Number,
      default: 1,
      required: true,
    }
  },
  data() {
    return {
      blogs: [] as any[],
      limit: 1,
    };
  },
  created() {
    axios
      .get("/api/blogs", {
        params: {
          member: this.member,
          page: this.page,
          limit: this.limit,
        },
      })
      .then((response) => {
        this.blogs = response.data.blogs;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
