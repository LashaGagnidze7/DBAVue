export default {
  addToYoutube(state, video) {
    state.youtube.push(video);
  },
  removeFromYoutube(state, id) {
    const vid = state.youtube.find((video) => video.id === +id);
    state.youtube.splice(state.youtube.indexOf(vid), 1);
  },
  changeSearch(state, s) {
    state.search = s.toLowerCase();
  },
};
