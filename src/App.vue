<template>
  <div id="app">
    <ShowToast />
    <PageHeader />
    <RouterView />
    <PageFooter class="mt-40" />
  </div>
</template>

<script setup lang="ts">
import "./index.css";
import { PageHeader, PageFooter, ShowToast } from "@/views/components/common";
</script>

<style>
/* Google fontsで導入したいfonts から@importのコードを取得 */
/* → https://fonts.google.com/specimen/M+PLUS+Rounded+1c?query=rounded */
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap");

#app {
  /* Google fontsで導入したいfontsからfont-familyを取ってくる */
  font-family: "M PLUS Rounded 1c", sans-serif;
  max-width: 480px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background-color: #f4faff;
}

.v-enter-active, .v-leave-active {
  transition: opacity 1s ease 1.5s; /* 遅延してから1秒かけてフェードアウト */
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}

.text-site-color {
  color: #6197ff;
}

.bg-site-color {
  background-color: #6197ff;
}

.bg-site-blog-color {
  background-color: rgba(97, 151, 255, 0.8);
}

.border-site-color {
  border-color: #6197ff;
}

.bg-disabled-color {
  background-color: rgb(227, 227, 227);
}

.border-site-color {
  border-color: #6197ff;
}

.text-error-color {
  color: rgb(255, 0, 0);
}
</style>
