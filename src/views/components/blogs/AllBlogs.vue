<template>
  <div class="mx-6">
    <div v-if="isLoading">
      <WaitingForLoading />
    </div>
    <div v-else>
      <div class="text-right">
        <p>PAGE：{{ currentPage }} / {{ totalPage }}</p>
      </div>
      <div v-for="(blog, index) in blogs" :key="index" class="mt-6">
        <FadeInOnScroll>
          <div class="relative">
            <img :src="blog.thumbnailImageUrl" class="rounded-lg w-full" />
            <a :href="blog.blogUrl">
              <div
                class="absolute bottom-0 left-0 right-0 text-white px-4 py-2 rounded-lg bg-site-blog-color hover:opacity-90"
              >
                <div class="text-[12px] font-bold">
                  {{ blog.publishedAt }}
                </div>
                <div class="text-[16px] font-extrabold">
                  {{ blog.title }}
                </div>
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
              v-if="currentPage > 2"
              @click="setPage(currentPage > skipPages ? currentPage - skipPages : 1 - currentPage)"
              >{{ currentPage > skipPages ? -skipPages : 1 - currentPage }}</span
            >
            <span
              class="w-12 h-12 mx-1.5 my-1.5 flex justify-center rounded-full bg-blue-200 items-center text-white hover:cursor-pointer"
              v-if="currentPage > 1"
              @click="setPage(currentPage - 1)"
              >＜</span
            >
            <span
              class="w-12 h-12 mx-1.5 my-1.5 flex justify-center items-center rounded-full border-2 border-blue-200 text-blue-200"
              >{{ currentPage }}</span
            >
            <span
              class="w-12 h-12 mx-1.5 my-1.5 flex justify-center rounded-full bg-blue-200 items-center text-white hover:cursor-pointer"
              v-if="currentPage < totalPage"
              @click="setPage(currentPage + 1)"
              >＞</span
            >
            <span
              class="w-12 h-12 mx-1.5 my-1.5 flex justify-center rounded-full bg-blue-200 items-center text-white hover:cursor-pointer"
              v-if="currentPage + 1 < totalPage"
              @click="
                setPage(
                  currentPage + skipPages < totalPage ? currentPage + skipPages : totalPage
                )
              "
            >
              +{{ currentPage + skipPages < totalPage ? skipPages : totalPage - currentPage }}
            </span>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useBlogsStore } from '@/stores/blogsStore';
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import WaitingForLoading from "@/views/components/common/WaitingForLoading.vue";

export default defineComponent({
  components: { WaitingForLoading, FadeInOnScroll },
  setup() {
    const blogsStore = useBlogsStore();

    onMounted(() => {
      blogsStore.requestGetBlogs();
    });

    return {
      blogs: computed(() => blogsStore.getBlogs),
      currentPage: computed(() => blogsStore.getCurrentPage),
      totalPage: computed(() => blogsStore.getTotalPage),
      limit: computed(() => blogsStore.getLimit),
      isLoading: computed(() => blogsStore.getIsLoading),
      setPage: blogsStore.setPage,
      skipPages: 20, // 定数
    };
  }
});
</script>
