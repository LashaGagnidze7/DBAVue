import shop from "../../api/shop";

const state = {
  products: [],
  apiUrl: "http://items.magischer.de/api/products",
  limits: [5, 10, 15, 20],
  apiLimit: 5,
  langs: ["en", "ru", "ka"],
  apiLang: "en",
};

const getters = {
  getLimits(state) {
    return state.limits;
  },
  getLangs(state) {
    return state.langs;
  },
};

const actions = {
  async getProducts({ state, commit }) {
    commit(
      "setProducts",
      await shop.getProducts(state.apiUrl, state.apiLimit, state.apiLang)
    );
  },
};

const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  setApiUrl(state, url) {
    state.apiUrl = url;
  },
  setApiLimit(state, limit) {
    state.apiLimit = limit;
  },
  setApiLanguage(state, lang) {
    state.apiLang = lang;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
