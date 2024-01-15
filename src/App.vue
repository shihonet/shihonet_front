<template>
  <PageHeader />
  <router-view></router-view>
  <PageFooter class="mt-40" />
</template>

<script lang="ts">
import "./index.css";
import PageHeader from "@/views/components/common/PageHeader.vue";
import PageFooter from "@/views/components/common/PageFooter.vue";

export default {
  name: "App",
  components: { PageHeader, PageFooter },
};
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
}

.text-site-base-pink {
  color: #ff61dc;
}

.gb-site-base-pink {
  background-color: #ff61dc;
  opacity: 0.8;
}

.border-site-base-pink {
  border-color: #ff61dc;
}

.shiho-color {
  color: #6197ff;
}

.bg-shiho-color {
  background-color: #6197ff;
}

.bg-shiho-blog-color {
  background-color: #6197ff;
  opacity: 0.8;
}

.border-shiho-color {
  border-color: #6197ff;
}

.kyoko-color {
  color: #ff61dc;
}

.bg-kyoko-color {
  background-color: #ff61dc;
}

.bg-kyoko-blog-color {
  background-color: #ff61dc;
  opacity: 0.8;
}

.border-kyoko-color {
  border-color: #ff61dc;
}
</style>