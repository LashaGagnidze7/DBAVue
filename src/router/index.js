import { createRouter, createWebHistory } from "vue-router";
import { Youtube, Watchlist, AddVideo, Video } from "../loader";

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
    component: Video,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
