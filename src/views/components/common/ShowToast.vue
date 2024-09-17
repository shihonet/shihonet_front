<template>
  <Toast position="top-center" class="max-w-[320px]" />
</template>

<script setup lang="ts">
import { watch, computed } from "vue";
import { useToast } from "primevue/usetoast";
import { useOpenStore } from "@/stores/common/openStore";

const toast = useToast();
const openStore = useOpenStore();

const showToastType = computed(() => openStore.getShowToastType);
const toastMessage = computed(() => openStore.getToastMessage);
const life = computed(() => openStore.getLife);

// INFO: How to use this component "ShowToast"
// INFO: Success -> openStore.setToast("success", "[message for success]");
// INFO: Error   -> openStore.setToast("error", "[message for error]");
const showToast = () => {
  if (showToastType.value === "none") return;

  toast.add({
    severity: showToastType.value,
    summary: toastMessage.value,
    life: life.value,
  });
  openStore.resetToast();
};

// NOTE: このwatchは、ログイン成功時にトーストを表示するためのもの
watch(
  () => showToastType.value,
  () => showToast()
);
</script>
