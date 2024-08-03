<template>
  <FadeInOnScroll>
    <div class="mt-10">
      <TitlePart title="#shihonet club" />
    </div>
  </FadeInOnScroll>
  <AllLogin />
</template>

<script setup lang="ts">
import { FadeInOnScroll, TitlePart } from "@/views/components/common";
import { AllLogin } from "@/views/components/login";
</script>
