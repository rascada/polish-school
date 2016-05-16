
		'use strict';

		var arr = [];

		for (var i = 5; i--;) {
			arr.push(i + 1);
		}

		document.body.innerText = `Elementow tablicy = ${arr}
		  Dlugosc tablicy wynosi: ${arr.length}`;
