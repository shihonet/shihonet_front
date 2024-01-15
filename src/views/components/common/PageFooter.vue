<template>
  <FadeInOnScroll>
    <div class="w-full gb-site-base-pink px-6 py-6">
      <ul class="text-[20px]">
        <li class="pb-1">
          <router-link to="/shiho">Shiho Kato</router-link>
        </li>
        <li class="pb-1">
          <router-link to="/kyoko">Kyoko Saito</router-link>
        </li>
        <li class="pb-1">
          <a href="https://www.hinatazaka46.com/s/official/?ima=0000"
            >日向坂46オフィシャルサイト</a
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
