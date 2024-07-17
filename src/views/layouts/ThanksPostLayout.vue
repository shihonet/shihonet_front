<template>
  <FadeInOnScroll>
    <div class="mt-10 mb-10 mx-6">
      <TitlePart title="Generator" />
    </div>
  </FadeInOnScroll>
  <AllThanksPost />
</template>

<script setup lang="ts">
import { TitlePart, FadeInOnScroll } from "@/views/components/common";
import { AllThanksPost } from "@/views/components/thanksPost";
</script>
