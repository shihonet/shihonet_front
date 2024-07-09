<template>
  <FadeInOnScroll>
    <div class="mt-10">
      <TitlePart :title="title" />
    </div>
  </FadeInOnScroll>
  <AllLogin />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import TitlePart from "@/views/components/common/TitlePart.vue";
import AllLogin from "@/views/components/login/AllLogin.vue";

export default defineComponent({
  components: { AllLogin, TitlePart, FadeInOnScroll },
  data() {
    return {
      title: "#shihonet club",
    };
  },
});
</script>
