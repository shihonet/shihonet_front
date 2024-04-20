<template>
  <div class="mx-6">
    <AllProfile />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AllProfile from "@/views/components/profile/AllProfile.vue";

export default defineComponent({
  components: { AllProfile },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
