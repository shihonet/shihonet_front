<template>
  <a :href="props.link" target="_blank">
    <div class="flex items-center justify-center bg-black font-bold py-2 px-4 rounded-full w-[108px]">
      <div class="flex items-center">
        <img src="@/assets/images/x_logo.svg" class="h-4 mr-2" />
        <span class="font-normal text-white">ポスト</span>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";

const props = withDefaults(defineProps<{
  link: string;
}>(), {
  link: "https://x.com/intent/tweet?text="
});
</script>
