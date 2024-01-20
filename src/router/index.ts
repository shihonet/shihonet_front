import { createRouter, createWebHistory } from "vue-router";
import Page from "@/views/pages/TopPage.vue";
import BlogsPage from "@/views/pages/BlogsPage.vue";
import ProfilesPage from "@/views/pages/ProfilesPage.vue";
import AboutPage from "@/views/pages/AboutPage.vue";
import HistoriesPage from "@/views/pages/HistoriesPage.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Page,
  },
  {
    path: "/blogs",
    name: "blogs",
    component: BlogsPage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/histories",
    name: "histories",
    component: HistoriesPage,
  },
  {
    path: "/profiles",
    name: "profiles",
    component: ProfilesPage,
  },
  {
    // 未定義のURLをルートにリダイレクト
    path: "/:catchAll(.*)",
    redirect: { name: "main" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
      };
    }
  },
});

export default router;
