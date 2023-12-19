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
