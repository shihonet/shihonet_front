<template>
  <div class="flex items-center justify-center">
    <span class="flex-1 border-b-2 border-kyoko-color"></span>
    <p class="text-[32px] text-center mx-4 kyoko-color">{{ title }}</p>
    <span class="flex-1 border-b-2 border-kyoko-color"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
