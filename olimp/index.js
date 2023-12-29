const modal_menu = document.getElementById("modal_menu");
const modalContent = document.querySelector(".modal-content_menu");
const menuButton = document.getElementById("menuButton");

// Функция открытия и закрытия модального окна
function toggleModalMenu() {
  if (modal_menu.style.display === "block") {
    modal_menu.style.display = "none";
  } else {
    modal_menu.style.display = "block";
  }
}
// modal_nav Добавляем обработчик события для кнопки меню (открытия и закрытия модального окна)
menuButton.addEventListener("click", toggleModalMenu);

const modalNavElDop = document.getElementById("modal_nav_el_dop");
const modalBlocks = document.querySelector(".modal_blocks");
const modalNav = document.querySelector(".modal_nav");
let isVisible = false; // Флаг для отслеживания видимости блока

modalNavElDop.addEventListener("click", () => {
  if (isVisible) {
    modalBlocks.style.display = "none";
    modalNav.style.display = "block";
  } else {
    modalBlocks.style.display = "block";
    modalNav.style.display = "none";
  }
  isVisible = !isVisible; // Инвертировать флаг видимости
});

function coloreLine(point) {
  let test = document.getElementById("lines");
  let color = document.getElementById("color-lines");
  let oneStep = Math.round(test.clientWidth / 10); //шаг
  if (point < 0 || point > 10) {
    point = 1;
  } else if (point == 0) {
    color.style.display = "none";
  } else if (point == 10) {
    color.style.width = oneStep * point + "px";
  } else if (point) {
    // color.style.width = oneStep*point -(4*point)  +"px";
    color.style.width = oneStep * point + "px";
  }
}
coloreLine(2); //  допустимые от 1 до 10 ; 5-10-15-20... и тд до 50%

document.getElementById("number").onchange = function () {
  coloreLine(document.getElementById("number").value / 10);
};

// offsetWidth - это ширина блока, включая все padding, border, но без margin.
// clientWidth - это ширина блока, включая padding, но без border, margin и без scroll. Если блоки инлайновые, то ширина блока будет равна 0.
// getBoundingClientRect().width - это ширина блока высчитывается по принципу clientWidth, но даёт дробное число.

function coloreLine2(point) {
  let test = document.getElementById("linesmobil");
  let color = document.getElementById("colormobil-lines");
  let oneStep = Math.round(test.clientWidth / 10); //шаг
  if (point < 0 || point > 10) {
    point = 1;
  } else if (point == 0) {
    color.style.display = "none";
  } else if (point == 10) {
    color.style.width = oneStep * point + "px";
  } else if (point) {
    // color.style.width = oneStep*point -(4*point)  +"px";
    color.style.width = oneStep * point + "px";
  }
}
coloreLine(2);

document.getElementById("numbers").onchange = function () {
  coloreLine2(document.getElementById("numbers").value / 10);
};

document.getElementById("month-select").onchange = function () {
  let year = new Date().getFullYear(); // текущий год
  console.log(year);
  let month = document.getElementById("month-select").value;

  let date = new Date(year, month, 0);
  console.log(date.getDate());

  let days = document.getElementById("month-days");

  while (days.firstChild) {
    days.removeChild(days.firstChild);
  }

  for (let i = 1; i <= date.getDate(); i++) {
    let test = document.createElement("span");
    test.classList.add("month-select-text");

    // Добавлять совойства конкретным датам.
    if (i == 1 || i == 20) {
      test.classList.add("month-days-selectedRed");
      // test.style.color = "red";
    }

    test.textContent = i;
    days.appendChild(test);
  }
};
