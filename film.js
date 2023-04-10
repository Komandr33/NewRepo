'use strict';

const personalMovieDB = {
	'count': 0,
	'movies': {},
	'actors': {},
	'genres': [],
	'privat': false,

	start: () => {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},

	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', '').thim(),
				b = prompt('На сколько его оцените?', '');

			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
		}
	},

	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("Вы классический зритель");
		} else if (personalMovieDB.count >= 30) {
			console.log("Вы киноман")
		} else {
			console.log("Произошла ошибка");
		}
	},

	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},

	writeYourGenres: function () {
		// for (let i = 1; i < 4; i++) {
		// 	let myGenres = prompt(`Ваш любимый жанр под номером ${i}`);
		// 	if (myGenres == '' || myGenres == null) {
		// 		console.log('Вы ввели неверное значение или не ввели вовсе')
		// 		i--;
		// 	} else this.genres.push(myGenres);
		// }

		// personalMovieDB.genres.forEach((item, i) => {
		// 	console.log(`Любимый жанр ${i + 1} - это ${item}`);
		// });

		for (let i = 1; i < 2; i++) {
			let myGenres = prompt('Введите вашилюбимые жанры через запятую', '').toLowerCase();
			if (myGenres == '' || myGenres == null) {
				console.log('Вы ввели неверное значение или не ввели вовсе');
				i--;
			} else {
				this.genres = myGenres.split(', ');
				this.genres.sort();
			};
		}

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});

	},

	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else personalMovieDB.privat = true;
	}
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();






