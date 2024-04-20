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
    <img src="@/assets/images/11th_shiho.png" class="mx-auto w-[220px]" />
  </FadeInOnScroll>
  <FadeInOnScroll>
    <div class="flex items-center justify-center mt-14 mx-6">
      <table class="text-sm font-light">
        <tr class="py-1">
          <td class="p-1.5 pr-5">生年月日</td>
          <td class="p-1.5">1998年2月2日</td>
        </tr>
        <tr>
          <td class="p-1.5 pr-5">星座</td>
          <td class="p-1.5">みずがめ座</td>
        </tr>
        <tr>
          <td class="p-1.5 pr-5">身長</td>
          <td class="p-1.5">160.5cm</td>
        </tr>
        <tr>
          <td class="p-1.5 pr-5">出身地</td>
          <td class="p-1.5">東京都</td>
        </tr>
        <tr>
          <td class="p-1.5 pr-5">血液型</td>
          <td class="p-1.5">A型</td>
        </tr>
        <div class="h-6"></div>
        <tr>
          <td class="p-1.5 pr-5">カラー</td>
          <td class="p-1.5">青 × 青</td>
        </tr>
        <tr>
          <td class="p-1.5 pr-5">愛称</td>
          <td class="p-1.5">かとし、としちゃん</td>
        </tr>
        <tr>
          <td class="p-1.5 pr-5">特技</td>
          <td class="p-1.5">イラスト、運動</td>
        </tr>
        <tr>
          <td class="p-1.5 pr-5">趣味</td>
          <td class="p-1.5">
            テーマパーク、映画、アニメ、<br />小さいフィギュア集め
          </td>
        </tr>
        <div class="h-6"></div>
        <tr>
          <td class="p-1.5 pr-5">ＳＮＳ</td>
          <td class="p-1.5">
            <div class="w-6">
              <a
                href="https://www.instagram.com/katoshi.official/"
                target="_blank"
              >
                <img
                  src="@/assets/images/Instagram_Glyph_Gradient.png"
                  class="w-6"
                />
              </a>
            </div>
          </td>
        </tr>
        <div class="h-6"></div>
        <tr>
          <td class="p-2 pr-5">好きなアニメ</td>
          <td class="p-2">
            『名探偵コナン』、<br />『新世紀エヴァンゲリオン』、<br />『進撃の巨人』、<br />『SPY
            × FAMILY』、<br />
            『ジョジョの奇妙な冒険』、<br />『HUNTER × HUNTER』
          </td>
        </tr>
        <tr>
          <td class="p-2 pr-5">好きな映画</td>
          <td class="p-2">
            『スター・ウォーズ』、<br />『スパイダーマン』、<br />『ハリー・ポッター』シリーズ、<br />
            『クレヨンしんちゃん』、<br />マーベル作品<br />
          </td>
        </tr>
        <tr>
          <td class="p-2 pr-5">口癖</td>
          <td class="p-2">しし</td>
        </tr>
        <tr>
          <td class="p-2 pr-5">好きな食べ物</td>
          <td class="p-2">辛いもの、プリッツ、<br />母の作るハンバーグ</td>
        </tr>
        <tr>
          <td class="p-2 pr-5">好きな言葉</td>
          <td class="p-2">クリスマス</td>
        </tr>
      </table>
    </div>
  </FadeInOnScroll>
  <FadeInOnScroll>
    <div class="mt-10 flex flex-col items-center justify-center">
      <router-link to="/profile">
        <MoreView :borderClass="'border-site-color'" />
      </router-link>
    </div>
  </FadeInOnScroll>
  <FadeInOnScroll>
    <div class="text-[16px] text-center font-light mt-[100px]">
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
        これからも、さらにたくさんの<br />
        素晴らしい景色が見れますように。<br />
      </p>
    </div>
  </FadeInOnScroll>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import TitlePart from "@/views/components/common/TitlePart.vue";
import MoreView from "@/views/components/common/MoreView.vue";

export default defineComponent({
  components: { MoreView, TitlePart, FadeInOnScroll },
  setup() {
    return {
      title: "Profiles",
      borderClass: "border-top-color",
      textColorClass: "top-color",
    };
  },
});
</script>