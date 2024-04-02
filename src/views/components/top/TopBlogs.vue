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
          <img :src="blog.thumbnailImageUrl" class="rounded-lg w-full" />
          <a :href="blog.blogUrl">
            <div
              class="absolute bottom-0 left-0 right-0 text-white px-4 py-2 rounded-lg bg-site-blog-color"
            >
              <div class="text-[12px] font-bold text-white opacity-100">
                {{ blog.publishedAt }}
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
import { defineComponent, onMounted, computed } from "vue";
import { useTopBlogsStore } from '@/stores/topBlogsStore';
import TitlePart from "@/views/components/common/TitlePart.vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import WaitingForLoading from "@/views/components/common/WaitingForLoading.vue";
import MoreView from "@/views/components/common/MoreView.vue"

export default defineComponent({
  components: { TitlePart, WaitingForLoading, FadeInOnScroll, MoreView },
  setup() {
    const topBlogsStore = useTopBlogsStore();

    onMounted(() => {
      topBlogsStore.requestGetTopBlogs();
    });

    return {
      title: 'Blogs',
      borderClass: "border-top-color",
      textColorClass: "top-color",
      blogs: computed(() => topBlogsStore.getBlogs),
      limit: computed(() => topBlogsStore.getLimit),
      isLoading: computed(() => topBlogsStore.getIsLoading),
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
