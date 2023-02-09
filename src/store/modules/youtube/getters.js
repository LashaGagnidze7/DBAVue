export default {
  getYoutube({youtube, search}) {
    return youtube.filter(
      (video) =>
        video.name.toLowerCase().includes(search) ||
        video.description.toLowerCase().includes(search)
    );
  },
};
