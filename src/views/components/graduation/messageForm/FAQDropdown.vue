<template>
  <div
    class="h-14 bg-site-color flex items-center justify-between px-4"
    @click="dropdownOpen = !dropdownOpen"
  >
    <p
      class="text-center pl-6 flex-1 text-white text-3xl font-bold tracking-wider"
    >
      FAQ
    </p>
    <i
      class="pi pi-angle-down text-white transition-transform duration-300"
      style="font-size: 1.5rem"
      :class="{ 'rotate-180': dropdownOpen }"
    />
  </div>

  <transition name="fade-slide">
    <div v-show="dropdownOpen">
      <QuestionItem
        :question="'参加条件はありますか？'"
        :answer="'この企画に賛同していただける方であれば、どなたでもご参加いただけます。'"
        :isOpenedFirst="true"
      />
      <QuestionItem
        :question="'掲示場所や日時を詳しく知りたいです。'"
        :answer="'イベント詳細は後ほどご案内いたします。'"
      />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QuestionItem } from "@/views/components/graduation/messageForm";

const dropdownOpen = ref(false);
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
