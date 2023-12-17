document.addEventListener("DOMContentLoaded", function () {
  const prizes = [
    10, 20000, 50, 5000, 100, 250, 100000, 500, 1000, 2500, 10000, 50000,
  ];
  let activeBtn = false;
  let deg = 0;

  const spinBtn = document.getElementById("spinBtn");
  spinBtn.addEventListener("click", spin);

  function spin() {
    activeBtn = true;
    setTimeout(() => (activeBtn = false), 5100);

    let spins = Math.floor(Math.random() * 7) + 9;
    console.log("spins: " + spins);

    let wheelAngle = Math.floor(Math.random() * 12) * 30;
    console.log("wheelAngle: " + wheelAngle);

    let sectorAngle = Math.floor(Math.random() * 14) + 1;
    sectorAngle *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    console.log("sectorAngle: " + sectorAngle);
    deg += 360 * spins + wheelAngle + sectorAngle;
    document.querySelector(".inner").style.transform = `rotate(${deg}deg)`;

    setTimeout(() => (deg -= sectorAngle), 100);

    let index = Math.floor((deg - sectorAngle) / 30) % 12;
    console.log("prize index:" + index);
    console.log("you will win: " + prizes[index]);
  }
});
