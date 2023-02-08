export default {
  addToWatchlist(state, video) {
    state.watchlist.push(video);
  },
  removeFromWatchlist(state, id) {
    const vid = state.watchlist.find((video) => video.id === +id);
    state.watchlist.splice(state.watchlist.indexOf(vid), 1);
  },
};
