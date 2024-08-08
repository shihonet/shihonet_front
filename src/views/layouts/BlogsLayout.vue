<template>
  <FadeInOnScroll>
    <div class="mt-10 mb-10 mx-6">
      <TitlePart title="#shihoblog" />
    </div>
  </FadeInOnScroll>
  <AllBlogs />
</template>

<script setup lang="ts">
import { AllBlogs } from "@/views/components/blogs";
import { FadeInOnScroll, TitlePart } from "@/views/components/common";
</script>
