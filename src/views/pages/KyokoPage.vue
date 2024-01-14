<template>
  <FadeInOnScroll>
    <img src='../../assets/images/top_kyoko.png' class="w-full">
  </FadeInOnScroll>
  <KyokoDetailProfiles/>
  <KyokoSchedules/>
  <KyokoBlogs/>
</template>

<script lang="ts">
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import KyokoSchedules from "@/views/components/kyoko/KyokoSchedules.vue";
import KyokoBlogs from "@/views/components/kyoko/KyokoBlogs.vue";
import KyokoDetailProfiles from "@/views/components/kyoko/KyokoDetailProfiles.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {KyokoDetailProfiles, KyokoBlogs, KyokoSchedules, FadeInOnScroll}
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
