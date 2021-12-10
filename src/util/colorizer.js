import { randomNumber } from "./randomNumber";

export const colorizeTextsAndBackground = () => {
  const elementList = [
    {
      isColor: true,
      selector: "leftIcon",
    },
    {
      isColor: true,
      selector: "rightIcon",
    },
    {
      isColor: false,
      selector: "authorList",
    },
    {
      isColor: false,
      selector: "button",
    },
  ];
  const rgbV1 = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;

  elementList.forEach(
    (element) =>
      (document.querySelector(`.${element.selector}`).style[
        element.isColor ? "color" : "backgroundColor"
      ] = rgbV1)
  );

  document.body.style.background = rgbV1;
};
