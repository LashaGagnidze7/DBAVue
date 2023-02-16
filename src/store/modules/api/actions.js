import axios from "axios";

export default {
  fetchCurrencies({ commit }) {
    axios.get(process.env.VUE_APP_API_URL).then((res) => {
      commit("setCurrencies", res.data[0].currencies);
    });
  },
};