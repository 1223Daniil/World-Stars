function openBurger() {
  let burger = document.getElementById("burger");
  burger.classList.toggle("burger__open");
}

function selectSportToggle() {
  let SelectSport = document.getElementById("select-sport");
  SelectSport.classList.toggle("select-sport--open");
}

function removeBackground() {
  let body = document.getElementById("wallpaper");

  body.classList.remove("backgroundColor0");
  body.classList.remove("backgroundColor1");
  body.classList.remove("backgroundColor2");
  body.classList.remove("backgroundColor3");
  body.classList.remove("backgroundColor4");
  body.classList.remove("backgroundColor5");
}

function changeColor(element) {
  let t = element.attributes.id.value;
  let body = document.getElementById("wallpaper");
  removeBackground();
  switch (t) {
    case "1":
      body.classList.add("backgroundColor1");
      console.log(t, body.classList);
      break;
    case "2":
      body.classList.add("backgroundColor2");
      console.log(t, body.classList);
      break;
    case "3":
      body.classList.add("backgroundColor3");
      console.log(t, body.classList);
      break;
    case "4":
      body.classList.add("backgroundColor4");
      console.log(t, body.classList);
      break;
    case "5":
      body.classList.add("backgroundColor5");
      console.log(t, body.classList);
      break;
    default:
      body.classList.add("backgroundColor0");
      console.log(t, body.classList);
      break;
  }
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
ChangeActive(".form__viborfon-container-item");
