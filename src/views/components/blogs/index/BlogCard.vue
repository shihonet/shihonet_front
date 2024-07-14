<template>
  <div class="pb-20">
    <img :src="thumbnailImageUrl" class="rounded-lg h-[240px] w-full object-cover object-center shadow-xl" />
    <a :href="blogUrl" class="hover:opacity-70">
      <div class="mt-6 mx-4">
        <div class="text-[12px] font-normal text-gray-400">
          {{ publishedAt }}
        </div>
        <div class="text-[16px] font-bold mt-2 h-10">
          {{ title }}
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    thumbnailImageUrl: {
      type: String as PropType<string>,
      required: true,
    },
    publishedAt: {
      type: String as PropType<string>,
      required: true,
    },
    title: {
      type: String as PropType<string>,
      required: true,
    },
    blogUrl: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>
