// function openBurger() {
//     let burger = document.getElementById('burger');
//     burger.classList.add('burger__open');
//     console.log(burger)
// }

// function closeBurger() {
//     document.getElementById('burger').classList.remove('burger__open');
//     console.log(document.getElementById('burger'))
// }

function redStarSelect(element) {
  let wrap = element.parentNode;
  let titleSpan = wrap.firstElementChild;

  if (titleSpan.style.color == "red") {
    titleSpan.style.color = "black";
    wrap.children[2].src = "image-home/Starcartwhite.png";
  } else {
    titleSpan.style.color = "red";
    wrap.children[2].src = "image-home/Starcartred.png";
    wrap.children[2].src = "image-home/Starcart.png";
  }
}

function redStarSelectMob(element) {
  let wrap = element.parentNode;
  let titleSpan = wrap.firstElementChild;
  let t = wrap.querySelector(".cartsmobil__wrapper-item-star");

  if (titleSpan.style.color == "red") {
    titleSpan.style.color = "black";
    t.classList.add("cartsmobil__wrapper-item-star-hide");
  } else {
    titleSpan.style.color = "red";
    t.classList.remove("cartsmobil__wrapper-item-star-hide");
  }
}

function burgerToggle() {
  let burger = document.getElementById("burger");
  burger.classList.toggle("burger__open");
}

function selectSportToggle() {
  let SelectSport = document.getElementById("select-sport");
  SelectSport.classList.toggle("select-sport--open");
}

// SWIPER
let Options = {
  direction: "horizontal",
  loop: false,
  allowTouchMove: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  slidesPerView: 5,
  spaceBetween: 8,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      // slideToClickedSlide: true,
      // centeredSlides: true,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 72,
      // slideToClickedSlide: true,
      // centeredSlides: true,
    },
    1250: {
      slidesPerView: 5,
      spaceBetween: 32,
      // slideToClickedSlide: true,
    },
  },
};

// swiper1
let test = new Swiper(".swiper", Options);

let counterSelect = 0;
function friendsSelect(e) {
  if (e.classList.contains("friends__grid-image-selected")) {
    counterSelect--;
  } else {
    counterSelect++;
  }
  e.classList.toggle("friends__grid-image-selected");

  let test = document.getElementById("carts__page--selected");
  test.textContent = counterSelect;
}

// pages

function prevPage() {
  let page = document.getElementById("carts__page--selected-stars");
  if (page.textContent == "1") {
    return;
  }
  page.textContent = page.textContent - 1;
}

function nextPage() {
  let page = document.getElementById("carts__page--selected-stars");
  page.textContent = +page.textContent + 1;
}

function bottomMenuSelect(element) {
  // bottom-video-menu__button--selected
  let buttons = document.querySelectorAll(".bottom-video-menu__button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("bottom-video-menu__button--selected");
  }
  element.classList.add("bottom-video-menu__button--selected");

  console.log(element.childNodes[1].textContent);
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
function ChangeActive(groupbt) {
  let buttons = document.querySelectorAll(groupbt);

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Удаление класса "active" у всех кнопок
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // Добавление класса "active" к кнопке, по которой был клик
      button.classList.add("active");
    });
  });
}
ChangeActive(".choice__wrapper-country-item");
