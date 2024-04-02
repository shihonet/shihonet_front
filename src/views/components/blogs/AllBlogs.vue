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
            <a :href="'https://www.hinatazaka46.com' + blog.urlPath">
              <div
                class="absolute bottom-0 left-0 right-0 text-white px-4 py-2 rounded-lg bg-site-blog-color"
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
import { defineComponent, onMounted, ref, computed } from "vue";
import { useBlogsStore } from '@/stores/blogsStore';
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import WaitingForLoading from "@/views/components/common/WaitingForLoading.vue";

export default defineComponent({
  components: { WaitingForLoading, FadeInOnScroll },
  setup() {
    const isLoading = ref(true);
    const skipPages = 20; // 定数
    const blogsStore = useBlogsStore();
    const blogs = computed(() => blogsStore.getBlogs);
    const currentPage = computed(() => blogsStore.getCurrentPage);
    const limit = computed(() => blogsStore.getLimit);
    const totalPage = computed(() => blogsStore.getTotalPage);

    const requestGetBlogs = async () => {
      await blogsStore.requestGetBlogs().finally(() => {
        isLoading.value = false;
      });
    };

    // NOTE: ページネーションをクリックすると呼び出される
    const setPage = async (newPage: number) => {
      isLoading.value = true;
      window.scrollTo(0, 0);
      await blogsStore.setPage(newPage);
      isLoading.value = false;
    };

    onMounted(() => {
      requestGetBlogs();
    });

    return {
      blogs,
      currentPage,
      totalPage,
      limit,
      isLoading,
      skipPages,
      setPage,
      requestGetBlogs,
    };
  }
});
</script>
