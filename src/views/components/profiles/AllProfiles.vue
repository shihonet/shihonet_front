<template>
  <div class="mt-10 mb-10 mx-8">
    <TitlePart title="Profiles" />
  </div>
  <p class="text-center text-[12px] font-light">Shiho Kato</p>
  <p class="mt-1 text-center text-[20px]">加藤 史帆</p>
  <p class="mt-4 text-center text-light text-site-color text-sm">
    日向坂46 一期生
  </p>
  <img src="@/assets/images/12th_artist_img.png" class="mt-4 mx-auto w-[220px]" />
  <ProfileTable :isNeededDetailProf="true" />

  <FadeInOnScroll>
    <div class="mt-16 bg-yellow-100 rounded-lg py-4 px-2">
      <p class="text-[14px] font-light text-center">
        リアルタイムで加藤史帆ちゃんの近況を知りたい方は、
        <a
          href="https://www.hinatazaka46.com/s/h46app/page_common/app_guide"
          target="_blank"
          class="font-medium text-blue-500 underline"
          >日向坂46公式アプリ「日向坂46メッセージ」</a
        >
        （月額300円）でチェックできます！！
      </p>
    </div>
  </FadeInOnScroll>

  <div class="mt-24">
    <ContentIntroduction />
  </div>
</template>

<script setup lang="ts">
import { FadeInOnScroll, TitlePart, ProfileTable } from "@/views/components/common";
import { ContentIntroduction } from "@/views/components/profiles";
</script>
