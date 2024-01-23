<template>
  <div class="mx-6">
    <div v-if="!isLoading">
      <div v-for="(blog, index) in blogs" :key="index" class="mt-6">
        <FadeInOnScroll>
          <div class="relative">
            <img :src="blog.thumbnail_image_url" class="rounded-lg w-full" />
            <a :href="'https://www.hinatazaka46.com' + blog.url_path">
              <div
                class="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white px-4 py-2 rounded-lg bg-site-blog-color"
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
              class="w-12 h-12 mx-1.5 my-1.5 flex justify-center rounded-full bg-blue-200 items-center text-white hover:cursor-pointer"
              v-if="page > 2"
              @click="setPage(page > skipPages ? page - skipPages : 1 - page)"
              >{{ page > skipPages ? -skipPages : 1 - page }}</span
            >
            <span
              class="w-12 h-12 mx-1.5 my-1.5 flex justify-center rounded-full bg-blue-200 items-center text-white hover:cursor-pointer"
              v-if="page > 1"
              @click="setPage(page - 1)"
              >-1</span
            >
            <span
              class="w-12 h-12 mx-1.5 my-1.5 flex justify-center items-center rounded-full border-2 border-blue-200 text-blue-200"
              >{{ page }}</span
            >
            <span
              class="w-12 h-12 mx-1.5 my-1.5 flex justify-center rounded-full bg-blue-200 items-center text-white hover:cursor-pointer"
              v-if="page < totalPage"
              @click="setPage(page + 1)"
              >+1</span
            >
            <span
              class="w-12 h-12 mx-1.5 my-1.5 flex justify-center rounded-full bg-blue-200 items-center text-white hover:cursor-pointer"
              v-if="page + 1 < totalPage"
              @click="
                setPage(
                  page + skipPages < totalPage ? page + skipPages : totalPage
                )
              "
            >
              +{{ page + skipPages < totalPage ? skipPages : totalPage - page }}
            </span>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";

export default defineComponent({
  components: { FadeInOnScroll },
  data() {
    return {
      blogs: [] as any[],
      page: 1,
      limit: 20,
      totalPage: 1,
      isLoading: true,
      skipPages: 20,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    page() {
      this.setPage(this.page);
      this.fetchData();
    },
  },
  methods: {
    fetchData() {
      this.isLoading = true;
      axios
        .get("/api/blogs", {
          params: {
            page: this.page,
            limit: this.limit,
          },
        })
        .then((response) => {
          this.blogs = response.data.blogs;
          this.totalPage = response.data.pagination.pages;
          window.scrollTo(0, 0);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    setPage(page: number) {
      this.page = page;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
