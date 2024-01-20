<template>
  <FadeInOnScroll>
    <div class="mt-10 mb-10 mx-6">
      <TitlePart :title="title" />
    </div>
  </FadeInOnScroll>
  <AllProfiles />
</template>

<script lang="ts">
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import { defineComponent } from "vue";
import AllProfiles from "@/views/components/profiles/AllProfiles.vue";
import TitlePart from "@/views/components/common/TitlePart.vue";

export default defineComponent({
  components: { TitlePart, FadeInOnScroll, AllProfiles },
  data() {
    return {
      title: "Profiles",
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
