<template>
  <div class="mt-10 mx-8">
    <TitlePart title="Shiho Kato" />
  </div>
  <p class="mt-10 text-center text-light text-site-color text-sm">
    日向坂46 一期生
  </p>
  <p class="mt-4 text-center text-[20px]">加藤 史帆</p>
  <img
    src="https://cdn.hinatazaka46.com/images/14/610/d713c2e65eee8fa173ef6c62d0d49/800_800_102400.jpg"
    class="mt-4 mx-auto w-[220px]"
  />
  <ProfileTable :isNeededDetailProf="true" />

  <FadeInOnScroll>
    <div class="mt-16 border-2 border-green-200 rounded-lg py-4 px-2">
      <p class="text-[14px] font-light text-center">
        リアルタイムで加藤史帆さんの近況を知りたい方は、
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
import {
  FadeInOnScroll,
  TitlePart,
  ProfileTable,
} from "@/views/components/common";
import { ContentIntroduction } from "@/views/components/profiles";
</script>
