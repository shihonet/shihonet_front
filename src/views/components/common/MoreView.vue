<template>
  <div id="MoreView">
    <div class="flex flex-col items-center">
      <div class="text-site-color hover:opacity-70 text-[24px] font-normal">
        {{ props.text }}
      </div>
      <span class="block w-40 border-b border-gray-300"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  text: string;
}>();
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
