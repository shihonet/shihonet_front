<template>
  <FadeInOnScroll>
    <div class="mt-40 mb-10 mx-10">
      <title-part
        :title="title"
        :border-class="borderClass"
        :textColorClass="textColorClass"
      />
    </div>
    <p class="text-center text-[20px] mb-4 font-light">齊藤 京子</p>
    <img
      src="../../../assets/images/artist_image_kyoko.png"
      class="mx-auto w-[180px]"
    />
  </FadeInOnScroll>
  <FadeInOnScroll>
    <div class="flex items-center justify-center mt-14 mx-6 mb-16">
      <table class="text-[20px] font-light table-spacing">
        <tr class="mb-2">
          <td>生年月日</td>
          <td>1997年9月5日</td>
        </tr>
        <tr class="mb-2">
          <td>星座</td>
          <td>おとめ座</td>
        </tr>
        <tr class="mb-2">
          <td>身長</td>
          <td>155.5cm</td>
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
          <td>白 × 白</td>
        </tr>
        <tr class="mb-2">
          <td>愛称</td>
          <td>きょんこ</td>
        </tr>
        <tr class="mb-2">
          <td>特技</td>
          <td>ああああああ</td>
        </tr>
        <tr class="mb-2">
          <td>趣味</td>
          <td>ああああああ</td>
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
      borderClass: "border-kyoko-color",
      textColorClass: "kyoko-color",
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
