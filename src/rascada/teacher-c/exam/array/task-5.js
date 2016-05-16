'use strict';

const arr = [];

for (let i = 10; i--;) {
	arr.push(Math.random() * 100 | 0);
}

const sum = arr.reduce((curr, prev) => curr + prev);

document.body.innerText = `tablica ${arr}
suma: ${sum}
srednia: ${sum / arr.length}`;			
