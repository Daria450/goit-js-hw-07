function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector(".create");
const destroy = document.querySelector(".destroy");
const inputNumber = document.querySelector("#controls>input");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", onCreateClick);
destroy.addEventListener("click", onDestroyClick);


function createBoxes(amount) {
  if (amount > 0 && amount <= 1000) {
    const markupArray = [];
    let width = 30;
    for (let i = 1; i <= amount; i++) {
      markupArray.push(`<div style ="background-color: ${getRandomHexColor()}; width:${width}px; height:${width}px"></div>`);
      width += 10;
    }
    return markupArray;
  }
}

function onCreateClick() {
  boxes.innerHTML = null;
  const markup = createBoxes(inputNumber.value).join(" ");
  boxes.insertAdjacentHTML("beforeend", markup);
  inputNumber.value = null;
}

function onDestroyClick() {
  boxes.innerHTML = null;
}


