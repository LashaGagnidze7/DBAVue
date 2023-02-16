import youtube from "../modules/youtube";
import watchlist from "../modules/watchlist";

export default (store) => {
  store.registerModule("youtube", youtube);
  store.registerModule("watchlist", watchlist);
};
