<template>
  <AllShowBlogs :id="id" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AllShowBlogs from "@/views/components/blogs/show/AllShowBlogs.vue";
export default defineComponent({
  components: { AllShowBlogs },
  props: { id: Number },
});
</script>
