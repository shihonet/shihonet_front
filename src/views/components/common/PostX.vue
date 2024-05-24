<template>
  <a :href="link" target="_blank">
    <div class="flex items-center justify-center bg-black font-bold py-2 px-4 rounded-full w-[108px]">
      <div class="flex items-center">
        <img src="@/assets/images/x_logo.svg" class="h-4 mr-2" />
        <span class="font-normal text-white">ポスト</span>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    link: {
      type: String as PropType<string>,
      default: "https://x.com/intent/tweet?text=",
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
