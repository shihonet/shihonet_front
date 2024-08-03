<template>
  <ChangeFontToCaveat
    class="text-[38px] font-bold text-center mx-4 text-site-color"
    :text="props.title"
  />
  <span class="block mx-auto w-60 border-b border-site-color"></span>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { ChangeFontToCaveat } from "@/views/components/common";

const props = defineProps<{
  title: string;
}>();
</script>
