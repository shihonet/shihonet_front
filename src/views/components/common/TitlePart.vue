<template>
  <div class="flex items-center justify-center">
    <span :class="borderClass" class="flex-1 border-b-2"></span>
    <p :class="textColorClass" class="text-[32px] text-center mx-4">{{ title }}</p>
    <span :class="borderClass" class="flex-1 border-b-2"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      default: "TITLE",
      required: true,
    },
    borderClass: {
      type: String as PropType<string>,
      default: "border-site-base-pink",
    },
    textColorClass: {
      type: String as PropType<string>,
      default: "text-site-base-pink",
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
