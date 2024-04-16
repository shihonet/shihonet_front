<template>
  <FadeInOnScroll>
    <div class="mt-40 mb-10 mx-10">
      <TitlePart
        :title="title"
        :border-class="borderClass"
        :textColorClass="textColorClass"
      />
    </div>
    <p class="text-center text-[12px] mb-1 font-light">Shiho Kato</p>
    <p class="text-center text-[20px] mb-4">加藤 史帆</p>
    <img
      src="@/assets/images/11th_shiho.png"
      class="mx-auto w-[220px]"
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
          <td>イラスト、運動</td>
        </tr>
        <tr class="mb-2">
          <td>趣味</td>
          <td>アニメ、ディズニー</td>
        </tr>
        <div class="h-6"></div>
        <tr>
          <td>ＳＮＳ</td>
          <td>
            <a
              href="https://www.instagram.com/katoshi.official/"
              target="_blank"
            >
              <img
                src="@/assets/images/Instagram_Glyph_Gradient.svg"
                class="w-8"
              />
            </a>
          </td>
        </tr>
      </table>
    </div>
  </FadeInOnScroll>
  <FadeInOnScroll>
    <div class="text-center font-light">
      <p>
        2016年5月8日、けやき坂46の<br />
        オーディションに合格し、<br />
        一期生として活動をスタート。<br />
        <br />
        2019年3月27日に<br />
        日向坂46としてデビューを果たす。<br />
        5枚目シングルでは、<br />
        表題曲「君しか勝たん」で<br />
        センターを務める。<br />
        <br />
        仲間想い、後輩想いな、<br />
        グループの頼れるお姉さん的存在。<br />
        個人としてもチームとしても、<br />
        モデルやバラエティを中心に<br />
        活躍の幅を広げている。<br />
        <br />
        今年もさらにたくさんの<br />
        新しい景色が見れますように。<br />
      </p>
    </div>
  </FadeInOnScroll>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import TitlePart from "@/views/components/common/TitlePart.vue";

export default defineComponent({
  components: { TitlePart, FadeInOnScroll },
  setup() {
    return {
      title: "Profiles",
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
