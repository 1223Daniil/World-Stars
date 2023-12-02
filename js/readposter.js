let text = document.getElementById("text-content");
let button = document.getElementById("Readmore");
let textVisable = false;
let FirstText =
  "Признаётся одним из лучших футболистов всех времён. Лучший бомбардир в истории чемпионата Испании, «Барселоны» и сборной Аргентины. Семикратный обладатель «Золотого мяча», шестикратный — «Золотой бутсы». Воспитанник академии «Барселоны», вместе с этим клубом выиграл десять титулов чемпиона Испании, четыре Лиги чемпионов УЕФА, семь Кубков Испании, восемь Суперкубков Испании, три Суперкубка Европы и три чемпионата мира среди клубов. ";
let newtext =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et mauris non justo convallis luctus. Mauris sagittis condimentum ante, sit amet mattis nulla tempor sed. Morbi laoreet odio in magna facilisis, id aliquam lectus sagittis. Aenean commodo posuere magna, non varius lacus pharetra et. Duis lobortis tincidunt ex, id efficitur massa tempus eu. Suspendisse at tellus ac sem vulputate faucibus eget ac diam. Curabitur vitae leo sit amet mi lacinia lacinia. Suspendisse purus mauris, placerat egestas aliquam nec, scelerisque dictum orci. Vestibulum non nunc neque. In pulvinar tellus nulla, non vehicula ipsum eleifend eu.";
text.innerHTML = FirstText;
button.addEventListener("click", () => {
  if (textVisable) {
    text.innerHTML = FirstText;
    button.innerHTML = `Читать далее <img src="./assets/images/readposter/blackarrow.svg" alt="blackarrow">`;
    textVisable = false;
  } else {
    text.innerHTML += newtext;
    button.innerHTML = `Свернуть текст <img src="./assets/images/readposter/blackarrow.svg" alt="blackarrow">`;
    textVisable = true;
  }
});
