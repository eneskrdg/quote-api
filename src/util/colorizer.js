import { randomNumber } from "./randomNumber";

export const colorizeTextsAndBackground = () => {
  const elementList = [
    {
      isColor: true,
      selector: "d",
    },
    {
      isColor: true,
      selector: "c",
    },
    {
      isColor: false,
      selector: "listt",
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
