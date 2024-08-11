<template>
  <BaseModal>
    <!-- モーダル内部の要素 -->
    <img src="@/assets/images/20240812_release_info.png" />
  </BaseModal>

  <FadeInOnScroll>
    <img src="@/assets/images/top_image.png" />
  </FadeInOnScroll>
  <TopProfiles />
  <TopSchedules />
  <TopBlogs />
</template>

<script setup lang="ts">
import { FadeInOnScroll, BaseModal } from "@/views/components/common";
import { TopProfiles, TopBlogs, TopSchedules } from "@/views/components/top";
</script>
