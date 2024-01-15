import { createRouter, createWebHistory } from "vue-router";
import TopPage from "../views/pages/TopPage.vue";
import ShihoPage from "@/views/pages/ShihoPage.vue";
import KyokoPage from "@/views/pages/KyokoPage.vue";
import KyokoBlogsPage from "@/views/pages/KyokoBlogsPage.vue";
import ShihoBlogsPage from "@/views/pages/ShihoBlogsPage.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: TopPage,
  },
  {
    path: "/shiho",
    name: "shiho",
    component: ShihoPage,
  },
  {
    path: "/kyoko",
    name: "kyoko",
    component: KyokoPage,
  },
  {
    path: "/shiho/blogs",
    name: "shihoBlogs",
    component: ShihoBlogsPage,
  },
  {
    path: "/kyoko/blogs",
    name: "kyokoBlogs",
    component: KyokoBlogsPage,
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
