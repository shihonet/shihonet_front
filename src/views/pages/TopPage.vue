<template>
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

export default defineComponent({
  components: {
    DetailProfiles,
    Blogs,
    Schedules,
    FadeInOnScroll,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
