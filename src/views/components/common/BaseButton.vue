<template>
  <div class="flex justify-center">
    <button
      class="py-3 px-10 rounded-full text-lg font-bold"
      :class="themeCss"
      :disabled="props.disabled"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, computed } from "vue";

const props = withDefaults(defineProps<{
  theme?: string;
  disabled?: boolean;
}>(), {
  theme: "primary",
  disabled: false,
});

const themeCss = computed(() => {
  if (props.disabled) {
    return "bg-disabled-color text-white";
  }

  const commonCss = "hover:opacity-70";
  switch (props.theme) {
    case "white":
      return `${commonCss} bg-white border-[1px] border-gray-400`;
    case "primary":
    default:
      return `${commonCss} bg-site-color text-white`;
  }
});
</script>
