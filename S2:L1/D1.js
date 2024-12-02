/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


let eser_1 = "Esercizio 1: Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino."
let stringa = "Stringa - una variabile di valore stringa contiene valori alfanumerici che viene definita dentro le virgolette."   
let numerico = "Numerico - una variabile di valore numerico contiene i numeri e non deve essere definita dentro le virgolette."
let boolean = "Boolean -  una variabile di valore boolean contiene i valori di tipo vero o falso."
let nonDefinito = "Undefined - una variabile che non ha valore o ancora da definire."
let nll = "Null - una variabile che inizialmente aveva un valore che poi è stato tolto intenzionalmente."
console.log(eser_1);
console.log(stringa);
console.log(numerico);
console.log(boolean);
console.log(nonDefinito);
console.log(nll);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 let eser_2 = "Esercizio 2: Crea una variable chiamata myName e assegna ad essa il tuo nome, sotto forma di stringa.";
 const myName = "Mark";
 console.log(eser_2);
 console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/


   let eser_3 = "Esercizio 3: Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20."
   let a = 12;
   let b = 20;
   let c = a + b;
   console.log(eser_3);
   console.log(c);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/


   let eser_4 = "Esercizio 4: Crea una variable di nome x e assegna ad essa il numero 12."
   let x = 12;
   console.log(eser_4);
   console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

  let eser_5 = "Esercizio 5: Riassegna un nuovo valore alla variabile myName già esistente: il tuo cognome. Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.";
  // myName = "Temblique";
  console.log(eser_5);
  console.log(myName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


  let eser_6 = "Esercizio 6: Esegui una sottrazione tra i numeri 4 e la variable x appena dichiarata (che contiene il numero 12)."; 
  x = x - 4; 
  console.log(eser_6);
  console.log(x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let eser_7 = "Esercizio 7: Crea due variabili: name1 e name2. Assegna a name1 la stringa john, e assegna a name2 la stringa John (con la J maiuscola!). Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa). EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!)."
let name1 = "john";
let name2 = "John";
console.log(name1);
console.log(name2);

if (name1 === name2){
  console.log("john è uguale a John")  
} else 
  console.log("john non è uguale a John perché il primo inizia minuscolo e il secondo inizia con maiuscolo");
 
// if (name1 == name2)