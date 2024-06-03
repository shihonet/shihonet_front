import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(router).mount("#app");
app.use(createPinia());

axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRF-Token";
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
