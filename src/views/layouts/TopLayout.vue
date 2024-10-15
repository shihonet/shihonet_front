<template>
  <Transition>
    <div
      v-if="show"
      class="max-w-[480px] fixed z-[9999] h-full bg-white flex justify-center items-center"
    >
      <img src="@/assets/images/shihonet_ogp.png" class="w-full" />
    </div>
  </Transition>

  <!--  <BaseModal> -->
  <!--    モーダル内部の要素 -->
  <!--  </BaseModal> -->

  <FadeInOnScroll>
    <img src="@/assets/images/top_image.png" />
  </FadeInOnScroll>

  <TopProfiles class="mt-32" />
  <TopSchedules />
  <TopBlogs />
</template>

<script setup lang="ts">
import { FadeInOnScroll /**, BaseModal*/ } from "@/views/components/common";
import { TopProfiles, TopBlogs, TopSchedules } from "@/views/components/top";
import { onMounted, ref } from "vue";

const show = ref(true);

onMounted(() => {
  show.value = false;
});
</script>
