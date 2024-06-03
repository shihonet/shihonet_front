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

axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRF-Token";
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

// CSRFトークンをメタタグから取得してAxiosに設定
const metaTag = document.querySelector('meta[name="csrf-token"]');
if (metaTag) {
    const csrfToken = metaTag.getAttribute('content');
    if (csrfToken) {
        axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
    } else {
        console.error("CSRF token meta tag found, but content attribute is missing.");
    }
} else {
    console.error("CSRF token meta tag is missing.");
}

app.mount("#app");
