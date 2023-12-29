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

// let brands = new Map([
//     ["BMW", new Map[
//         ["X6", new Map [
//             ["V6", ]
//         ]],
//         ["X5"],
//         ["E34"]
//     ]],
//     ["VAG", new Map[

//     ]],
//     ["Lincoln",new Map[

//     ]]
// ]
// )

let brands = {
  Классика: {},
  Спортивный: {},
  Этно: {},
  Романтический: {},
  Этно: {},
  Современный: {},
};

let cloth = {
  Футболка: {},
  Свитшот: {},
  Кофта: {},
  Кроссовки: {},
  Спортивные_штаны: {},
};

let style = {
  Классика: {},
  Спортивный: {},
  Этно: {},
  Романтический: {},
  Этно: {},
  Современный: {},
};

let star = {
  Леонель_Месси: {},
  Диего_Марадона: {},
  Хуан_Себастьян_Верон: {},
  Вальтер_Самуэль: {},
  Эрнан_Креспо: {},
};

let brandSelect = document.getElementById("brand");
let clothSelect = document.getElementById("cloth");
let styleSelect = document.getElementById("style");
let starSelect = document.getElementById("star");

// let modelSelect = document.getElementById("model");
// let equipSelect = document.getElementById("equip");

brandSelect.addEventListener("click", function (event) {
  if (brandSelect.length <= 1) {
    for ([brand, model] of Object.entries(brands)) {
      let OptionSelect = document.createElement("option");
      OptionSelect.innerHTML = brand;
      brandSelect.append(OptionSelect);
    }
  }
});

styleSelect.addEventListener("click", function (event) {
  if (styleSelect.length <= 1) {
    for ([style, model] of Object.entries(style)) {
      let OptionSelect = document.createElement("option");
      OptionSelect.innerHTML = style;
      styleSelect.append(OptionSelect);
    }
  }
});

clothSelect.addEventListener("click", function (event) {
  if (clothSelect.length <= 1) {
    for ([cloth, model] of Object.entries(cloth)) {
      let OptionSelect = document.createElement("option");
      OptionSelect.innerHTML = cloth;
      clothSelect.append(OptionSelect);
    }
  }
});

starSelect.addEventListener("click", function (event) {
  if (starSelect.length <= 1) {
    for ([star, model] of Object.entries(star)) {
      let OptionSelect = document.createElement("option");
      OptionSelect.innerHTML = star;
      starSelect.append(OptionSelect);
    }
  }
});

// modelSelect.addEventListener("click", function (event) {
//     let currentBrand = brandSelect.value;

//     if (brands.hasOwnProperty(currentBrand) && modelSelect.length <= 1) {
//         for (model of Object.keys(brands[currentBrand])) {
//             let OptionSelect = document.createElement("option");
//             OptionSelect.innerHTML = model;
//             modelSelect.append(OptionSelect);
//         }
//     }
//     equipSelect.innerHTML = "<option selected disabled>Выберите марку авто</option>";
// });

// equipSelect.addEventListener("click", function (event) {
//     let currentModel = modelSelect.value;
//     let currentBrand = brandSelect.value;
//     if ( brands[currentBrand].hasOwnProperty(modelSelect.value) && equipSelect.length <= 1) {
//         for (equip of Object.values(brands[currentBrand][currentModel])) {
//             let OptionSelect = document.createElement("option");
//             OptionSelect.innerHTML = equip;
//             equipSelect.append(OptionSelect);
//         }
//     }
// });
