import { createStore } from "vuex";
import youtube from "./modules/youtube";
import watchlist from "./modules/watchlist";

export default createStore({
  modules: {
    youtube,
    watchlist
  }
});
