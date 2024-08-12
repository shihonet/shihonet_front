<template>
  <div class="mt-10 mx-6">
    <WaitingForLoading v-if="isLoading" />
    <div v-else>
      <p class="text-2xl font-bold">{{ blog.title }}</p>
      <p class="mt-2 text-[12px] text-gray-400 flex justify-end">
        {{ blog.publishedAt }}
      </p>
      <p class="mt-6 whitespace-break-spaces" v-html="formattedContent"></p>
      <div v-if="blog.imageUrls?.length !== 0">
        <hr class="my-16" />
        <p class="text-[12px] text-gray-400 flex justify-center">
          画像一覧（{{ blog.imageUrls?.length }}枚）
        </p>
        <div
          v-for="(image, index) in blog.imageUrls"
          :key="index"
          class="mt-2 mb-5 mx-4"
        >
          <img :src="image" class="w-full" />
        </div>
      </div>
      <div class="mt-16 flex justify-end">
        <a :href="blog.blogUrl" class="text-blue-500 underline" target="_blank"
          >公式ブログ ＞</a
        >
      </div>
    </div>
    <div class="mt-20 flex items-center justify-center">
      <RouterLink
        to="/blogs"
        class="bg-white font-bold py-3 px-6 rounded-full border border-gray-500 hover:opacity-80"
      >
        一覧へ戻る
      </RouterLink>
    </div>
  </div>
  <FavoriteFloatingActionButton
    :show="isLoggedIn && !isLoading"
    :isFavorite="blog.isFavorite"
    @click="updateFavorite()"
  />
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted, ref, withDefaults } from "vue";
import {
  WaitingForLoading,
  FavoriteFloatingActionButton,
} from "@/views/components/common";
import { useBlogShowStore } from "@/stores/blogShowStore";
import { useFavoriteBlogsStore } from "@/stores/favoriteBlogsStore";
import { useUserSessionsStore } from "@/stores/userSessionsStore";

const props = withDefaults(
  defineProps<{
    id: number;
  }>(),
  {
    id: 0,
  }
);

const blogShowStore = useBlogShowStore();
const favoriteBlogsStore = useFavoriteBlogsStore();
const userSessionsStore = useUserSessionsStore();

const isLoggedIn = ref(false);

onMounted(async () => {
  await userSessionsStore.requestGetUserSessions();
  isLoggedIn.value = userSessionsStore.getIsLoggedIn;
  await blogShowStore.requestFetchBlog(props.id, isLoggedIn.value);
});

// テキスト中のURLをリンクに変換する
const formatContent = (content: string): string => {
  if (!content) return "";
  const urlRegex = /((https?:\/\/[^\s]+))/g;
  return content.replace(
    urlRegex,
    '<a href="$1" target="_blank" class="text-blue-500 underline break-all">$1</a>'
  );
};

const blog = computed(() => blogShowStore.getBlog);
const isLoading = computed(() => blogShowStore.getIsLoading);

const formattedContent = computed(() =>
  formatContent(blogShowStore.getBlog.content)
);

const updateFavorite = async () => {
  await favoriteBlogsStore.requestPutFavoriteBlogInShow(props.id);
};
</script>
