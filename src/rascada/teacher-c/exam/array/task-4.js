'use strict';

const arr = [];

for (let i = 10; i--;) {
	arr.push(Math.random() * 100 | 0);
}

const sorted = arr.sort((a, b) => a - b);

document.body.innerText = sorted.reverse();
