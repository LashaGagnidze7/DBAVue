export default {
  setCurrencies(state, newCurrencies) {
    console.log(newCurrencies);
    state.currencies = newCurrencies.map(({ code, quantity, rate, name }) => {
      return {
        code,
        quantity,
        rate,
        name,
      };
    });
  },
};
