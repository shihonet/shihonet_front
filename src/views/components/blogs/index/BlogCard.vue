<template>
  <FadeInOnScroll>
    <RouterLink
      :to="`/blogs/${props.id}`"
      class="bg-white h-min-60 flex rounded-lg object-cover overflow-hidden shadow-md hover:cursor-pointer"
    >
      <img :src="imageUrls[0]" class="w-36 object-cover object-center" />
      <div class="m-4 w-full">
        <div class="text-[16px] font-bold mt-2 line-clamp-2">
          {{ props.title }}
        </div>
        <div class="text-[10px] text-right text-gray-400">
          {{ props.publishedAt }}
        </div>
        <div class="text-end">
          <img src="@/assets/images/favorite_24dp_5F6368_FILL0_wght400_GRAD-25_opsz40.svg" class="text-red-600 w-4 h-4" />
          {{props.isFavorite}}
          {{props.isLoggedIn}}
        </div>
        <div class="flex flex-wrap mt-2 overflow-hidden">
          <div v-for="(image, index) in props.imageUrls.slice(1)" :key="index">
            <img
              :src="image"
              class="m-1 rounded-lg w-16 h-16 object-cover object-center"
            />
          </div>
        </div>
      </div>
    </RouterLink>
  </FadeInOnScroll>
</template>

<script setup lang="ts">
import { FadeInOnScroll } from "@/views/components/common";
import { defineProps } from "vue";

const props = defineProps<{
  id: number;
  imageUrls: Array<string>;
  publishedAt: string;
  title: string;
  isFavorite: boolean;
  isLoggedIn: boolean;
}>();
</script>
