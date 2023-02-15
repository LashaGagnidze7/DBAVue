import youtube from "../modules/youtube";
import watchlist from "../modules/watchlist";
import api from "../modules/api";

export default (store) => {
  store.registerModule("youtube", youtube);
  store.registerModule("watchlist", watchlist);
  store.registerModule("api", api);
};
