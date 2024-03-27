<template>
  <FadeInOnScroll>
    <div class="w-full bg-site-color px-8 pt-10 pb-10 text-white">
      <ul class="text-[20px] font-bold">
        <li class="pb-4">
          <router-link to="/blogs">Blogs</router-link>
        </li>
        <li class="pb-4">
          <router-link to="/histories">Histories</router-link>
        </li>
        <li class="pb-4">
          <router-link to="/about">About "#shihonet"</router-link>
        </li>
        <li class="pb-4">
          <router-link to="/thanks_post">Thanks Generator</router-link>
        </li>
        <li class="pb-4">
          <a href="https://www.hinatazaka46.com/s/official/?ima=0000"
          >日向坂46 Official Web Site</a
          >
        </li>
      </ul>
      <div class="mt-14 text-[8px] text-center">
        <p>© 2024 #shihonet, developing by @shihonet.</p>
        <p>
          このサイトはSeed & Flowerその他各種権利者から許諾等を得ているものではありません。
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
