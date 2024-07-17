<template>
  <FadeInOnScroll>
    <div class="pb-20">
      <RouterLink :to="`/blogs/${props.id}`">
        <img
          :src="props.thumbnailImageUrl"
          class="rounded-lg h-[240px] w-full object-cover object-center shadow-xl"
        />
        <div class="hover:opacity-70">
          <div class="mt-6 mx-2">
            <div class="text-[12px] font-normal text-gray-400">
              {{ props.publishedAt }}
            </div>
            <div class="text-[16px] font-bold mt-2 h-10">
              {{ props.title }}
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </FadeInOnScroll>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { FadeInOnScroll } from "@/views/components/common";

const props = defineProps<{
  id: number;
  thumbnailImageUrl: string;
  publishedAt: string;
  title: string;
}>();
</script>
