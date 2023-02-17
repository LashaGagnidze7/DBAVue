export default {
  addToWatchlist({ watchlist }, video) {
    watchlist.push(video);
  },
  removeFromWatchlist({ watchlist }, id) {
    const vid = watchlist.find((video) => video.id === +id);
    watchlist.splice(watchlist.indexOf(vid), 1);
  },
};
