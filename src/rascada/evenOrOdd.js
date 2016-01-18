/**
  * even or odd - normal code
  * @param {Number} n.
  * @return {String}
  */

let evenOrOdd = n => n % 2 == 0 ? 'even' : 'odd';
let number = +prompt('Provide number');

console.log(evenOrOdd(question));

/**
  * even or odd written on lesson, without console.log and minimum es6
  * @param {Number} n.
  */

function EVEN_OR_ODD(n) {
  //document.write(n % 2 == 0 ? 'even' : 'odd');
  document.body.innerText = n % 2 == 0 ? 'even' : 'odd';
}

EVEN_OR_ODD(+prompt('Provide number'));

/**
  * one line code

  * good
  document.innerText = +prompt('Podaj liczbę') % 2 == 0 ? 'parzysta' : 'nie parzysta';

  * bad
  document.write( +prompt('Podaj liczbę') % 2 == 0 ? 'parzysta' : 'nie parzysta' );
  */
