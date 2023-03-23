/*
## Esercizio 1

**Mail**

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

- creare un input per inserire la mail e un button per stampare e verficare il valore
- creare un array contente una lista di mail le quali possono accedere
- creare una condizione if che si attiva al click di un button in modo da verificare se la mail inserita nell'input è uguale alla mail contenuta nell'array
- creare un output
*/


console.log('test');

// array con le mail
const mailArray = [
  'abc@gmail.com',
  'Michele@gmail.com',
  'Mario@gmail.com',
  'Antonio@gmail.com',
  'Lucia@gmail.com',
  'Maria@gmail.com',
  'Franco@gmail.com'
]

const mailInput = document.getElementById('mail');
const buttonCheck = document.getElementById('check-mail');
const outputCheck = document.querySelector('.output-check');

// EventListener click del button
buttonCheck.addEventListener('click', function() {
  const mailValue = mailInput.value;
  console.log(mailValue);
  
  // * SOLUZIONE 1 senza array, TROPPO COMPLESSA 
  // mailValue == ('abc@gmail.com')||
  // mailValue == ('Michele@gmail.com')||
  // mailValue == ('Mario@gmail.com')||
  // mailValue == ('Antonio@gmail.com')||
  // mailValue == ('Lucia@gmail.com')||
  // mailValue == ('Maria@gmail.com')||
  // mailValue == ('Franco@gmail.com'))
  // {
  // * SOLUZIONE 2 MIGLIORE
  // condizione per verificare se il valore inserito nell'input è uguale a uno degli elementi inclusi nell'array
  if(mailArray.includes(mailValue) ){
    console.log('Accesso riuscito');
    outputCheck.innerHTML = `Bentornato ${mailValue}`;
  }
  else{
    console.log('Accesso negato');
    outputCheck.innerHTML = `Accesso negato. L'email inserita non è corretta.`;
  }

});