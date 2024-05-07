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

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import { useBaseModalStore } from "@/stores/common/baseModalStore";
import confetti from "canvas-confetti";

export default defineComponent({
  components: { FadeInOnScroll },
  setup() {
    const baseModalStore = useBaseModalStore();

    onMounted(() => {
      if(!baseModalStore.isModalOpen) return;

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

    return {
      closeModal: computed(() => baseModalStore.closeModal()),
      isModalOpen: computed(()=>baseModalStore.getIsModalOpen),
    };
  },
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
