<template>
  <div class="sticky z-50 w-full top-0">
    <div class="flex justify-between pl-4 bg-white">
      <div class="ml-2 my-1">
        <router-link to="/">
          <img src="@/assets/images/header_logo.svg" class="w-[160px]" />
        </router-link>
      </div>
      <SideBar />
    </div>
    <div class="border-b-2 border-site-color"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "@/views/components/common/SideBar.vue";

export default defineComponent({
  components: { SideBar }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
