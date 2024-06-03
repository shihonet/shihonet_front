<template>
  <PageHeader />
  <RouterView></RouterView>
  <PageFooter class="mt-40" />
</template>

<script lang="ts">
import "./index.css";
import { defineComponent } from "vue";
import PageHeader from "@/views/components/common/PageHeader.vue";
import PageFooter from "@/views/components/common/PageFooter.vue";

export default defineComponent({
  name: "App",
  components: { PageHeader, PageFooter },
});
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
  background-color: #F4FAFF;
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

.text-error-color {
  color: rgb(241, 35, 35);
}
</style>
