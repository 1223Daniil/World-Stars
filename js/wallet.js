let historyContainer = document.getElementById("historyContainer");
let incomeContainer = document.getElementById("income");
const selectElement = document.getElementById("historyDate");
let history = [
  {
    id: "307268",
    sum: "1000",
    status: "Ожидание",
    sistem: "Visa/MasterCard",
    date: "2023-11-18 18:00:55",
    month: "ноябрь",
    currency: "Рубли",
  },
  {
    id: "3072645",
    sum: "2000",
    status: "Ожидание",
    sistem: "Visa/MasterCard",
    date: "2023-10-18 18:00:55",
    month: "октябрь",
    currency: "Юани",
  },
  {
    id: "30726",
    sum: "1500",
    status: "Ожидание",
    sistem: "Tinkoff",
    date: "2023-9-18 23:00:55",
    month: "сентябрь",
    currency: "Реал",
  },
  {
    id: "30724568",
    sum: "2000",
    status: "Ожидание",
    sistem: "Visa/MasterCard",
    date: "2023-9-18 18:00:55",
    month: "сентябрь",
    currency: "Рэнд",
  },
  {
    id: "30722268",
    sum: "100",
    status: "Ожидание",
    sistem: "Visa/MasterCard",
    date: "2023-10-18 18:00:55",
    month: "октябрь",
    currency: "Реал",
  },

  // Добавьте другие элементы истории оплаты по месяцам
];
let income = [
  {
    price: "5 600 ws",
    borderColor: "#ff2c15",
    text: "ОТ РЕКЛАМНЫХ НОВОСТЕЙ",
    term: "PerMonth",
  },
  {
    price: "2 000 ws",
    borderColor: "#B9F5DB",
    text: "ОТ ПОКУПОК  В ЗВЕЗДНОМ МАГАЗИНЕ",
    term: "lastTreeDays",
  },
  {
    price: "1 500 ws",
    borderColor: "#C9B6FF",
    text: "ОТ ВСТЕЧ СО ЗВЕЗДАМИ",
    term: "lastWeek",
  },
  {
    price: "5 ws",
    borderColor: "#FF0606",
    text: "Заполнение профиля",
    term: "PerMonth",
  },
  {
    price: "500 ws",
    borderColor: "#FFD20A",
    text: "ОТ ПРОДАЖИ СТИКЕРОВ И СМАЙЛИКОВ ",
    term: "lastWeek",
  },
  {
    price: "0,00 ws",
    borderColor: "#FF9D4C",
    text: "ОТ МОДЕРАЦИИ",
    term: "lastTreeDays",
  },
  {
    price: "0,00 ws",
    borderColor: "#70FF00",
    text: "ПОЛУЧЕНО НА КОЛЕСЕ УДАЧИ",
    term: "lastTreeDays",
  },
];
selectElement.addEventListener("change", function () {
  // Получение выбранного значения
  const selectedValue = selectElement.value;

  // Фильтрация массива в соответствии с выбранным значением
  const filteredIncome = income.filter(
    (item) => item.term === selectedValue || selectedValue === "castom"
  );

  // Перерисовка карточек
  renderincome(filteredIncome);
});
function renderincome(cards) {
  // Очистка контейнера перед добавлением новых карточек
  incomeContainer.innerHTML = "";

  // Добавление отфильтрованных карточек в контейнер
  cards.forEach((card) => {
    incomeContainer.innerHTML += `
    <li><p style="border: 3px solid ${card.borderColor}">${card.price}</p><span>${card.text}</span></li>
    `;
  });
}
function allHistory() {
  document.getElementById("allHistorybt").classList.toggle("active");
  renderincome(income);
}
renderincome(income);
displayHistory(history);

// Обработчик изменения значения в поле выбора месяца
document.getElementById("historyMoth").addEventListener("change", function () {
  // Получаем выбранный месяц
  let selectedMonth = this.value;
  // Фильтрация истории оплаты по выбранному месяцу
  let filteredHistory = history.filter(
    (item) => item.month.toLowerCase() === selectedMonth.toLowerCase()
  );

  // Отображение отфильтрованных карточек
  displayHistory(filteredHistory);
});
document.getElementById("price").addEventListener("change", function () {
  // Получаем выбранную сумму
  let selectedPrice = this.value;

  // Фильтрация истории оплаты по выбранной сумме
  let filteredHistoryByPrice = history.filter(
    (item) => item.sum.replace(/\s/g, "") === selectedPrice
  );

  // Отображение отфильтрованных карточек
  displayHistory(filteredHistoryByPrice);
});
document.getElementById("sort").addEventListener("change", function () {
  // Получаем выбранную валюту
  let selectedCurrency = this.value.split(" ")[0];

  // Фильтрация истории оплаты по выбранной валюте
  let filteredHistoryByCurrency = history.filter(
    (item) => item.currency.toLowerCase() === selectedCurrency.toLowerCase()
  );

  // Отображение отфильтрованных карточек
  displayHistory(filteredHistoryByCurrency);
});
// Функция для отображения истории оплаты
function displayHistory(historyData) {
  historyContainer.innerHTML = ""; // Очищаем контейнер перед добавлением новых карточек

  // Добавляем карточки в контейнер
  historyData.forEach((item) => {
    if (window.innerWidth <= 992) {
      historyContainer.innerHTML += `
      <div class="History_container_content_item_mobile">
        <div class="mobile_content">
          <span>ID</span>
          <span>Сумма</span>
          <span>Статус</span>
          <span>Платежная система</span>
          <span>ВАЛЮТА</span>
          <span>Дата</span>
        </div>
        <div class="mobile_content">
          <span>${item.id}</span>
          <span>${item.sum}</span>
          <span style='color:red;'>${item.status}</span>
          <span>${item.sistem}</span>
          <span>${item.currency}</span>
          <span>${item.date}</span>
        </div>
      </div>`;
    } else {
      historyContainer.innerHTML += `
      <div class="History_container_content_item">
        <span>${item.id}</span>
        <span>${item.sum}</span>
        <span  style='color:red;'>${item.status}</span>
        <span>${item.sistem}</span>
        <span>${item.date}</span>
      </div>
    `;
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  let activeBtn = false;
  let deg = 0;

  const spinBtn = document.getElementById("spinBtn");
  spinBtn.addEventListener("click", spin);

  function spin() {
    activeBtn = true;
    setTimeout(() => (activeBtn = false), 5100);

    let spins = Math.floor(Math.random() * 7) + 9;
    let wheelAngle = Math.floor(Math.random() * 8) * 30;
    let sectorAngle = Math.floor(Math.random() * 14) + 1;
    sectorAngle *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    deg += 360 * spins + wheelAngle + sectorAngle;
    document.querySelector(".inner").style.transform = `rotate(${deg}deg)`;

    setTimeout(() => (deg -= sectorAngle), 100);
  }
});

let buybutton = document.querySelectorAll(
  ".WheelFortune_quantities_content_button"
);
for (let i = 0; i < buybutton.length; i++) {
  buybutton[i].addEventListener("click", function () {
    // Удаляем класс active у всех кнопок
    for (let j = 0; j < buybutton.length; j++) {
      buybutton[j].classList.remove("active");
    }

    // Добавляем класс active к текущей кнопке
    this.classList.add("active");
  });
}
