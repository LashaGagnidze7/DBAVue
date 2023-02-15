const randomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const colorGenerator = () => {
  return `background-color: rgba(${randomNumber(256)}, ${randomNumber(
    256
  )}, ${randomNumber(256)}, ${Math.random()});`;
};

export default colorGenerator;
