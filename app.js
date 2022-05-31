/*
Descrizione:
- Visualizzare in pagina (html) 5 numeri casuali.
- Avviare un timer di 30 secondi
- Dopo 30 secondi, nascondere i numeri.
- L’utente deve inserire, uno alla volta, i numeri che 
    ha visto precedentemente, tramite un prompt().
- Dopo che sono stati inseriti i 5 numeri, il software dice 
    quanti e quali dei numeri da indovinare sono stati individuati.

*/


// variabili globali
const randomNumbersContainer = document.getElementById("randomNumber");
const timerContainer = document.getElementById("timerContainer");

// creo array vuoto dei numeri random da visualizzare 
let randomNumbers = [];
// creo array vuoto dei numeri inseriti dall'utente
let userNumbers = [];


// ciclo per creare i numeri random e pusharli nell'array randomNumbers
do {
    let createRandomNumber = Math.floor(Math.random() * 100) + 1;

    //controllare che il numero sia unico
    if (!randomNumbers.includes(createRandomNumber)) {
        randomNumbers.push(createRandomNumber);
    }
} while (randomNumbers.length < 5)


// stampare in html i numeri random
// come fare a spaziare l'interno dell'array???????????
randomNumbersContainer.innerHTML = `Memorizza questi numeri: <br> 
                                    <span >${randomNumbers}</span>`


// avviare un timer di 30 secondi
let secondsRange = 30;

// salvare in una variabile per fermare il countdown a 0
const timerSecondi = setInterval(function () {
    // decrementa a partire da 30
    secondsRange--;
    console.log(secondsRange);

    // timer stampato in html ma con sintassi non corretta???
    /* timerContainer.innerHTML = `00:0${secondsRange}`; */

    /* timerContainer.innerHTML = "00:" + syntaxController(secondsRange.toString(), 2, "0"); */
    timerContainer.innerHTML = "00:" + secondsRange.toString().padStart(2, "0");

    // quando var secondsRange e uguale a 0, si ferma il timer
    if (secondsRange === 0) {
        clearInterval(timerSecondi);
        randomNumbersContainer.innerHTML = `Inserisci,in alto, i numeri memorizzati :)`;
    }
}, 1000);

// ferma il countdown dopo 30 secondi fuori dall'intervallo
/* setTimeout(function () {
    clearInterval(timerSecondi);
}, 30000); */


// crea prompt in timeout dopo il countdown 
setTimeout(function () {

    do {
        const askUser = prompt("inserisci, uno alla volta, i numeri appena visualizzati");
        // controllo se inserisce non un numero
        if (isNaN(askUser)) {
            alert("inserisci un numero, non una lettera.")
        } else {
            userNumbers.push(askUser);
        }
    } while (userNumbers.length < 5)

    console.log("Numeri utente: " + userNumbers);
}, 31000);


// funzione per controllare la sintassi del timer
function syntaxController (text, lenght, placeholderChar) {
    let result = text;

    while(result.lenght < lenght) {
        result = placeholderChar + result;
    }
    
    return result;
}