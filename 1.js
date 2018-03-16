

// Задание 1

// const hotelName = prompt('Please enter desired hotel name: 1 - taba , 2 - sharm, 3 - hurgada ', '');
// console.log(hotelName);

// if (hotelName == 1) {
// 	alert("вы выбрали курорт taba");
// }
// 	else if (hotelName == 2) {
// 	alert("вы выбрали курорт sharm");
// }

// 	else if (hotelName == 3) {
// 	alert("вы выбрали курорт hurgada");
// }
// 	else if (hotelName == ''){
// 		alert("вы не ввели номер!");
// }
// 	else if (hotelName >= 4 ){
// 	alert("Такого курорта нету");
// }
// 	else {

// 	}


// Задание 2

let people = prompt('Введите число отдыхающих', '');
console.log(people);

let sharm = 15;
let hurgada  = 25;
let taba = 6;

if (people == Math.abs(people) && people == Math.round(people) ) {
	// alert("роботает");
	 if (people <= 25) {
		hurgada = confirm('Согласны ли Вы быть в группе hurgada?');
		if (hurgada == true) {
			let sum_hurgada = 25 - people;
			alert(sum_hurgada + ' осталось мест в hurgada');
		}
			else if (people	<=15) {
				sharm = confirm	('Согласны ли Вы быть в группе sharm?')
				if (sharm == true) {
					let	 sum_sharm = 15 - people;
					alert(sum_sharm + ' осталось мест в hurgada');
				}
					else if(people <= 6) {
						taba = confirm ('Согласны ли Вы быть в группе taba?');
								if (taba == true) {
									let	 sum_taba = 6 - people;
									alert(sum_taba + ' осталось мест в taba');
								}
								else if (taba == false) {
									alert('Вы нечего не выбрали');
								}

					else {
						alert('Мест нет!');
					}

					}
			else {
				alert('Мест нет!');
				}
			}
		else {
			alert('Мест нет!');
		}
	}
else{
	alert('Мест нет!')
    }
}
