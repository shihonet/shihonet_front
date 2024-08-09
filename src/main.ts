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

const pinia = createPinia();
pinia.use(createPersistedState());

axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRF-TOKEN";
axios.defaults.baseURL =
  process.env.VUE_APP_API_BASE_URL || "http://localhost:3001";

initializeApp();

async function initializeApp() {
  const userSessionsStore = useUserSessionsStore();
  await userSessionsStore.requestGetUserSessions();

  const csrfToken = userSessionsStore.getCsrfToken;
  axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

  createApp(App)
    .use(router)
    .use(pinia)
    .use(PrimeVue, {
      theme: {
        preset: Aura,
      },
    })
    .use(ToastService)
    .component("Toast", Toast)
    .mount("#app");
}
