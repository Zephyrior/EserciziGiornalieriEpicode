/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

console.log("Eser 1:");

function area(l1,l2) {
    let area = l1 * l2;
    return area;
}
let area1 = area(5,2);
console.log(area1);
console.log("*******************");



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log ("Eser 2:");

function crazySum(p1,p2) {
    if (p1 === p2) {
        let crazySum = (p1+p2)*3;
        return crazySum;
    } else {
        let crazySum = p1+p2;
        return crazySum;
    }  
}
let somma1 = crazySum(1,2);
console.log(somma1);
let somma2 = crazySum(2,2);
console.log(somma2);
console.log("*******************");


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log("Eser 3:");

function crazyDiff(d1,d2=19) {
    let crazyDiff = d1-d2;
    if (d1>d2) {
        crazyDiff = (crazyDiff)*3;
    } else {
    return crazyDiff;
    }
}
let diff1 = crazyDiff(1);
console.log(Math.abs(diff1));

let diff2 = crazyDiff(21);
console.log(Math.abs(diff2));
console.log("*******************");

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log("Eser 4:");

function boundary(n) {
    if (n >= 20 && n <=100 || n === 400) {
     return console.log(true);
    } else {
        return console.log(false);
    }
}
boundary(400);


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("Eser 5:");

function epify(a) {
    if (typeof a === "string" && a.includes("EPICODE") == true) {
        return console.log(a);
     } else {
        return console.log("EPICODE", (a));
     }
} 
epify("EPICODE ciao");


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log("Eser 6:");
function check3and7(odd) {
    if (odd > 0 && odd % 3 == 0 || odd % 7 == 0 ) {
        return console.log("Il parametro è un multiplo o di 3 o di 7")
    } else {
        return console.log ("Il parametro non è un multiplo o di 3 o di 7")
    }
}
check3and7(21);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
