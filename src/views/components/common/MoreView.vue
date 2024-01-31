<template>
  <div id="MoreView" class="flex flex-col items-center justify-center">
    <p class="text-[32px] text-gray-400">See more...</p>
    <div :class="borderClass" class="border-b-2 w-[144px]"></div>
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
<style scoped>
/* → https://fonts.google.com/specimen/Caveat */
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');
#MoreView {
  /* Google fontsで導入したいfontsからfont-familyを取ってくる */
  font-family: "Caveat", sans-serif;
}
</style>
