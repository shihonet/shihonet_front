<template>
  <FadeInOnScroll>
    <RouterLink
      :to="`/blogs/${id}`"
      class="bg-white h-min-60 flex rounded-lg object-cover overflow-hidden shadow-md hover:cursor-pointer"
    >
      <img :src="imageUrls[0]" class="w-36 object-cover object-center" />
      <div class="m-4 w-full">
        <div class="text-[16px] font-bold mt-2 line-clamp-2">
          {{ title }}
        </div>
        <div class="text-[10px] text-right text-gray-400">
          {{ publishedAt }}
        </div>
        <div class="flex flex-wrap mt-2 overflow-hidden">
          <div v-for="(image, index) in imageUrls.slice(1)" :key="index">
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

<script lang="ts">
import { defineComponent, PropType } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";

export default defineComponent({
  components: { FadeInOnScroll },
  props: {
    id: {
      type: Number as PropType<number>,
      required: true,
    },
    imageUrls: {
      type: Array as PropType<string[]>,
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
  },
});
</script>
