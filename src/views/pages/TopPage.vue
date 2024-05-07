<template>
  <BaseModal>
    <InitialModal />
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
import InitialModal from "@/views/components/top/InitialModal.vue";
import Schedules from "@/views/components/top/TopSchedules.vue";
import Blogs from "@/views/components/top/TopBlogs.vue";
import DetailProfiles from "@/views/components/top/TopProfiles.vue";
import BaseModal from "@/views/components/common/BaseModal.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    InitialModal,
    DetailProfiles,
    Blogs,
    Schedules,
    FadeInOnScroll,
    BaseModal,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
