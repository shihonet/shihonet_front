<template>
  <AllShowBlogs :id="props.id" />
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { AllShowBlogs } from "@/views/components/blogs";

const props = withDefaults(defineProps<{
  id: number;
}>(), {
  id: 0,
});
</script>
