'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	'count': numberOfFilms,
	'movies': {},
	'actors': {},
	'genres': [],
	'privat': false
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
		b = prompt('На сколько его оцените?', '');

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
}



// let i = 0;
// do {
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 		b = prompt('На сколько его оцените?', '');
// 	i++;

// 	if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// } while (i < 2);

// let i = 0;
// while (i < 2) {
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 		b = prompt('На сколько его оцените?', '');
// 	i++;
// 	if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// }

if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
	console.log("Вы киноман")
} else {
	console.log("Произошла ошибка");
}
console.log(personalMovieDB);



// const a = prompt('Один из последних просмотренных фильмов?', ''),
// 	b = prompt('На сколько его оцените?', ''),
// 	c = prompt('Один из последних просмотренных фильмов?', ''),
// 	d = prompt('На сколько его оцените?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

function makeArmy() {
	let shooters = [];

	let i = 0;
	while (i < 10) {
		let shooter = function (i) { // функция shooter
			alert(i); // должна выводить порядковый номер
		};
		shooters.push(shooter);
		i++;
	}

	return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...




