<template>
  <div class="mx-6">
    <div v-if="isLoading">
      <WaitingForLoading />
    </div>
    <div v-else>
      <div class="text-right">
        <p>PAGE：{{ currentPage }} / {{ totalPage }}</p>
      </div>
      <div class="mt-6 flex">
        <!-- 左列 -->
        <div class="w-1/2 mr-1.5">
          <div v-for="(blog, index) in blogs" :key="index">
            <div v-if="index % 2 === 0">
              <BlogCard
                :title="blog.title"
                :blogUrl="blog.blogUrl"
                :publishedAt="blog.publishedAt"
                :thumbnailImageUrl="blog.thumbnailImageUrl"
              />
            </div>
          </div>
        </div>

        <!-- 右列 -->
        <div class="w-1/2 ml-1.5 mt-8">
          <div v-for="(blog, index) in blogs" :key="index">
            <div v-if="index % 2 === 1">
              <BlogCard
                :title="blog.title"
                :blogUrl="blog.blogUrl"
                :publishedAt="blog.publishedAt"
                :thumbnailImageUrl="blog.thumbnailImageUrl"
              />
            </div>
          </div>
        </div>
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
import { useBlogsStore } from "@/stores/blogsStore";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import WaitingForLoading from "@/views/components/common/WaitingForLoading.vue";
import BlogCard from "@/views/components/blogs/index/BlogCard.vue";

export default defineComponent({
  components: { BlogCard, WaitingForLoading, FadeInOnScroll },
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
  },
});
</script>
