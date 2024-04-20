<template>
  <!-- サイドバー開封前 -->
  <div class="flex items-center mr-4" @click="toggleSidebar">
    <img src="@/assets/images/menu_FILL0_wght400_GRAD0_opsz24.svg" />
  </div>

  <!-- サイドバー開封後 -->
  <div
    id="sidebar"
    v-if="this.isSidebarOpen"
    class="fixed z-50 inset-0 overflow-y-auto"
  >
    <div class="flex justify-between pl-4 bg-white">
      <div class="ml-2 my-1">
        <RouterLink to="/" @click="toggleSidebar">
          <img src="@/assets/images/header_logo.svg" class="w-[160px]" />
        </RouterLink>
      </div>
      <div class="flex items-center mr-4" @click="toggleSidebar">
        <img src="@/assets/images/close_FILL0_wght400_GRAD0_opsz24.svg" />
      </div>
    </div>
    <div class="border-b-2 border-site-color"></div>
    <FadeInOnScroll>
      <ul class="mt-10 mx-6 text-[24px]">
        <li>
          <RouterLink to="/profiles" @click="toggleSidebar" class="flex items-center mb-5">
            <img src="@/assets/images/photo_camera_front_FILL0_wght100_GRAD-25_opsz48.svg" />
            <span class="ml-2">Profiles</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/blogs" @click="toggleSidebar" class="flex items-center mb-5">
            <img src="@/assets/images/stylus_note_FILL0_wght100_GRAD0_opsz48.svg" />
            <span class="ml-2">Blogs</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/histories" @click="toggleSidebar" class="flex items-center mb-5">
            <img src="@/assets/images/history_FILL0_wght100_GRAD0_opsz48.svg" />
            <span class="ml-2">Histories</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about" @click="toggleSidebar" class="flex items-center mb-5">
            <img src="@/assets/images/indeterminate_question_box_FILL0_wght100_GRAD0_opsz48.svg" />
            <span class="ml-2">About "#shihonet"</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/thanks_post" @click="toggleSidebar" class="flex items-center mb-5">
            <img src="@/assets/images/folded_hands_FILL0_wght100_GRAD0_opsz48.svg" />
            <span class="ml-2">Thanks Generator</span>
          </RouterLink>
        </li>
        <li>
          <a href="https://www.hinatazaka46.com/s/official/?ima=0000" class="flex items-center mb-5">
            <img src="@/assets/images/clear_day_FILL0_wght100_GRAD0_opsz48.svg" />
            <span class="ml-2">日向坂46 Official Web Site</span>
          </a>
        </li>
      </ul>
    </FadeInOnScroll>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";

export default defineComponent({
  components: { FadeInOnScroll },
  data() {
    return {
      isSidebarOpen: false, // サイドバーの開閉状態
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
});
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
