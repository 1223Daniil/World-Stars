let Options = {
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		// nextEl: '.swiper-next',
		// prevEl: '.swiper-button-prev',
	},
	slidesPerView: 6,
	spaceBetween: 0,

};

// swiper
new Swiper('.swiper', Options);

function fotoSelect(element) {
	document.getElementById("slider1-main-foto").src = element.src
	let swp = document.getElementById("swiperFoto").querySelectorAll(".swiper-slide--background");
	console.log(swp);
	for (let i = 0; i < swp.length; i++) {
		swp[i].classList.remove("swiper-slide--background-color");
	}
	console.log(element.parentNode);
	element.parentNode.classList.add("swiper-slide--background-color");
}


let count = 1;
function videoSelect(element) {

	let videoArray = [
		"https://www.youtube.com/embed/Z-1kj2RpMQs?si=ysGXXk45K0wGtrXc;controls=0",
		"https://www.youtube.com/embed/WhNcqdZCgPE?si=IdC52uYUwatJlRbA;controls=0",

	]

	let test = document.getElementById("selected-video");

	switch (count) {
		case 1:
			test.src = videoArray[0];
			count = 0;
			break;
		case 0:
			test.src = videoArray[1];
			count = 1;
			break;
	}
	// style убрать рамку
	let swp = document.getElementById("swiperVideo").querySelectorAll(".swiper-slide--background");
	console.log(swp);
	for (let i = 0; i < swp.length; i++) {
		swp[i].classList.remove("swiper-slide--background-color");
	}
	console.log(element.parentNode);
	element.parentNode.classList.add("swiper-slide--background-color");
}

function starClick(element) {
	let empty = document.getElementById("section-main-video__star--img1");
	let full = document.getElementById("section-main-video__star--img2");
	if (empty.classList.contains("main-video__star--hide")) {
		empty.classList.remove("main-video__star--hide");
		full.classList.add("main-video__star--hide");
	} else {
		empty.classList.add("main-video__star--hide");
		full.classList.remove("main-video__star--hide");
	}
}

function bottomMenuSelect(element) {
	// bottom-video-menu__button--selected
	let buttons = document.querySelectorAll(".bottom-video-menu__button");

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove("bottom-video-menu__button--selected");

	}
	element.classList.add("bottom-video-menu__button--selected");

	console.log(element.childNodes[1].textContent);


	switch (element.childNodes[1].textContent) {
		case "Мода":
			backgroundRemove()
			console.log("1");
			document.getElementById("background").classList.add("background-p")
			break;
		case "Кино":
			backgroundRemove()
			document.getElementById("background").classList.add("background-o")
			console.log("2");

			break;
		case "Музыка":
			backgroundRemove()
			document.getElementById("background").classList.add("background-b")
			console.log("3");

			break;
		case "Спорт":
			backgroundRemove()
			document.getElementById("background").classList.add("background-g")
			console.log(document.getElementById("background").classList, "4");

			break;
		default:
			document.getElementById("background").classList.add("background");
	}
}



function backgroundRemove() {
	let t = document.getElementById("background");
	t.classList.remove("background");
	console.log(t);
	document.getElementById("background").classList.remove('background-p');
	document.getElementById("background").classList.remove('background-o');
	document.getElementById("background").classList.remove('background-b');
	document.getElementById("background").classList.remove('background-g');
}