<template>
  <div>
    <div
      class="mt-6 h-12 bg-site-light-color flex items-center justify-between px-4"
      @click="dropdownOpen = !dropdownOpen"
    >
      <p class="text-white text-3xl">Q</p>
      <p class="text-sm text-black px-3 flex-1 tracking-wider">
        {{ question }}
      </p>
      <i
        class="pi pi-angle-down text-white transition-transform duration-300"
        style="font-size: 1.5rem"
        :class="{ 'rotate-180': dropdownOpen }"
      />
    </div>

    <transition name="fade-slide">
      <div
        v-show="dropdownOpen"
        class="bg-white flex items-center justify-between mt-2 px-4"
      >
        <p class="text-3xl text-red-400">A</p>
        <p class="text-sm text-black pl-6 flex-1 tracking-wider">
          {{ answer }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  isOpenedFirst: {
    type: Boolean,
    default: false,
  },
});

const dropdownOpen = ref(props.isOpenedFirst);
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
