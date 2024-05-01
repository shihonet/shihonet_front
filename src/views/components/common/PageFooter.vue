<template>
  <FadeInOnScroll>
    <div class="w-full bg-site-color px-8 pt-10 pb-10 text-white">
      <ul class="text-[20px] font-normal">
        <li class="pb-4">
          <RouterLink to="/profiles" class="hover:opacity-80">Profiles</RouterLink>
        </li>
        <li class="pb-4">
          <RouterLink to="/blogs" class="hover:opacity-80">Blogs</RouterLink>
        </li>
        <li class="pb-4">
          <RouterLink to="/histories" class="hover:opacity-80">Histories</RouterLink>
        </li>
        <li class="pb-4">
          <RouterLink to="/about" class="hover:opacity-80">About "#shihonet"</RouterLink>
        </li>
        <li class="pb-4">
          <RouterLink to="/thanks_post" class="hover:opacity-80">Thanks Generator</RouterLink>
        </li>
        <li class="pb-4">
          <a href="https://www.hinatazaka46.com/s/official/?ima=0000" class="hover:opacity-80" target="_blank">
            日向坂46 Official Web Site
          </a>
        </li>
      </ul>
      <div class="mt-10 text-[16px]">
        <div class="">〜他ファンサイト〜</div>
        <ul class="ml-2">
          <li class="mt-1 underline hover:opacity-80">
            <a href="https://nibuparu2286.wixsite.com/mysite" target="_blank">#nibupage（丹生明里さん/日向坂46）</a>
          </li>
          <li class="mt-1 underline hover:opacity-80">
            <a href="https://ruinu6446.wixsite.com/my-site-3" target="_blank">#kyonkosite（齊藤京子さん）</a>
          </li>
        </ul>
      </div>
      <div class="mt-16 text-[8px] text-center">
        <p>© 2024 #shihonet, developing by @shihonet.</p>
        <p>
          このサイトは、Seed & Flower合同会社その他各種権利者から許諾等を得ているものではありません。
        </p>
      </div>
    </div>
  </FadeInOnScroll>
</template>

<script lang="ts">
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { FadeInOnScroll },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
