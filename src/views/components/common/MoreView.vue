<template>
  <div class="flex flex-col items-center justify-center">
    <p class="text-[20px]">もっと見る</p>
    <div :class="borderClass" class="border-b-4 w-[120px]"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    borderClass: {
      type: String as PropType<string>,
      default: "border-site-base-pink",
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
