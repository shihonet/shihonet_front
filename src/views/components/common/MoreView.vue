<template>
  <div id="MoreView">
    <div class="mt-4 bg-site-blog-color hover:bg-blue-300 text-white text-[24px] font-bold rounded-lg px-4 py-1">
      See more…
    </div>
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

.bg-site-color-hover:hover {
  background-color: rgba(97, 151, 255, 0.8);
}
</style>
