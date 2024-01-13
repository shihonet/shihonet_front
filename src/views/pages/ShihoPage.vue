<template>
  <img src='../../assets/top_image.png' class="w-full">
  <h1 class="text-center text-5xl">加藤史帆</h1>
  <ShihoProfile/>
  <ShihoSchedules/>
  <ShihoBlogs/>
</template>

<script>
import ShihoProfile from "@/views/components/tops/ShihoProfile.vue";
import ShihoSchedules from "@/views/components/shiho/ShihoSchedules.vue";
import ShihoBlogs from "@/views/components/shiho/ShihoBlogs.vue";

export default {
  components: {ShihoBlogs, ShihoSchedules, ShihoProfile}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
