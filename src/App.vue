<template>
  <div id="app">
    <Toast />
    <PageHeader />
    <RouterView></RouterView>
    <PageFooter class="mt-40" />
  </div>
</template>

<script setup lang="ts">
import "./index.css";
import { watch, computed } from "vue";
import { useToast } from "primevue/usetoast";
import { useOpenStore } from "@/stores/open";
import { PageHeader, PageFooter } from "@/views/components/common";

const toast = useToast();
const openStore = useOpenStore();

const showToastType = computed(() => openStore.getShowToastType);
const toastMessage = computed(() => openStore.getToastMessage);

// INFO: トーストの表示方法
// INFO: 成功 -> openStore.setToast("success", "成功のメッセージ");
// INFO: 成功 -> openStore.setToast("error", "エラーのメッセージ");
const showToast = () => {
  if (showToastType.value === "none") return;

  toast.add({
    severity: showToastType.value,
    summary: toastMessage.value,
    life: 3000,
  });
  openStore.resetToast();
};

// NOTE: このwatchは、ログイン成功時にトーストを表示するためのもの
watch(
  () => showToastType.value,
  () => showToast()
);
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
