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

function scrollDown() {
  const chatBody = document.getElementById("chat-body");
  chatBody.scrollTop = chatBody.scrollHeight;
}

function createElementMessage(text) {
  const newMessage = document.createElement("div");
  newMessage.classList.add("chats-message-container-left");
  newMessage.textContent = text;
  const decore = document.createElement("div");
  decore.classList.add("left-triangle");
  decore.classList.add("left");
  newMessage.appendChild(decore);
  return newMessage;
}

function addMessage(text) {
  const divMessage = createElementMessage(text);
  const chatBody = document.getElementById("chats-body");
  chatBody.appendChild(divMessage);
}

document.getElementById("message").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (e.target.value == "") return;
    addMessage(e.target.value);
    document.getElementById("message").value = "";
    scrollDown();
  }
});

scrollDown();

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
ChangeActive(".chat__friends__bt");
ChangeActive(".get__container__Confirm");
