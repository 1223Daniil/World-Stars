var menuButton = document.getElementById("menuButton");
var menuButtonBlack = document.getElementById("menuButton_black");
var modalMenu = document.getElementById("modal_menu");

function toggleModalMenu() {
  if (modalMenu.style.display === "block") {
    modalMenu.style.animationName = "slidein_up";
    setTimeout(function () {
      modalMenu.style.display = "none";
    }, 1000);
  } else {
    modalMenu.style.animationName = "slidein";
    modalMenu.style.display = "block";
  }
}

menuButton.addEventListener("click", toggleModalMenu);
menuButtonBlack.addEventListener("click", toggleModalMenu);

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

function changeImage(src, index) {
  var galleryItems = document.querySelectorAll(".photo-gallery__item_val");
  var mainImage = document.getElementById("mainImage");

  // Обновляем большую фотографию
  mainImage.src = src;

  // Убираем выделение у всех миниатюр
  galleryItems.forEach(function (item) {
    item.classList.remove("selected");
  });

  // Выбираем миниатюру, если индекс допустим
  if (index >= 0 && index < galleryItems.length) {
    galleryItems[index].classList.add("selected");
  }
}

function changeVideo(src) {
  var mainVideo = document.getElementById("mainVideo");
  mainVideo.src = src;
}

function playVideo() {
  var videoContainer = document.getElementById("videoContainer");
  var videoPreview = document.getElementById("videoPreview");
  var videoLink = document.querySelector(".video__link");

  videoPreview.style.display = "none";
  videoLink.style.display = "none"; // Устанавливаем display: none для video__link

  // Создаем элемент iframe
  var iframe = document.createElement("iframe");
  iframe.width = "560";
  iframe.height = "315";
  iframe.src = "https://www.youtube.com/embed/yWM_3JSDn9s?autoplay=1";
  iframe.frameBorder = "0";
  iframe.allowFullscreen = true;

  // Добавляем iframe в контейнер
  videoContainer.appendChild(iframe);
}
