<template>
  <img src='../../assets/top_image.png' class="w-full">
  <SchedulesPage/>
  <ShihoProfile class="mb-16"/>
  <KyokoProfile/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import SchedulesPage from "@/views/components/tops/SchedulesPage.vue";
import ShihoProfile from "@/views/components/tops/ShihoProfile.vue";
import KyokoProfile from "@/views/components/tops/KyokoProfile.vue";

export default defineComponent({
  components: {KyokoProfile, ShihoProfile, SchedulesPage}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
