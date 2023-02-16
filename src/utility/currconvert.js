export default (from, to, quantity) => {
  return (
    (to.quantity / to.rate / (from.quantity / from.rate)) *
    quantity
  ).toFixed(2);
};
