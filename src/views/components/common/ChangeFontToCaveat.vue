<template>
  <p id="ChangeFontToCaveat">
    {{ props.text }}
  </p>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  text: string;
}>();
</script>

<style>
/* → https://fonts.google.com/specimen/Caveat */
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');
#ChangeFontToCaveat {
  /* Google fontsで導入したいfontsからfont-familyを取ってくる */
  font-family: "Caveat", sans-serif;
}
</style>
