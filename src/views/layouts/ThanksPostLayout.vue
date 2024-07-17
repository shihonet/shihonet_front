<template>
  <FadeInOnScroll>
    <div class="mt-10 mb-10 mx-6">
      <TitlePart :title="title" />
    </div>
  </FadeInOnScroll>
  <AllThanksPost />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AllThanksPost from "@/views/components/thanksPost/AllThanksPost.vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import TitlePart from "@/views/components/common/TitlePart.vue";

export default defineComponent({
  components: { TitlePart, FadeInOnScroll, AllThanksPost },
  data() {
    return {
      title: "Generator",
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
