function openBurger() {
    let burger = document.getElementById('burger');
    burger.classList.add('burger__open');
    console.log(burger)
}

function closeBurger() {
    document.getElementById('burger').classList.remove('burger__open');
    console.log(document.getElementById('burger'))
}