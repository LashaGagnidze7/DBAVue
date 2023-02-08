export default {
  getYoutube(state) {
    return state.youtube.filter(
      (video) =>
        video.name.toLowerCase().includes(state.search) ||
        video.description.toLowerCase().includes(state.search)
    );
  },
};
