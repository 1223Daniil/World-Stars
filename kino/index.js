function openBurger() {
  let burger = document.getElementById("burger");
  burger.classList.add("burger__open");
  console.log(burger);
}

function closeBurger() {
  document.getElementById("burger").classList.remove("burger__open");
  console.log(document.getElementById("burger"));
}

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".sortDate_button_group button");
  let select = document.getElementById("sport");

  function setActive(element) {
    // Удаление класса "active" у всех элементов
    buttons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    select.classList.remove("active");

    // Добавление класса "active" к текущему элементу
    element.classList.add("active");
  }

  // Обработчики событий для кнопок
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      setActive(button);
    });
  });

  // Обработчик события для выбора в <select>
  select.addEventListener("change", function () {
    setActive(select);
  });
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

// Swiper
let Options1 = {
  direction: "horizontal",
  loop: false,
  allowTouchMove: true,
  navigation: {
    nextEl: ".slider1-arrow-right",
    prevEl: ".slider1-arrow-left",
  },
  slidesPerView: 1,
  spaceBetween: 0,
};
let Options2 = {
  direction: "horizontal",
  loop: false,
  allowTouchMove: true,
  navigation: {
    nextEl: ".slider2-arrow-right",
    prevEl: ".slider2-arrow-left",
  },
  slidesPerView: 1,
  spaceBetween: 0,
};
let Options3 = {
  direction: "horizontal",
  loop: false,
  allowTouchMove: true,
  navigation: {
    nextEl: ".slider3-arrow-right",
    prevEl: ".slider4-arrow-left",
  },
  slidesPerView: 1,
  spaceBetween: 0,
};
new Swiper(".swiper1", Options1);
new Swiper(".swiper2", Options2);
new Swiper(".swiper3", Options3);
