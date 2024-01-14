<template>
  <FadeInOnScroll>
    <img src='../../assets/images/top_shiho.png' class="w-full">
  </FadeInOnScroll>
  <ShihoDetailProfiles/>
  <ShihoSchedules/>
  <ShihoBlogs/>
</template>

<script lang="ts">
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import ShihoSchedules from "@/views/components/shiho/ShihoSchedules.vue";
import ShihoBlogs from "@/views/components/shiho/ShihoBlogs.vue";
import ShihoDetailProfiles from "@/views/components/shiho/ShihoDetailProfiles.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {ShihoDetailProfiles, ShihoBlogs, ShihoSchedules, FadeInOnScroll}
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
