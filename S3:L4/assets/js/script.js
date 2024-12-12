for (let i = 0; i < 76; i++) {
    let celleTombola = document.createElement('div');
    celleTombola.className = "celleTombola";
    let numTombola = document.createElement("h3");
    let tableTombola = document.querySelector("#tableTombola");
    numTombola.innerText = i+1;
    celleTombola.appendChild(numTombola);
    tableTombola.appendChild(celleTombola);
}


/* for (let i = 0; i < 76; i++ ) {
    let numEstratto = document.querySelector("#numEstratto")
    let numRandom = function (){

    } 
    numEstratto.innerText = numRandom
} */

function estrazioneNum(num) {
    let numEstratto = document.querySelector("#numEstratto");
    let celleTombola = document.querySelectorAll(".celleTombola")
    let numRandom = Math.round(Math.random()*(num));

    if (mainBoardNum.length === num) {
        alert('Estrazione Finita!')
        return       
    }

    if(!mainBoardNum.includes(numRandom) && numRandom !== 0){
        mainBoardNum.push(numRandom);
        numEstratto.innerText = numRandom;
        //celleTombola[numRandom-1].classList.add("estratto")
        //celleTombola[numRandom].style.color = "blue"
        console.log(mainBoardNum);
        //console.log(celleTombola)
        celleTombola[numRandom-1].classList.add('estratto');
        } else {
            estrazioneNum(num)
        }
    }
randomButton.addEventListener("click", () => estrazioneNum(NumeriTombola));

const NumeriTombola = 76;
const mainBoardNum = [];

/*
function tombolaSelector () {
let randomButton = document.querySelector("#randomButton")
let numChiamati =[]
numChiamati.push() = randomButton.addEventListener("click", estrazioneNum);
let numTombola = document.querySelectorAll("h3")
if (numChiamati[i] === numTombola) {
    numTombola[i].style.color ="red"
}}
randomButton.addEventListener("click", tombolaSelector)
*/