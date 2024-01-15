<template>
  <div v-for="(blog, index) in blogs" :key="index" class="mt-6">
    <FadeInOnScroll>
      <div class="relative mx-6">
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
  <div ref="scrollTrigger" class="mt-10 text-center">読み込み中</div>
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
  },
  data() {
    return {
      blogs: [] as any[],
      page: 1,
      limit: 4,
      loading: false,
    };
  },
  methods: {
    async fetchData() {
      try {
        if (this.loading) return;
        this.loading = true;
        const response = await axios.get("/api/blogs", {
          params: {
            member: this.member,
            page: this.page,
            limit: this.limit,
          },
        });
        this.blogs = this.blogs.concat(response.data.blogs);
        this.page++;
        console.log(
          `Fetched ${response.data.blogs.length} blogs. Total: ${this.blogs.length}`
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
    handleScroll() {
      const scrollTrigger = this.$refs.scrollTrigger as HTMLDivElement | null;

      if (scrollTrigger) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const totalHeight = scrollTrigger.scrollHeight;

        if (scrollPosition >= totalHeight - 300) {
          this.fetchData();
        }
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.fetchData();
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
