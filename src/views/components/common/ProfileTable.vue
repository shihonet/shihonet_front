<template>
  <div class="flex items-center justify-center mt-14">
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
      <tr class="h-6"></tr>
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
      <tr class="h-6"></tr>
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

      <tbody v-if="props.isNeededDetailProf">
        <tr class="h-6"></tr>
        <tr>
          <td class="p-2 pr-2">好きなアニメ</td>
          <td class="p-2">
            『名探偵コナン』、<br />『新世紀エヴァンゲリオン』、<br />『進撃の巨人』、<br />『SPY
            × FAMILY』、<br />
            『ジョジョの奇妙な冒険』、<br />『HUNTER × HUNTER』
          </td>
        </tr>
        <tr>
          <td class="p-2 pr-2">好きな映画</td>
          <td class="p-2">
            『スター・ウォーズ』、<br />『スパイダーマン』、<br />『ハリー・ポッター』シリーズ、<br />
            『クレヨンしんちゃん』、<br />マーベル作品<br />
          </td>
        </tr>
        <tr>
          <td class="p-2 pr-2">口癖</td>
          <td class="p-2">しし</td>
        </tr>
        <tr>
          <td class="p-2 pr-2">好きな食べ物</td>
          <td class="p-2">辛いもの、プリッツ、<br />母の作るハンバーグ</td>
        </tr>
        <tr>
          <td class="p-2 pr-2">好きな言葉</td>
          <td class="p-2">クリスマス</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";

const props = withDefaults(defineProps<{
  isNeededDetailProf: boolean;
}>(), {
  isNeededDetailProf: true
});
</script>
