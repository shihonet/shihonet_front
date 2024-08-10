<template>
  <!-- サイドバー開封前 -->
  <div class="flex items-center mr-4">
    <i
      class="pi pi-bars hover:cursor-pointer"
      style="color: black"
      @click="toggleSidebar"
    ></i>
  </div>

  <!-- サイドバー開封後 -->
  <div
    id="sidebar"
    v-if="isSidebarOpen"
    class="fixed z-50 inset-0 overflow-y-auto"
  >
    <div class="flex justify-between pl-4 bg-white">
      <div class="ml-2 my-1">
        <RouterLink to="/" @click="toggleSidebar">
          <img src="@/assets/images/header_logo.svg" class="w-[160px]" />
        </RouterLink>
      </div>
      <div class="flex items-center mr-4">
        <i
          class="pi pi-times hover:cursor-pointer"
          style="color: black"
          @click="toggleSidebar"
        ></i>
      </div>
    </div>
    <div class="border-b-2 border-site-color"></div>
    <FadeInOnScroll>
      <ul class="mt-10 mx-6 text-[24px]">
        <li>
          <RouterLink
            to="/profiles"
            @click="toggleSidebar"
            class="flex items-center mb-5"
          >
            <i
              class="mr-2 pi pi-user"
              style="color: #333333; font-size: 28px"
            ></i>
            <span class="ml-2">Profiles</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/blogs"
            @click="toggleSidebar"
            class="flex items-center mb-5"
          >
            <i
              class="mr-2 pi pi-pencil"
              style="color: #333333; font-size: 28px"
            ></i>
            <span class="ml-2">Blogs</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/histories"
            @click="toggleSidebar"
            class="flex items-center mb-5"
          >
            <i
              class="mr-2 pi pi-history"
              style="color: #333333; font-size: 28px"
            ></i>
            <span class="ml-2">Histories</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/about"
            @click="toggleSidebar"
            class="flex items-center mb-5"
          >
            <i
              class="mr-2 pi pi-question-circle"
              style="color: #333333; font-size: 28px"
            ></i>
            <span class="ml-2">About "#shihonet"</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/thanks_post"
            @click="toggleSidebar"
            class="flex items-center mb-5"
          >
            <i
              class="mr-2 pi pi-star"
              style="color: #333333; font-size: 28px"
            ></i>
            <span class="ml-2">Thanks Generator</span>
          </RouterLink>
        </li>
        <li>
          <a
            href="https://www.hinatazaka46.com/s/official/?ima=0000"
            class="flex items-center mb-5"
            target="_blank"
          >
            <i
              class="mr-2 pi pi-sun"
              style="color: #333333; font-size: 28px"
            ></i>
            <span class="ml-2">日向坂46 Official Web Site</span>
          </a>
        </li>
      </ul>
    </FadeInOnScroll>
  </div>
</template>

<script setup lang="ts">
import { FadeInOnScroll } from "@/views/components/common";
import { computed, ref } from "vue";
import { useUserSessionsStore } from "@/stores/userSessionsStore";

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const userSessionsStore = useUserSessionsStore();
</script>

<style scoped>
#sidebar {
  /* Google fontsで導入したいfontsからfont-familyを取ってくる */
  font-family: "M PLUS Rounded 1c", sans-serif;
  max-width: 480px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  font-weight: bold;
  background-color: rgba(97, 151, 255, 0.8);
}
</style>
