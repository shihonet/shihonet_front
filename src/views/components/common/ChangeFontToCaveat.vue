<template>
  <p id="ChangeFontToCaveat">
    {{ text }}
  </p>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String as PropType<string>,
      default: "string",
      required: true,
    },
  },
});
</script>

<style>
/* → https://fonts.google.com/specimen/Caveat */
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');
#ChangeFontToCaveat {
  /* Google fontsで導入したいfontsからfont-familyを取ってくる */
  font-family: "Caveat", sans-serif;
}
</style>
