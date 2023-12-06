let cards = [
  {
    name: "Сергей Семак",
    date: "11 сентября",
    description: `Фан-встреча с артистом в онлайн формате на платформе Twich с розыгрышем призов`,
    country: "Rassia",
    group: "Football",
    pathimg: "./assets/images/poster/image 6.png",
    month: "СЕНТЯБРЬ",
  },
  {
    name: "Михаил  Кержаков",
    date: "11 сентября",
    description: `Фан-встреча с артистом в онлайн формате на платформе Twich с розыгрышем призов`,
    country: "Rassia",
    group: "Football",
    pathimg: "./assets/images/poster/image 6 (2).png",
    month: "СЕНТЯБРЬ",
  },
  {
    name: "Карина Кросс",
    date: "15 сентября",
    description: `Фан-встреча с артистом в онлайн формате на платформе Twich с розыгрышем призов`,
    country: "Rassia",
    group: "Fashion",
    pathimg: "./assets/images/poster/image 6 (1).png",
    month: "СЕНТЯБРЬ",
  },
  {
    name: "Сергей Семак",
    date: "15 сентября",
    description: `Фан-встреча с артистом в онлайн формате на платформе Twich с розыгрышем призов`,
    country: "Rassia",
    group: "Football",
    pathimg: "./assets/images/poster/image 6.png",
    month: "СЕНТЯБРЬ",
  },
  {
    name: "Сергей Семак",
    date: "17 сентября",
    description: `Фан-встреча с артистом в онлайн формате на платформе Twich с розыгрышем призов`,
    country: "Rassia",
    group: "Football",
    pathimg: "./assets/images/poster/image 6.png",
    month: "СЕНТЯБРЬ",
  },
  {
    name: "Сергей Семак",
    date: "25 сентября",
    description: `Фан-встреча с артистом в онлайн формате на платформе Twich с розыгрышем призов`,
    country: "Rassia",
    group: "Football",
    pathimg: "./assets/images/poster/image 6.png",
    month: "СЕНТЯБРЬ",
  },
];
const cardsContainer = document.querySelector(".allcard_container");
const countryButtons = document.querySelectorAll("[data-country]");
const groupButtons = document.querySelectorAll("[data-group]");
const monthButtons = document.querySelectorAll("[data-month]");
const groupSelect = document.getElementById("sport");
const cardDate = document.querySelector(".card_date");
let activeFilters = { country: null, group: null };
cardDate.innerHTML = "";
function renderCards(filteredCards) {
  cardsContainer.innerHTML = "";
  filteredCards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.innerHTML = ` <div class="card">
    <div class="card_img" style="background-image: url('${
      card && card.pathimg ? card.pathimg.replace(/\s/g, "\\ ") : ""
    }');">
        <div class="card_date">${card.date}</div>
        <div class="card_img_participate">
            <div>смотреть афишу</div>
            <img src="./assets/images/poster/card_arrow.svg" alt="">
        </div>
    </div>
    <span class="card_name">${card.name}</span>
    <span class="card_description">${card.description}
    </span>
</div>`;
    cardsContainer.appendChild(cardElement);
  });
}

function filterCards() {
  cardDate.innerHTML = "";
  let filteredCards = [...cards];
  if (activeFilters.country) {
    filteredCards = filteredCards.filter(
      (card) => card.country === activeFilters.country
    );
  }
  if (activeFilters.group) {
    filteredCards = filteredCards.filter(
      (card) => card.group === activeFilters.group
    );
  }
  if (activeFilters.month) {
    filteredCards = filteredCards.filter(
      (card) => card.month === activeFilters.month
    );
  }
  filteredCards.map((item, index) => {
    const numbersArray = item.date.match(/\d+/g);
    if (index == filteredCards.length - 1) {
      cardDate.innerHTML += `${numbersArray} сентября`;
    } else {
      cardDate.innerHTML += `${numbersArray}, `;
    }
  });
  renderCards(filteredCards);
}

function setActiveButton(buttons, activeButton, filterType) {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  activeButton.classList.add("active");
  activeFilters[filterType] = activeButton.getAttribute(`data-${filterType}`);
  filterCards();
}

countryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveButton(countryButtons, button, "country");
  });
});

groupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveButton(groupButtons, button, "group");
    // При клике на другую кнопку из группы, снимаем класс active с select
    groupSelect.classList.remove("active");
  });
});

groupSelect.addEventListener("change", () => {
  setActiveButton([groupSelect], groupSelect, "group");
  activeFilters.group = groupSelect.value;
  groupButtons.forEach((button) => {
    button.classList.remove("active");
  });
  filterCards();
});

monthButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveButton(monthButtons, button, "month");
  });
});

renderCards(cards);
