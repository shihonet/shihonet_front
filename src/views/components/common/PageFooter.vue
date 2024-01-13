<template>
  <FadeInOnScroll>
    <div class="w-full gb-site-base-pink px-6 py-6">
      <ul class="text-[20px]">
        <li class="pb-1">Shiho Kato</li>
        <li class="pb-1">Kyoko Saito</li>
        <li class="pb-1">日向坂46オフィシャルサイト</li>
      </ul>
      <img src='../../../assets/x-logo-black.png' class="mt-10 w-10">
      <div class="mt-4 text-[8px] text-center">
        <p>© 2024 #shihonet, developing by @toshikyon_net.</p>
        <p>このサイトはSeed & Flower、SMEその他各種権利者から許諾等を得ているものではありません。</p>
      </div>
    </div>
  </FadeInOnScroll>
</template>

<script lang="ts">
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";

export default {
  name: 'PageHeader',
  components: {FadeInOnScroll}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
