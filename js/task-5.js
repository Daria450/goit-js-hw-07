const body = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


btnChangeColor.addEventListener("click", onBtnChangeColor);

function onBtnChangeColor() {
  const color = getRandomHexColor();
  spanColor.textContent = color;
  body.style.backgroundColor = color;
}
