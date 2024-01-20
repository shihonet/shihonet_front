<template>
  <FadeInOnScroll>
    <div class="mt-40 mb-10 mx-10">
      <TitlePart
        :title="title"
        :border-class="borderClass"
        :textColorClass="textColorClass"
      />
    </div>
    <p class="text-center text-[20px] mb-4 font-light">加藤 史帆</p>
    <img
      src="../../../assets/images/artist_image_shiho.png"
      class="mx-auto w-[180px]"
    />
  </FadeInOnScroll>
  <FadeInOnScroll>
    <div class="flex items-center justify-center mt-14 mx-6 mb-16">
      <table class="text-[20px] font-light table-spacing">
        <tr class="mb-2">
          <td>生年月日</td>
          <td>1998年2月2日</td>
        </tr>
        <tr class="mb-2">
          <td>星座</td>
          <td>みずがめ座</td>
        </tr>
        <tr class="mb-2">
          <td>身長</td>
          <td>160.5cm</td>
        </tr>
        <tr class="mb-2">
          <td>出身地</td>
          <td>東京都</td>
        </tr>
        <tr class="mb-2">
          <td>血液型</td>
          <td>A型</td>
        </tr>
        <div class="h-6"></div>
        <tr class="mb-2">
          <td>カラー</td>
          <td>青 × 青</td>
        </tr>
        <tr class="mb-2">
          <td>愛称</td>
          <td>かとし、としちゃん</td>
        </tr>
        <tr class="mb-2">
          <td>特技</td>
          <td>ソフトテニス</td>
        </tr>
        <tr class="mb-2">
          <td>趣味</td>
          <td>アニメ、ディズニー</td>
        </tr>
      </table>
    </div>
  </FadeInOnScroll>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import TitlePart from "@/views/components/common/TitlePart.vue";

export default defineComponent({
  components: { TitlePart, FadeInOnScroll },
  data() {
    return {
      title: "PROFILE",
      borderClass: "border-top-color",
      textColorClass: "top-color",
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-spacing td:first-child {
  padding-right: 20px;
}
</style>