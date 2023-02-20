import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes"

const router = createRouter({
  history: createWebHistory(process.env.APP_VUE_BASE_URL),
  routes,
});
export default router;
