import { createApp } from "vue";
import App from "./components/App.vue";
import store from "../src/store";
import "./assets/main.css";

const app = createApp(App);
app.use(store);
app.mount("#app");
