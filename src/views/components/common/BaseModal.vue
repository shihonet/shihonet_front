<template>
  <div v-show="isModalOpen">
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
import { defineComponent } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";

export default defineComponent({
  components: { FadeInOnScroll },
  data() {
    return {
      isModalOpen: true,
    };
  },
  methods: {
    closeModal() {
      this.isModalOpen = false;
    }
  }
});
</script>

<style scoped>
/* Google fontsで導入したいfonts から@importのコードを取得 */
/* → https://fonts.google.com/specimen/M+PLUS+Rounded+1c?query=rounded */
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap");

#base_modal {
  /* Google fontsで導入したいfontsからfont-familyを取ってくる */
  font-family: "M PLUS Rounded 1c", sans-serif;
  max-width: 480px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
