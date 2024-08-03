<template>
  <FadeInOnScroll>
    <div class="mt-10 mb-10 mx-6">
      <TitlePart title="Histories" />
    </div>
  </FadeInOnScroll>
  <AllHistories />
</template>

<script setup lang="ts">
import { FadeInOnScroll, TitlePart } from "@/views/components/common";
import { AllHistories } from "@/views/components/histories";
</script>
