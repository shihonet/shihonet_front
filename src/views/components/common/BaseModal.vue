<template>
  <div v-show="isOpen">
    <div id="base_modal" class="fixed z-50 inset-0 overflow-y-auto">
      <FadeInOnScroll>
        <div class="flex items-center justify-center min-h-screen">
          <div class="flex flex-col w-80">
            <div class="w-full mb-2 text-white text-[32px] text-right">×</div>
            <div class="w-full h-[540px]">
              <img src="@/assets/images/happy_birthday_modal.png" class="h-full w-full rounded-[40px] shadow-2xl"/>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";

export default defineComponent({
  components: { FadeInOnScroll },
  props: {
    isOpen: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  computed: {},
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
