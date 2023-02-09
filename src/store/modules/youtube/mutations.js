export default {
  addToYoutube({youtube}, video) {
    youtube.push(video);
  },
  removeFromYoutube({youtube}, id) {
    const vid = youtube.find((video) => video.id === +id);
    youtube.splice(youtube.indexOf(vid), 1);
  },
  changeSearch(state, s) {
    state.search = s.toLowerCase();
  },
};
