import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import "primeicons/primeicons.css";
import { useUserSessionsStore } from "@/stores/userSessionsStore";
import VueCookies from "vue3-cookies";
import { useCookies } from "vue3-cookies";

// INFO: store 永続化の persist の追加
const pinia = createPinia();
pinia.use(createPersistedState());

const { cookies } = useCookies();

createApp(App)
  .use(router)
  .use(pinia)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .use(VueCookies)
  .use(ToastService)
  .component("Toast", Toast)
  .mount("#app");

axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-Csrf-Token";
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

// ログインユーザーの情報を取得
const userSessionsStore = useUserSessionsStore();

// Axiosのインターセプターを設定
axios.interceptors.request.use(
  (config) => {
    const token = cookies.get("shihonet_jwt_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

await userSessionsStore.requestGetUserSessions();
