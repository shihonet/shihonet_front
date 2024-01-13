<template>
  <PageHeader/>
  <router-view></router-view>
  <PageFooter/>
</template>

<script lang="ts">
import './index.css';
import PageHeader from "@/views/components/common/PageHeader.vue";
import PageFooter from "@/views/components/common/PageFooter.vue";

export default {
  name: 'App',
  components: {PageHeader, PageFooter}
}
</script>

<style>
/* Google fontsで導入したいfonts から@importのコードを取得 */
/* → https://fonts.google.com/specimen/M+PLUS+Rounded+1c?query=rounded */
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');
#app {
  /* Google fontsで導入したいfontsからfont-familyを取ってくる */
  font-family: 'M PLUS Rounded 1c', sans-serif;
  max-width: 480px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.text-site-base-pink {
  color: #FF61DC;
}

.border-site-base-pink {
  border-color: #FF61DC;
}

.shiho-color {
  color: #6197FF;
}
</style>
