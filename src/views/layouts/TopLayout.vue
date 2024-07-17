<template>
  <BaseModal>
    <InitialModal />
  </BaseModal>

  <FadeInOnScroll>
    <img src="@/assets/images/top_image.png" />
  </FadeInOnScroll>
  <TopProfiles />
  <TopSchedules />
  <TopBlogs />
</template>

<script setup lang="ts">
import { FadeInOnScroll } from "@/views/components/common";
import { TopProfiles, TopBlogs, TopSchedules, InitialModal } from "@/views/components/top";
</script>
