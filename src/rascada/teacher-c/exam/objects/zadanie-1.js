'use strict';

class Student {
	constructor(imie, nazwisko, wiek, stypendium, rok_studiow) {
		this.imie = imie;
		this.wiek = wiek;
		this.nazwisko = nazwisko;
		this.stypendium = stypendium;
		this.rok_studiow = rok_studiow;

		this.show();
	}

	show() {
		const keys = Object.keys(this);

		keys
			.map(key => key.replace('_', ' '))
			.forEach(key =>
				document.body.innerText += `${key}: ${this[key] || 'nie podano'} \n`);
	}
}

const student = new Student('Damian', 'Martyniak');
