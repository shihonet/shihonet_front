<template>
  <div id="app">
    <Transition>
      <div v-if="show" class="fixed z-[9999] h-full bg-white flex justify-center items-center">
        <img src="@/assets/images/shihonet_ogp.png" class="w-full" />
      </div>
    </Transition>

    <ShowToast />
    <PageHeader />
    <RouterView></RouterView>
    <PageFooter class="mt-40" />
  </div>
</template>

<script setup lang="ts">
import "./index.css";
import { PageHeader, PageFooter, ShowToast } from "@/views/components/common";
import { onMounted, ref } from "vue";

const show = ref(true);

onMounted(() => {
  show.value = false;
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
  background-color: #f4faff;
}

.v-enter-active, .v-leave-active {
  transition: opacity 1s ease 1.0s; /* 2秒遅延してから1秒かけてフェードアウト */
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

.text-error-color {
  color: rgb(255, 0, 0);
}
</style>
