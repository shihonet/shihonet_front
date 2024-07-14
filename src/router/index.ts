import { createRouter, createWebHistory, RouteLocationNormalized } from "vue-router";
import TopPage from "@/views/pages/TopPage.vue";
import BlogsPage from "@/views/pages/BlogsPage.vue";
import BlogsShowPage from "@/views/pages/BlogsShowPage.vue";
import ProfilesPage from "@/views/pages/ProfilesPage.vue";
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
    component: BlogsPage,
  },
  {
    path: "/blogs/:id(\\d+)", // MEMO: (\\d+)を付ければパラメータには数字しか入らない正規表現となる
    component: BlogsShowPage,
    props: (route: { params: { id: string } }) => ({ id: Number(route.params.id) }),
  },
  {
    path: "/profiles",
    component: ProfilesPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/histories",
    component: HistoriesPage,
  },
  {
    path: "/thanks_post",
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
