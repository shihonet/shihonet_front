<template>
  <img src='../../assets/images/top_image.png' class="w-full">
  <h1 class="text-center text-5xl">齊藤京子</h1>
  <KyokoProfile/>
  <KyokoSchedules/>
  <KyokoBlogs/>
</template>

<script lang="ts">
import KyokoProfile from "@/views/components/tops/KyokoProfile.vue";
import KyokoSchedules from "@/views/components/kyoko/KyokoSchedules.vue";
import KyokoBlogs from "@/views/components/kyoko/KyokoBlogs.vue";

export default {
  components: {KyokoBlogs, KyokoSchedules, KyokoProfile}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
