
/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

console.log("Eser 1: Scrivi un algoritmo per trovare il più grande tra due numeri interi.");

let num1 = 5;
let num2 = 3;
if (num1 > num2) {
  console.log(num1)
} else console.log(num2);
console.log("***************************");

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

console.log("Eser 2: Scrivi un algoritmo che mostri 'not equal' in console se un numero intero fornito è diverso da 5.")

if(num1 !== 5) {
  console.log("not equal")
} else console.log(num1 + " is equal to 5");
console.log("***************************");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

console.log("Eser 3: Scrivi un algoritmo che mostri 'divisibile per 5' in console se un numero fornito è perfettamente divisibile per 5. suggerimento: usa loperatore modulo");
if (num1 % 5 == 0) {
  console.log(num1 + " è divisibile per 5.")
} else console.log(num1 + " non è divisibile per 5.");
console.log("***************************");


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log("Eser 4: Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.");

if (num1 == 8 || num2 == 8) {
  console.log("Il valore di uno delle variabili è uguale a 8")
} else if (num1 + num2 == 8 || num1 - num2 == 8){
  console.log("la somma o la differenza delle due variabili fanno 8");
}
console.log("***************************");


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log("Eser 5: Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dellutente in una variabile 'totalShoppingCart'. C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita altrimenti la spedizione ha un costo fisso pari a 10. Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.")
let totalShoppingCart = 60;
if (totalShoppingCart > 50){
  console.log("L'utente ha diritto alla spedizione gratuita e il prezzo totale da pagare è "), console.log(totalShoppingCart)

} else if (totalShoppingCart < 50){
  console.log("L'utente non ha diritto alla spedizione gratuita e il prezzo totale da pagare è"), console.log(totalShoppingCart+10)
}
console.log("***************************");

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log("Eser 6: Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto. Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.")

if (totalShoppingCart*0.8 > 50){
  console.log("L'utente ha diritto alla spedizione gratuita e il prezzo totale da pagare è "), console.log(totalShoppingCart*0.8)

} else if (totalShoppingCart*0.8 < 50){
  console.log("L'utente non ha diritto alla spedizione gratuita e il prezzo totale da pagare è"), console.log(totalShoppingCart*0.8+10)
}
console.log("***************************");

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
console.log("Eser 7: Crea tre variabili, e assegna un valore numerico a ciascuna di esse. Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso. Alla fine mostra il risultato in console.")
let num3 = 11;
let num4 = 15;
let num5 = 14;

if (num3 > num4 && num3 > num5 && num4 > num5){
  console.log(num3 + ">" + num4 + ">" + num5)  
} else if (num4 > num3 && num4 > num5 && num3 > num5) {
  console.log(num4 + ">" + num3 + ">" + num5)
} else if (num5 > num4 && num4 > num3 && num5 > num3) {
  console.log(num5 + ">" + num4 + ">" + num3)
} else if (num4 > num5 && num3 > num5 && num4 > num3) {
  console.log(num4 + ">" + num3 + ">" + num5)
} else if (num4 > num5 && num5 > num3 && num4 > num3){
  console.log(num4 + ">" + num5 + ">" + num3)
} else if (num5 > num3 && num3 > num4 && num5 > num4) {
  console.log(num5 + ">" + num4 + ">" + num3)
} 

console.log("***************************");

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
console.log("Eser 8: Crea un algoritmo per verificare che un valore fornito sia un numero oppure no suggerimento: cerca su un motore di ricerca typeof.")
console.log(typeof num3, typeof num4, typeof num5);
console.log("***************************");

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("Crea un algoritmo per controllare se un numero fornito sia pari o dispari suggerimento: cerca l'operatore modulo su un motore di ricerca")
if (num1 % 2 == 0) {
  console.log(num1 + " è un numero pari.")
} else console.log(num1 + " è numero dispari.");
console.log("***************************");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

console.log("Eser 10: Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.")
let val = 11
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
  console.log("***************************");


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

console.log("Eser 11: Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà 'city', il cui valore sarà 'Toronto'.");

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto";
console.log(me);
console.log("***************************");


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
console.log("Eser 12: Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà 'lastName'.");
delete me["lastName"];
console.log(me);
console.log("***************************");

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

console.log("Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà 'skills'.")
//me.splice(1, 2, 3);
console.log(me);
console.log("***************************");

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
console.log("Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.")
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArr)
console.log("***************************");


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
console.log("Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.")
myArr.splice(9, 1, 99);
console.log(myArr);

