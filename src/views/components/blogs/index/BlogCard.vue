<template>
  <FadeInOnScroll>
    <div
      class="bg-white flex rounded-lg object-cover overflow-hidden shadow-md"
    >
      <img :src="imageUrls[0]" class="w-36 object-cover object-center" />
      <div class="m-4 flex flex-col w-full">
        <div class="flex justify-between">
          <div class="flex justify-center items-center text-sm font-bold">
            <p class="line-clamp-2">{{ props.title }}</p>
          </div>
          <div
            v-if="isLoggedIn"
            class="flex justify-center items-center ml-2"
            @click="updateFavorite"
          >
            <div class="w-6 h-6 flex justify-center items-center cursor-pointer">
              <i v-if="props.isFavorite" class="pi pi-heart-fill cursor-pointer" style="color: #94c8ff"></i>
              <i v-else class="pi pi-heart cursor-pointer" style="color: #cccccc"></i>
            </div>
          </div>
        </div>
        <div class="mt-2 text-[10px] text-right text-gray-400">
          {{ props.publishedAt }}
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
            :isLoggedin="isLoggedIn"
            class="text-blue-500 text-sm underline text-right cursor-pointer"
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
import { defineProps, computed } from "vue";
import { useFavoriteBlogsStore } from "@/stores/favoriteBlogsStore";
import { useUserSessionsStore } from "@/stores/userSessionsStore";

const props = defineProps<{
  id: number;
  imageUrls: Array<string>;
  publishedAt: string;
  title: string;
  isFavorite: boolean;
}>();

const favoriteBlogsStore = useFavoriteBlogsStore();
const userSessionsStore = useUserSessionsStore();

const isLoggedIn = computed(() => userSessionsStore.getIsLoggedIn);

const updateFavorite = async () => {
  await favoriteBlogsStore.requestPutFavoriteBlogInList(props.id);
};
</script>
