import { createApp } from "vue";
import App from "./components/App.vue";
import store from "../src/store";
import "./assets/main.css";
import router from "./router";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
