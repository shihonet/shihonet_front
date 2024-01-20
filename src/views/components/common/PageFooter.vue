<template>
  <FadeInOnScroll>
    <div class="w-full bg-site-color px-6 py-6 text-white">
      <ul class="text-[20px]">
        <li class="pb-2">
          <router-link to="/about">#shihonetとは</router-link>
        </li>
        <li class="pb-2">
          <router-link to="/profiles">Profile</router-link>
        </li>
        <li class="pb-2">
          <router-link to="/blogs">Blogs</router-link>
        </li>
        <li class="pb-2">
          <router-link to="/histories">Histories</router-link>
        </li>
        <li class="pb-2">
          <a href="https://www.hinatazaka46.com/s/official/?ima=0000"
          >日向坂46 Official Web Site</a
          >
        </li>
      </ul>
      <img src="../../../assets/images/x-logo-black.png" class="mt-10 w-10" />
      <div class="mt-4 text-[8px] text-center">
        <p>© 2024 #shihonet, developing by @toshikyon_net.</p>
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
