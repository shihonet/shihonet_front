<template>
  <div id="PageHeader">
    <p class="text-[38px] font-bold text-center mx-4 text-site-color">
      {{ title }}
    </p>
    <span class="block mx-auto w-60 border-b border-site-color"></span>
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
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* → https://fonts.google.com/specimen/Caveat */
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');
#PageHeader {
  /* Google fontsで導入したいfontsからfont-familyを取ってくる */
  font-family: "Caveat", sans-serif;
}
</style>
