<template>
  <AllBlogs :member="member" :page="page"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AllBlogs from "@/views/components/blogs/AllBlogs.vue";

export default defineComponent({
  components: { AllBlogs },
  data() {
    return {
      member: "shiho",
      page: 1
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
