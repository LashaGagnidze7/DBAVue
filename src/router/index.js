import { createRouter, createWebHistory } from "vue-router";
import { Youtube, Watchlist, AddVideo, Video, Api } from "../loader";

const routes = [
  {
    path: "/",
    name: "Youtube",
    component: Youtube,
  },
  {
    path: "/watchlist",
    name: "Watchlist",
    component: Watchlist,
  },
  {
    path: "/add-video",
    name: "AddVideo",
    component: AddVideo,
  },
  {
    path: "/:id",
    name: "Video",
    component: Video,
  },
  {
    path: "/api",
    name: "Api",
    component: Api,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.APP_VUE_BASE_URL),
  routes,
});
export default router;
