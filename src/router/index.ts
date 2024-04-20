import { createRouter, createWebHistory, RouteLocationNormalized } from "vue-router";
import TopPage from "@/views/pages/TopPage.vue";
import BlogsPage from "@/views/pages/BlogsPage.vue";
import ProfilePage from "@/views/pages/ProfilePage.vue";
import AboutPage from "@/views/pages/AboutPage.vue";
import HistoriesPage from "@/views/pages/HistoriesPage.vue";
import ThanksPostPage from "@/views/pages/ThanksPostPage.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: TopPage,
  },
  {
    path: "/blogs",
    name: "blogs",
    component: BlogsPage,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfilePage,
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
    path: "/thanks_post",
    name: "thanks_post",
    component: ThanksPostPage,
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

// Google Analyticsへのページビュー送信を設定
router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  // Google Analyticsページビューを送信
  gtag('config', 'G-SKEEGTRD4W', {
    page_path: to.path,
  });
});

export default router;
