import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      watchlist: [],
    };
  },
  getters,
  mutations,
};
