function openBurger() {
    let burger = document.getElementById('burger');
    burger.classList.add('burger__open');
    console.log(burger)
}

function closeBurger() {
    document.getElementById('burger').classList.remove('burger__open');
    console.log(document.getElementById('burger'))
}


function coloreLine(point) {
	let test = document.getElementById("lines");
	let color = document.getElementById("color-lines");
	let oneStep = Math.round(test.clientWidth/10); //шаг
	if(point<0 || point>10){
		point = 1;
	}else
	if(point == 0){
		color.style.display = "none";
	}else
	if(point == 10){
		color.style.width = oneStep*point +"px";
	}else
	if(point){
		// color.style.width = oneStep*point -(4*point)  +"px";
		color.style.width = oneStep*point +"px";
	}
	
}
coloreLine(2);  //  допустимые от 1 до 10 ; 5-10-15-20... и тд до 50%

document.getElementById("number").onchange = function () {
	coloreLine(document.getElementById("number").value/10)
  }

// offsetWidth - это ширина блока, включая все padding, border, но без margin.
// clientWidth - это ширина блока, включая padding, но без border, margin и без scroll. Если блоки инлайновые, то ширина блока будет равна 0.
// getBoundingClientRect().width - это ширина блока высчитывается по принципу clientWidth, но даёт дробное число.


function coloreLine2(point) {
	let test = document.getElementById("linesmobil");
	let color = document.getElementById("colormobil-lines");
	let oneStep = Math.round(test.clientWidth/10); //шаг
	if(point<0 || point>10){
		point = 1;
	}else
	if(point == 0){
		color.style.display = "none";
	}else
	if(point == 10){
		color.style.width = oneStep*point +"px";
	}else
	if(point){
		// color.style.width = oneStep*point -(4*point)  +"px";
		color.style.width = oneStep*point +"px";
	}
	
}
coloreLine(2);

document.getElementById("numbers").onchange = function () {
	coloreLine2(document.getElementById("numbers").value/10)
  }





document.getElementById("month-select").onchange = function() {
	
	let year = new Date().getFullYear(); // текущий год
	console.log(year);
	let month = document.getElementById("month-select").value;

	let date = new Date(year, month, 0);
	console.log(date.getDate());

	let days = document.getElementById("month-days");

	while(days.firstChild){
		days.removeChild(days.firstChild);
	}

	for(let i=1; i<=date.getDate(); i++){
		
		let test = document.createElement("span");
		test.classList.add("month-select-text");


		// Добавлять совойства конкретным датам. 
		if(i==1 || i==20){
			test.classList.add("month-days-selectedRed");
			// test.style.color = "red";
		}

		test.textContent = i;
		days.appendChild(test);
	}

}





// SWIPER
let Options = {
    direction: 'horizontal',
    loop: false,
    allowTouchMove: true,
    navigation: {
        nextEl: '.slider1-arrow-right',
        prevEl: '.slider1-arrow-left',
    },
    slidesPerView: 7,
    spaceBetween: 25,
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 20,
    //     },
    //     800: {
    //         slidesPerView: 2,
    //         spaceBetween: 72,
    //     },
    //     1000: {
    //         slidesPerView: 5,
    //         spaceBetween: 32,
    //     }
    // }
};

let Options2 = {
    direction: 'horizontal',
    loop: false,
    allowTouchMove: true,
    navigation: {
        nextEl: '.slider2-arrow-right',
        prevEl: '.slider2-arrow-left',
    },
    slidesPerView: 7,
    spaceBetween: 25,

};
// swiper1
let sliderTop = new Swiper('.swiper1', Options);

let t = new Swiper('.swiper2', Options2);
