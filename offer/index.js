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
