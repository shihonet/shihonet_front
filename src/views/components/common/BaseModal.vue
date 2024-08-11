<template>
  <div v-if="isModalOpen">
    <div id="base_modal" class="fixed z-50 inset-0 overflow-y-auto">
      <FadeInOnScroll>
        <div class="flex items-center justify-center min-h-screen">
          <div class="flex flex-col mx-8">
            <div class="w-full text-white text-[40px] text-right">
              <span @click="closeModal" class="hover:cursor-pointer">×</span>
            </div>
            <div class="w-full h-[540px]">
              <slot></slot>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import { useBaseModalStore } from "@/stores/common/baseModalStore";
import confetti from "canvas-confetti";
import { useUserSessionsStore } from "@/stores/userSessionsStore";

const baseModalStore = useBaseModalStore();

const closeModal = () => {
  baseModalStore.setIsModalOpen(false);
};

const isModalOpen = computed(() => baseModalStore.getIsModalOpen);

onMounted(() => {
  const userSessionsStore = useUserSessionsStore();
  const isLoggedIn = computed(() => userSessionsStore.getIsLoggedIn);

  // INFO: 以下全ては、表示する条件文内のみ変更して良い。基本的に触らない。
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // getMonth()メソッドは0から11の整数を返す。1月は0、2月は1、…、12月は11。
  // const currentDate = today.getDate();
  // TODO: ここでモーダルを表示させる日付を指定する。
  if (currentMonth === 8 && !isLoggedIn.value) {
    baseModalStore.setIsModalOpen(true);
  }

  if (!baseModalStore.isModalOpen) return;

  // INFO: confetti ライブラリを使用した、クラッカーのアニメーション
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.2/dist/confetti.browser.min.js";
  script.onload = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };
  document.head.appendChild(script);
});
</script>

<style scoped>
#base_modal {
  max-width: 480px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
