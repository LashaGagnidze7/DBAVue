import { createApp } from "vue";
import App from "./components/App.vue";
import store from "../src/store";
import "./assets/main.css";
import router from "./router";
import plugin1 from "../src/plugins/plugin1";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(plugin1);
app.mount("#app");
