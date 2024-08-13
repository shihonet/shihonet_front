<template>
  <div class="mt-20">
    <div class="flex justify-center items-center text-[20px] font-bold">
      <span
        class="w-12 h-12 mx-1.5 my-1.5 flex justify-center rounded-full bg-blue-200 items-center text-white hover:cursor-pointer"
        v-if="currentPage > 2"
        @click="requestGetBlogs(currentPage > skipPages ? currentPage - skipPages : 1)"
        >{{ currentPage > skipPages ? -skipPages : 1 - currentPage }}</span
      >
      <span
        class="w-12 h-12 mx-1.5 my-1.5 flex justify-center rounded-full bg-blue-200 items-center text-white hover:cursor-pointer"
        v-if="currentPage > 1"
        @click="requestGetBlogs(currentPage - 1)"
        >＜</span
      >
      <span
        class="w-12 h-12 mx-1.5 my-1.5 flex justify-center items-center rounded-full border-2 border-blue-200 text-blue-200"
        >{{ currentPage }}</span
      >
      <span
        class="w-12 h-12 mx-1.5 my-1.5 flex justify-center rounded-full bg-blue-200 items-center text-white hover:cursor-pointer"
        v-if="currentPage < totalPage"
        @click="requestGetBlogs(currentPage + 1)"
        >＞</span
      >
      <span
        class="w-12 h-12 mx-1.5 my-1.5 flex justify-center rounded-full bg-blue-200 items-center text-white hover:cursor-pointer"
        v-if="currentPage + 1 < totalPage"
        @click="
          requestGetBlogs(
            currentPage + skipPages < totalPage
              ? currentPage + skipPages
              : totalPage
          )
        "
      >
        +{{
          currentPage + skipPages < totalPage
            ? skipPages
            : totalPage - currentPage
        }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useBlogsStore } from "@/stores/blogsStore";

const blogsStore = useBlogsStore();

// FIXME: 定数の定義
const skipPages = 20;

const currentPage = computed(() => blogsStore.getCurrentPage);
const totalPage = computed(() => blogsStore.getTotalPage);
const currentViewType = computed(() => blogsStore.getCurrentViewType);

const requestGetBlogs = (page: number) => {
  blogsStore.requestGetBlogs(page, currentViewType.value === "favorite");
}
</script>
