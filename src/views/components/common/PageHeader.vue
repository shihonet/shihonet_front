<template>
  <div class="sticky z-50 w-full top-0">
    <div class="flex justify-between pl-4 bg-white">
      <div class="ml-2 my-1">
        <RouterLink to="/">
          <img src="@/assets/images/shihonet_logo.svg" class="w-[160px]" />
        </RouterLink>
      </div>
      <SideBar />
    </div>
    <div class="border-b-2 border-site-color"></div>
  </div>
</template>

<script setup lang="ts">
import { SideBar } from "@/views/components/common";
</script>
