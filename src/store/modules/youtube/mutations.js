export default {
  addToYoutube({ youtube }, video) {
    video.id = youtube.length + 1;
    youtube.push(video);
  },
  removeFromYoutube({ youtube }, id) {
    const vid = youtube.find((video) => video.id === +id);
    youtube.splice(youtube.indexOf(vid), 1);
  },
  changeSearch(state, s) {
    state.search = s.toLowerCase();
  },
};
