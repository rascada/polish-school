'use strict';

['Damian Martyniak', 'Programista', 'damian@syntax-shell.me']
	.map((text, i) =>
		switch (i) {
			case 0: return text.bold();
			case 1: return text.strike();
			case 2: return text.small();
		}
	).forEach(text => document.body.innerHTML += `${text} <br>`);
