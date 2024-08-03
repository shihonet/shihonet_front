<template>
  <div ref="fadeElement" class="fade-element" :class="{ 'fade-in': isVisible }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const fadeElement = ref(null);
const isVisible = ref(false);

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  if (entries[0].isIntersecting) {
    isVisible.value = true;
  }
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
  });

  if (fadeElement.value) {
    observer.observe(fadeElement.value);
  }

  // コンポーネントがアンマウントされたときにリスナーを削除する
  return () => {
    if (fadeElement.value) {
      observer.unobserve(fadeElement.value);
    }
  };
});
</script>

<style scoped>
.fade-element {
  opacity: 0;
  transition: opacity 1s;
}

.fade-in {
  opacity: 1;
}
</style>
