<template>
  <FadeInOnScroll>
    <div class="mt-10 mb-10 mx-8">
      <TitlePart :title="title" />
    </div>
    <p class="text-center text-[12px] mb-1 font-light">Shiho Kato</p>
    <p class="text-center text-[20px] mb-4">加藤 史帆</p>
    <img src="@/assets/images/11th_shiho.png" class="mx-auto w-[220px]" />
  </FadeInOnScroll>

  <FadeInOnScroll>
    <ProfileTable :isNeededDetailProf="isNeededDetailProf" />
  </FadeInOnScroll>

  <FadeInOnScroll>
    <div class="mt-16 bg-yellow-100 rounded-lg py-4">
      <p class="text-[14px] font-light text-center">
        リアルタイムで加藤史帆ちゃんの近況を知りたい方は、 <br />
        <a
          href="https://www.hinatazaka46.com/s/h46app/page_common/app_guide"
          target="_blank"
          class="font-medium text-blue-500 underline"
          >公式アプリ「日向坂46メッセージ」</a
        >
        （月額300円）で<br />チェックできます！！
      </p>
    </div>
  </FadeInOnScroll>

  <div class="mt-24">
    <ContentIntroduction />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import TitlePart from "@/views/components/common/TitlePart.vue";
import ProfileTable from "@/views/components/common/ProfileTable.vue";
import ContentIntroduction from "@/views/components/profile/ContentIntroduction.vue";

export default defineComponent({
  components: { ContentIntroduction, ProfileTable, TitlePart, FadeInOnScroll },
  setup() {
    return {
      title: "Profile",
      isNeededDetailProf: true,
    };
  },
});
</script>
