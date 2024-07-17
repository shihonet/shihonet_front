<template>
  <div class="pb-20">
    <img
      :src="props.thumbnailImageUrl"
      class="rounded-lg h-[240px] w-full object-cover object-center shadow-xl"
    />
    <RouterLink :to="`/blogs/${props.id}`">
      <div class="hover:opacity-70">
        <div class="mt-6 mx-4">
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
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  id: number;
  thumbnailImageUrl: string;
  publishedAt: string;
  title: string;
}>();
</script>
