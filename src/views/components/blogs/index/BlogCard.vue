<template>
  <FadeInOnScroll>
    <div
      class="bg-white flex rounded-lg object-cover overflow-hidden shadow-md"
    >
      <img :src="imageUrls[0]" class="w-36 object-cover object-center" />
      <div class="m-4 flex flex-col w-full">
        <div class="text-[16px] font-bold mt-2 line-clamp-2">
          {{ props.title }}
        </div>
        <div class="text-[10px] text-right text-gray-400">
          {{ props.publishedAt }}
        </div>
        <div
          v-if="props.isLoggedIn"
          class="mt-2 mr-1 flex justify-end items-end"
          @click="updateFavorite"
        >
          <div class="w-6 h-6 hover:cursor-pointer">
            <img v-if="props.isFavorite" src="@/assets/images/favorite.svg" />
            <img v-else src="@/assets/images/unfavorite.svg" />
          </div>
        </div>
        <div class="flex flex-wrap mt-2 overflow-hidden">
          <div v-for="(image, index) in props.imageUrls.slice(1)" :key="index">
            <img
              :src="image"
              class="mb-1 mr-1 rounded-lg w-16 h-16 object-cover object-center"
            />
          </div>
        </div>
        <div class="flex-grow"></div>
        <div class="mt-3 flex justify-end items-end">
          <RouterLink
            :to="`/blogs/${props.id}`"
            class="text-blue-500 text-sm underline text-right hover:cursor-pointer"
          >
            See more ＞
          </RouterLink>
        </div>
      </div>
    </div>
  </FadeInOnScroll>
</template>

<script setup lang="ts">
import { FadeInOnScroll } from "@/views/components/common";
import { defineProps } from "vue";
import { useFavoriteBlogsStore } from "@/stores/favoriteBlogsStore";
import { useBlogsStore } from "@/stores/blogsStore";

const props = defineProps<{
  id: number;
  imageUrls: Array<string>;
  publishedAt: string;
  title: string;
  isFavorite: boolean;
  isLoggedIn: boolean;
}>();

const favoriteBlogsStore = useFavoriteBlogsStore();
const blogsStore = useBlogsStore();

const updateFavorite = () => {
  favoriteBlogsStore.requestPutFavoriteBlog(props.id);
  blogsStore.updateIsFavoriteState(props.id);
};
</script>
