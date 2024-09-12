import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
} from "vue-router";
import {
  TopLayout,
  AboutLayout,
  HistoriesLayout,
  ProfilesLayout,
  SignupLayout,
  BlogsLayout,
  BlogsShowLayout,
  LoginLayout,
  ThanksPostLayout,
  MessageFormLayout,
  MessageSentVerifiedLayout,
} from "@/views/layouts";

const routes = [
  {
    path: "/",
    name: "main",
    component: TopLayout,
  },
  {
    path: "/blogs",
    component: BlogsLayout,
  },
  {
    path: "/blogs/:id(\\d+)", // MEMO: (\\d+)を付ければパラメータには数字しか入らない正規表現となる
    component: BlogsShowLayout,
    props: (route: { params: { id: string } }) => ({
      id: Number(route.params.id),
    }),
  },
  {
    path: "/profiles",
    component: ProfilesLayout,
  },
  {
    path: "/about",
    component: AboutLayout,
  },
  {
    path: "/histories",
    component: HistoriesLayout,
  },
  {
    path: "/thanks_post",
    component: ThanksPostLayout,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupLayout,
  },
  {
    path: "/login",
    name: "login",
    component: LoginLayout,
  },
  {
    path: "/graduation",
    children: [
      {
        path: "messages",
        children: [
          {
            path: "form/AfOT3voj",
            component: MessageFormLayout,
          },
          {
            path: "sent_verified/ORDypUSr",
            component: MessageSentVerifiedLayout,
          },
        ],
      },
    ],
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
router.afterEach((to: RouteLocationNormalized) => {
  // Google Analyticsページビューを送信
  gtag("config", "G-SKEEGTRD4W", {
    page_path: to.path,
  });
});

export default router;
