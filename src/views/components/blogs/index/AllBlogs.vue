<template>
  <div class="mx-6">
    <div v-if="isLoading">
      <WaitingForLoading />
    </div>
    <div v-else>
      <div class="text-right">
        <p>PAGE：{{ currentPage }} / {{ totalPage }}</p>
      </div>
      <div class="mt-6">
        <div v-for="(blog, index) in blogs" :key="index" class="mb-6">
          <BlogCard
            :id="blog.id"
            :title="blog.title"
            :publishedAt="blog.publishedAt"
            :imageUrls="blog.imageUrls"
          />
        </div>
      </div>

      <FadeInOnScroll>
        <div class="mt-20">
          <div class="flex justify-center items-center text-[20px] font-bold">
            <span
              class="w-12 h-12 mx-1.5 my-1.5 flex justify-center rounded-full bg-blue-200 items-center text-white hover:cursor-pointer"
              v-if="currentPage > 2"
              @click="setPage(currentPage > skipPages ? currentPage - skipPages : 1)"
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

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useBlogsStore } from "@/stores/blogsStore";
import { FadeInOnScroll, WaitingForLoading } from "@/views/components/common";
import BlogCard from "@/views/components/blogs/index/BlogCard.vue";

// FIXME: 定数の定義
const skipPages = 20;

const blogsStore = useBlogsStore();

onMounted(() => {
  blogsStore.requestGetBlogs();
});

const blogs = computed(() => blogsStore.getBlogs);

const currentPage = computed(() => blogsStore.getCurrentPage);

const totalPage = computed(() => blogsStore.getTotalPage);

const isLoading = computed(() => blogsStore.getIsLoading);

const setPage = blogsStore.setPage;
</script>
