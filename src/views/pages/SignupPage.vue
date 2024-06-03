<template>
  <FadeInOnScroll>
    <div class="mt-10 mb-10 mx-6">
      <TitlePart :title="title" />
    </div>
  </FadeInOnScroll>
  <AllSignup />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import TitlePart from "@/views/components/common/TitlePart.vue";
import AllSignup from "@/views/components/signup/AllSignup.vue";

export default defineComponent({
  components: { TitlePart, FadeInOnScroll, AllSignup },
  data() {
    return {
      title: "#shihonet CLUB",
    };
  },
});
</script>
