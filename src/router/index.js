import { createRouter, createWebHistory } from "vue-router";
import Youtube from "../views/Youtube.vue";
import Watchlist from "../views/Watchlist.vue";
import AddVideo from "../views/AddVideo.vue";
import Video from "../views/Video.vue";
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
    component: Video 
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
