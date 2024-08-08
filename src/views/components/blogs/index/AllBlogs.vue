<template>
  <div class="mx-6">
    <div class="flex justify-between w-full mb-6">
      <Button
        label="すべて"
        :severity="currentViewType === 'all' ? 'info' : 'secondary'"
        class="flex-grow w-1/2"
        @click="changeViewTypeToAll()"
      />
      <div class="w-4"></div>
      <Button
        label="お気に入り"
        :severity="currentViewType === 'favorite' ? 'info' : 'secondary'"
        class="flex-grow w-1/2"
        @click="isLoggedIn ? changeViewTypeToFavorite() : openSignupModal()"
      />
    </div>

    <div v-if="isLoading">
      <WaitingForLoading />
    </div>

    <div v-else-if="blogs.length !== 0">
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
            :isFavorite="blog.isFavorite"
          />
        </div>
      </div>

      <FadeInOnScroll>
        <PaginationButton />
      </FadeInOnScroll>
    </div>

    <FadeInOnScroll v-else class="my-24 text-center text-site-color text-sm">
      <p>お気に入りのブログはありません</p>
    </FadeInOnScroll>
  </div>
  <SignupModal
    :isOpen="isSignupModalOpen"
    @update:isOpen="handleSignupModalUpdate"
  />
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { FadeInOnScroll, WaitingForLoading } from "@/views/components/common";
import Button from "primevue/button";
import { useBlogsStore } from "@/stores/blogsStore";
import BlogCard from "@/views/components/blogs/index/BlogCard.vue";
import SignupModal from "@/views/components/blogs/index/SignupModal.vue";
import PaginationButton from "@/views/components/blogs/index/PaginationButton.vue";
import { useUserSessionsStore } from "@/stores/userSessionsStore";

const blogsStore = useBlogsStore();
const userSessionsStore = useUserSessionsStore();

onMounted(() => {
  blogsStore.requestGetBlogs(currentPage.value);
});

const currentViewType = computed(() => blogsStore.getCurrentViewType);

const blogs = computed(() => blogsStore.getBlogs);
const currentPage = computed(() => blogsStore.getCurrentPage);
const totalPage = computed(() => blogsStore.getTotalPage);
const isLoading = computed(() => blogsStore.getIsLoading);
const isLoggedIn = computed(() =>userSessionsStore.getIsLoggedIn);

const changeViewTypeToAll = () => {
  if (currentViewType.value === "all") return;

  blogsStore.setCurrentViewType("all");
  blogsStore.requestGetBlogs(1);
};

const changeViewTypeToFavorite = () => {
  if (currentViewType.value === "favorite") return;

  blogsStore.setCurrentViewType("favorite");
  blogsStore.requestGetBlogs(1, true);
};

const isSignupModalOpen = ref(false);
const openSignupModal = () => {
  isSignupModalOpen.value = true;
};

const handleSignupModalUpdate = (newVal: boolean) => {
  isSignupModalOpen.value = newVal;
};
</script>
