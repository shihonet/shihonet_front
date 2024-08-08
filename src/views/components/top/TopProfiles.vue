<template>
  <div class="mx-6">
    <FadeInOnScroll>
      <div class="mt-40 mb-10 mx-10">
        <TitlePart title="Profiles" />
      </div>
      <p class="text-center text-[12px] font-light">Shiho Kato</p>
      <p class="mt-1 text-center text-[20px]">加藤 史帆</p>
      <p class="mt-4 text-center text-light text-site-color text-sm">日向坂46 一期生</p>
      <img src="@/assets/images/11th_shiho.png" class="mt-4 mx-auto w-[220px]" />
    </FadeInOnScroll>

    <FadeInOnScroll>
      <ProfileTable :isNeededDetailProf="false" />
      <div class="mt-10 flex justify-end">
        <RouterLink to="/profiles">
          <MoreView text="See more profiles…" />
        </RouterLink>
      </div>
    </FadeInOnScroll>

    <FadeInOnScroll>
      <div class="text-[16px] text-center font-light mt-[120px]">
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
  </div>
</template>

<script setup lang="ts">
import { FadeInOnScroll, TitlePart, MoreView, ProfileTable } from "@/views/components/common";
</script>
