<template>
  <PageHeader/>
  <router-view></router-view>
</template>

<script lang="ts">
import './index.css';
import PageHeader from "@/views/components/PageHeader.vue";

export default {
  name: 'App',
  components: {PageHeader}
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

.shihonet-base-pink {
  color: #FF61DC;
}
</style>
