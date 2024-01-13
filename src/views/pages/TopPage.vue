<template>
  <FadeInOnScroll>
    <div class="">
      <div class="w-3/4 px-4 py-8 text-[20px] border-t-2 border-b-2 border-r-2 border-site-base-pink shadow-lg mt-8">
        <div class="text-[24px] text-site-base-pink font-semibold">としきょんのーと</div>
        <div class="text-[16px] mt-4">
          <p>日向坂46一期生の最強シンメの</p>
          <p>加藤史帆さん、齊藤京子さん。</p>
          <p>「としきょん」というコンビの</p>
          <p>おふたりを末長く応援したい</p>
          <p>という想いから開設された</p>
          <p>非公式ファンサイトです。</p>
        </div>
      </div>
    </div>
  </FadeInOnScroll>
  <FadeInOnScroll>
    <img src='../../assets/shiho_kato_image.png' class="float-right shadow-xl w-3/4">
  </FadeInOnScroll>
  <FadeInOnScroll>
    <img src='../../assets/kyoko_saito_image.png' class="shadow-xl w-3/4">
  </FadeInOnScroll>

  <SchedulesPage/>
  <ShihoProfile class="mb-16"/>
  <KyokoProfile/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import SchedulesPage from "@/views/components/tops/SchedulesPage.vue";
import ShihoProfile from "@/views/components/tops/ShihoProfile.vue";
import KyokoProfile from "@/views/components/tops/KyokoProfile.vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";

export default defineComponent({
  components: {FadeInOnScroll, KyokoProfile, ShihoProfile, SchedulesPage}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
