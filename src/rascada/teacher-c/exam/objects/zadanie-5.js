'use strict';

const number = prompt('Podaj liczbe');
const abs = Math.abs(number);

document.body.innerText = abs ? abs : 'lipa';
