/*
## Esercizio 2

**Gioco dei dadi**

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

console.log('test');

const button = document.getElementById('button');
const myResult = document.getElementById('my-points');
const computerResult = document.getElementById('computer-points');

button.addEventListener('click', function(){
  const myNumber = Math.ceil(Math.random() * 6);
  const computerNumber = Math.ceil(Math.random() * 6);

  console.log(myNumber);
  console.log(computerNumber);
  
  if(myNumber > computerNumber){
    console.log('Hai vinto!!!');
    document.getElementById('my-points').innerHTML = `Il tuo risultato è ${myNumber}`;
    document.getElementById('computer-points').innerHTML = `Il risultato del computer è: ${computerNumber}`;
    document.querySelector('.output').innerHTML = `Hai vinto!!!`;
  }
  else if(myNumber < computerNumber){
    console.log('Hai perso. Riprova');
    document.getElementById('my-points').innerHTML = `Il tuo risultato è ${myNumber}`;
    document.getElementById('computer-points').innerHTML = `Il risultato del computer è: ${computerNumber}`;
    document.querySelector('.output').innerHTML = `Hai perso. Riprova`;
  }
  else{
    console.log("Pareggio! C'eri quasi");
    document.getElementById('my-points').innerHTML = `Il tuo risultato è ${myNumber}`;
    document.getElementById('computer-points').innerHTML = `Il risultato del computer è: ${computerNumber}`;
    document.querySelector('.output').innerHTML = `Pareggio! C'eri quasi`;
  }









});
































