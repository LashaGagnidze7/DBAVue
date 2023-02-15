const randomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const colorGenerator = () => {
  return `background-color: rgb(${randomNumber(256)}, ${randomNumber(
    256
  )}, ${randomNumber(256)});`;
};

export default colorGenerator;
