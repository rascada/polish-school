'use strict';

const card = ['Damian Martyniak', 'Programista', 'damian@syntax-shell.me'];

card
	.map((text, i) =>
		switch (i) {
			case 0: return text.bold();
			case 1: return text.strike();
			case 2: return text.small();
		}
  )
	.forEach(text => document.body.innerHTML += `${text} <br>`);
