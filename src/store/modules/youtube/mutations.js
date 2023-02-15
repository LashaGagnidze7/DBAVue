import colGen from "../../../utility";

export default {
  addToYoutube({ youtube }, { video, status = "old"}) {
    if (status === "new") {
      youtube.push({
        id: youtube.length + 1,
        ...video,
        cover: require("../../../assets/images/rock.png"),
        created_at: new Date().toLocaleDateString(),
        style: colGen(),
      });
    } else {
      youtube.push(video);
    }
  },
  removeFromYoutube({ youtube }, id) {
    const vid = youtube.find((video) => video.id === +id);
    youtube.splice(youtube.indexOf(vid), 1);
  },
  changeSearch(state, s) {
    state.search = s.toLowerCase();
  },
};
