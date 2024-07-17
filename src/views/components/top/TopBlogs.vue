<template>
  <div class="mx-6">
    <FadeInOnScroll>
      <div class="mt-40 mb-10 mx-10">
        <TitlePart title="Blogs" />
      </div>
    </FadeInOnScroll>

    <div v-if="isLoading">
      <WaitingForLoading />
    </div>

    <div v-else class="mt-2 mx-4">
      <div v-for="(blog, index) in blogs" :key="index" class="mt-6">
        <FadeInOnScroll>
          <div class="relative">
            <img :src="blog.thumbnailImageUrl" class="rounded-lg w-full" />
            <RouterLink :to="`/blogs/${blog.id}`">
              <div
                class="absolute bottom-0 left-0 right-0 text-white px-4 py-2 rounded-lg bg-site-blog-color hover:opacity-90"
              >
                <div class="text-[12px] font-bold text-white opacity-100">
                  {{ blog.publishedAt }}
                </div>
                <div class="text-[16px] font-extrabold text-white opacity-100">
                  {{ blog.title }}
                </div>
              </div>
            </RouterLink>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
    <FadeInOnScroll>
      <div class="mt-10 flex justify-end">
        <RouterLink to="/blogs">
          <MoreView text="See more blogs…" />
        </RouterLink>
      </div>
    </FadeInOnScroll>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useTopBlogsStore } from '@/stores/topBlogsStore';
import { TitlePart, FadeInOnScroll, WaitingForLoading, MoreView } from "@/views/components/common";

const topBlogsStore = useTopBlogsStore();

const blogs= computed(() => topBlogsStore.getBlogs);
const isLoading = computed(() => topBlogsStore.getIsLoading);

onMounted(() => {
  topBlogsStore.requestGetTopBlogs();
});
</script>
