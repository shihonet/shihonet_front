import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";

// INFO: store 永続化の persist の追加
const pinia = createPinia();
pinia.use(createPersistedState());

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");

axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRF-Token";
axios.defaults.baseURL =
    // prod
    "https://shihonet-api-29ca225d2dcb.herokuapp.com";
    // local
    // "http://localhost:3001";
