<template>
  <BaseModal>
    <!-- モーダル内部の要素 -->
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
