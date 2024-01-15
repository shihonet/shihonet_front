import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

createApp(App).use(router).mount("#app");

axios.defaults.withCredentials = true;
axios.defaults.baseURL =
    // prod
    "https://shihonet-api-29ca225d2dcb.herokuapp.com/";
    // local
    // "http://localhost:3001/";
