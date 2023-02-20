const routes = [
  {
    path: "/",
    name: "Youtube",
    component: import("../views/Youtube"),
  },
  {
    path: "/watchlist",
    name: "Watchlist",
    component: import("../views/Watchlist"),
  },
  {
    path: "/add-video",
    name: "AddVideo",
    component: import("../views/AddVideo"),
  },
  {
    path: "/:id",
    name: "Video",
    component: import("../views/Video"),
  },
  {
    path: "/api",
    name: "Api",
    component: import("../views/Api"),
  },
];

export default routes;