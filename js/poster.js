// console.log("Hello World");
// let btRussia = document.querySelector(".btRussia");
// let cards = [
//   {
//     name: "Сергей Семак",
//     date: "11  сентября",
//     description: ` Фан-встреча с артистом 
//   в онлайн формате на платформе
//   Twich с розыгрышем призов`,
//     country: ["Rassia", "other"],
//     group: "Football",
//   },
//   {
//     name: "Карина Кросс",
//     date: "11  сентября",
//     description: ` Фан-встреча с артистом 
//   в онлайн формате на платформе
//   Twich с розыгрышем призов`,
//     country: ["Rassia", "other"],
//     group: "Football",
//     pathimg: "./assets/images/poster/image 6.png",
//   },
// ];
// function filterCards(country) {
//   const cardsContainer = document.querySelector(".allcard_container");
//   cardsContainer.innerHTML = ""; // Очищаем контейнер перед добавлением новых карточек

//   cards.forEach((card) => {
//     if (card.country.includes(country)) {
//       // Создаем элемент карточки и добавляем его в контейнер
//       const cardElement = document.createElement("div");
//       cardElement.innerHTML = `
//           <div class="card">
//               <div class="card_img" style="background-image: url('./assets/images/poster/image\ 6.png');">
//                   <div class="card_date">${card.date}</div>
//                   <div class="card_img_participate">
//                       <div>принять участие</div>
//                       <img src="./assets/images/poster/card_arrow.svg" alt="">
//                   </div>
//               </div>
//               <span class="card_name">${card.name}</span>
//               <span class="card_description">
//               ${card.description}
//               </span>
//           </div>
//       `;
//       cardsContainer.appendChild(cardElement);
//     }
//   });
// }
