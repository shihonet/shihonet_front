<template>
  <Toast position="top-center" />
</template>

<script setup lang="ts">
import { watch, computed } from "vue";
import { useToast } from "primevue/usetoast";
import { useOpenStore } from "@/stores/open";

const toast = useToast();
const openStore = useOpenStore();

const showToastType = computed(() => openStore.getShowToastType);
const toastMessage = computed(() => openStore.getToastMessage);

// INFO: How to use this component "ShowToast"
// INFO: Success -> openStore.setToast("success", "[message for success]");
// INFO: Error   -> openStore.setToast("error", "[message for error]");
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
