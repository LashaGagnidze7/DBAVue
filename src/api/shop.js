import axios from "axios";
let products = [];

export default {
  async getProducts(url, limit, lang) {
    await axios
      .get(url, {
        params: {
          limit: limit,
          lang: lang,
        },
      })
      .then((res) => {
        products = res.data.data;
      });
    return products;
  },
};
