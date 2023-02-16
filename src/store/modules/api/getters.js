export default {
  getCurrencies({ currencies }) {
    return currencies;
  },
  getCurrencyByCode({ currencies }) {
    return (currCode) => {
      return currencies.find(({ code }) => code === currCode);
    };
  },
};
