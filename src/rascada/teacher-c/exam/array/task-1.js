'use strict';

const arr = [];

for (let i = 5; i--;) {
	arr.push(i + 1);
}

document.body.innerText = `Elementow tablicy = ${arr}
  Dlugosc tablicy wynosi: ${arr.length}`;
