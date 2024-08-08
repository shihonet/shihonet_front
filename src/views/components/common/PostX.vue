<template>
  <a :href="props.link" target="_blank">
    <div class="flex items-center justify-center bg-black font-bold py-2 px-4 rounded-full w-[108px]">
      <div class="flex items-center">
        <i class="pi pi-twitter mr-2" style="color: white; font-size: 16px"></i>
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
