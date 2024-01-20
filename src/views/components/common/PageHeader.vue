<template>
  <div id="PageHeader" class="sticky z-50 w-full top-0">
    <div class="pl-4 bg-white">
      <span class="ml-2 font-bold text-[35px] text-site-color">
        <router-link to="/">#shihonet</router-link>
      </span>
      <span class="">
        <!-- TODO: ハンバーガーメニュー-->
      </span>
    </div>
    <div class="border-b-2 border-site-color"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHeader",
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
