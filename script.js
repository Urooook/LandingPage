$(function() {
{
var Shadow = document.querySelector('.form');

var korz =  document.querySelector('.btna');
var myBtn =document.querySelector('.MyButton');

korz.addEventListener('click', Open);
myBtn.addEventListener('click', Open);

function Open(){

	Shadow.style.left=0;
}
var fa = document.querySelector('.faha');
fa.addEventListener('click', Close);

function Close(){

	Shadow.style.left='-110%';

}
}
{
	var	floorNumber = $('.floor-number'),
					typeOfHouse = $('input[name="typeOfHouse"]').val(),
					project = $('input[type="checkbox"]'),
					price = $('#price'),
					basePrice = 40007,
					design = 0,
					help = 0,
					smm =0,
					finalPrice = 4990;

		// mCount.change(function() {
		// 	if ($(this).val() > 20) {
		// 		$(this).tooltip('destroy');
		// 		finalPrice =  (+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse + design; 
		// 		price.text(finalPrice);
		// 	} else {
		// 		$(this).tooltip('toggle');	
		// 	}
		// });	
		floorNumber.change(function(event) {
			finalPrice =   +floorNumber.val()  + design + smm + help; 
				price.text(finalPrice);
				if ($(this).val() == 4990) {
									 $('.calc-img img').attr('src', 'img/landing.png');
				} else if($(this).val() == '8990'){
									 $('.calc-img img').attr('src', 'img/site1.png');
							}else{
								$('.calc-img img').attr('src', 'img/internet.png');
							}
		});
		// $('input[name="typeOfHouse"]').change(function(event) {
		// 	typeOfHouse = $(this).val();
		// 	finalPrice =  (+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse + design; 
		// 		price.text(finalPrice);
		// 		if ($(this).val() == 1) {
		// 				// $('img').attr('src', 'img/1.jpg');
		// 		} else {
		// 				// $('img').attr('src', 'img/2.png');
		// 		}

		// });
		project.on('change', function(event) {
			if ($(this).is(':checked') && $(this).val()== 4000 ) {
				design = 4000;
				finalPrice =   +floorNumber.val()  + design + smm + help; 
					price.text(finalPrice);
			}else if($(this).is(':checked') && $(this).val()== 6000){
				smm = 6000;
				finalPrice =   +floorNumber.val()  + design + smm + help; 
					price.text(finalPrice);
			}else if($(this).is(':checked') && $(this).val()== 5000){
				help= 5000;
				finalPrice =   +floorNumber.val()  + design + smm + help; 
					price.text(finalPrice);
			}else {
				design = 0;
				smm=0;
				help=0;
				finalPrice =  +floorNumber.val()   + design + smm + help; 
					price.text(finalPrice);
			}
		});

		price.text('4990');
}
});
/*
var items = document.querySelectorAll('.item');


function startRotate(event){
		console.log(event);
	var ItemDiv = event.target.offsetParent.classList[2];
	var div = document.querySelector('.'+ItemDiv);
	console.log(div);
	div.style.transform = 'rotateX(120deg)';
	}*/
/*function stopRotate(event){
	alert(1);
}*/

/*for(var i=0;i<items.length;i++){
	var item = items[i];
	item.addEventListener('click', startRotate);*/
	/*item.addEventListener('mouseout', stopRotate);*/
/*
}*/