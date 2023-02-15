const randNum = () => {
  const maxRGB = 256
  return Math.floor(Math.random() * maxRGB);
};

export default () => {
  return `background-color: rgba(${randNum()}, ${randNum()}, ${randNum()}, ${Math.random()});`;
};
