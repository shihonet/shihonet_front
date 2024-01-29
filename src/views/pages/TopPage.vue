<template>
  <!-- 生誕モーダル-->
  <BaseModal>
    <img src="@/assets/images/happy_birthday_modal.png" class="h-full w-full rounded-[40px] shadow-2xl"/>
  </BaseModal>

  <FadeInOnScroll>
    <img src="@/assets/images/top_image.png" />
  </FadeInOnScroll>
  <DetailProfiles />
  <Schedules />
  <Blogs />
</template>

<script lang="ts">
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import Schedules from "@/views/components/top/TopSchedules.vue";
import Blogs from "@/views/components/top/TopBlogs.vue";
import DetailProfiles from "@/views/components/top/ToplProfiles.vue";
import { defineComponent } from "vue";
import BaseModal from "@/views/components/common/BaseModal.vue";
import confetti from 'canvas-confetti';

export default defineComponent({
  components: {
    BaseModal,
    DetailProfiles,
    Blogs,
    Schedules,
    FadeInOnScroll,
  },
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.2/dist/confetti.browser.min.js';
    script.onload = () => {
      // @ts-ignore
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    };
    document.head.appendChild(script);
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
