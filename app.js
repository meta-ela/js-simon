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

// creo array vuoto dei numeri random da visualizzare 
let randomNumbers = [];


/* while (randomNumbers.length < 5) {
    let createRandomNumber = Math.floor(Math.random() * 5) + 1;

    //controllare che il numero sia unico
    if (!randomNumbers.includes(createRandomNumber)) {
        randomNumbers.push(createRandomNumber);
    }
} */

do {
    let createRandomNumber = Math.floor(Math.random() * 100) + 1;

    //controllare che il numero sia unico
    if (!randomNumbers.includes(createRandomNumber)) {
        randomNumbers.push(createRandomNumber);
    }
} while (randomNumbers.length < 5)

console.log(randomNumbers);

randomNumbersContainer.innerHTML = `Memorizza questi numeri: <br> 
                                    <span >${randomNumbers}</span>`;
