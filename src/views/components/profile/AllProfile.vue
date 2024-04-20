<template>
  <FadeInOnScroll>
    <div class="mt-10 mb-10 mx-8">
      <TitlePart :title="title" />
    </div>
  </FadeInOnScroll>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import TitlePart from "@/views/components/common/TitlePart.vue";

export default defineComponent({
  components: { TitlePart, FadeInOnScroll },
  setup() {
    return {
      title: "Profile",
    };
  },
});
</script>