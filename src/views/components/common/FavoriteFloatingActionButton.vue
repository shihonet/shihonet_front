<template>
  <div class="parent-container" ref="parent">
    <div v-if="props.show" :style="fabStyle">
      <Button
        :icon="props.isFavorite ? 'pi pi-heart-fill' : 'pi pi-heart'"
        severity="info"
        raised
        rounded
        size="large"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, onUnmounted, ref } from "vue";
import Button from "primevue/button";
import type { CSSProperties } from 'vue';

const props = defineProps<{
  show: boolean;
  isFavorite: boolean;
}>();

const parent = ref<HTMLDivElement | null>(null);
const fabStyle = ref<CSSProperties>({
  bottom: "16px",
  right: "16px",
  position: "fixed",
});

const updateFabPosition = () => {
  if (parent.value) {
    const rect = parent.value.getBoundingClientRect();
    fabStyle.value.right = `calc(50% - ${rect.width / 2 - 16}px)`;
  }
};

onMounted(() => {
  updateFabPosition();
  window.addEventListener("resize", updateFabPosition);
  window.addEventListener("scroll", updateFabPosition);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateFabPosition);
  window.removeEventListener("scroll", updateFabPosition);
});
</script>

<style scoped>
.parent-container {
  max-width: 480px;
  margin: auto;
}
</style>
