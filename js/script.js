// 1.Esercizio
// Palindroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


// Creaiamo una funzione per verificare che la parola sia palindroma
function textPalindroma(text){
    // Covertiamo la parola in minuscolo
    text = text.toLowerCase();

    // Creiamo una versione invertita della parola
    // .split() suddivide la parola in un array di caratteri
    // .reverse() inverte l'ordine dei caratteri
    // .join() ricompone l'array di nuovo in una stringa
    let reversed = text.split('').reverse('').join('');
    return reversed
}

// Chiediamo all'utente di inserire una parola
let textUser = prompt('Inserisci una parola')

// Verifichiamo se la parola inserita dall'utente è palindroma e stampiamone il risultato
if(textPalindroma(textUser) === textUser){
    console.log('Il risultato della parola ' + textUser + ' è ' + textPalindroma(textUser) + ' di conseguenza è palindroma')
}
else{
    console.log('Il risultato della parola ' + textUser + ' è ' + textPalindroma(textUser) + ' di conseguenza non è palindroma')
}


// 2.Esercizio
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri e stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

// Funzione per generare un numero casuale tra 1 e 5
function numeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;
}

// Funzione per determinare se un numero è pari o dispari
function pariODispari(somma) {
    return somma % 2 === 0 ? "pari" : "dispari";
}

// Funzione principale del gioco
function gioco() {
    // Chiediamo all'utente di scegliere pari o dispari
    let sceltaUtente = prompt("Scegli 'pari' o 'dispari':").toLowerCase();
    
    // Controlliamo che la scelta sia valida
    if (sceltaUtente !== 'pari' && sceltaUtente !== 'dispari') {
        alert("Scelta non valida. Devi scegliere 'pari' o 'dispari'.");
        return;
    }

    // Chiediamo all'utente di inserire un numero tra 1 e 5
    let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));
    
    // Verifica se il numero inserito è valido
    if (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente)) {
        alert("Numero non valido! Devi inserire un numero da 1 a 5.");
        return;
    }

    // Generiamo il numero casuale per il computer
    let numeroComputer = numeroCasuale();

    // Sommiamo i due numeri
    let somma = numeroUtente + numeroComputer;

    // Determiniamo se la somma è pari o dispari
    let risultatoSomma = pariODispari(somma);

    // Mostriamo i risultati
    alert(`Tu hai scelto: ${numeroUtente} e il computer ha scelto: ${numeroComputer}.`);
    alert(`La somma dei due numeri è: ${somma}, che è ${risultatoSomma}.`);

    // Dichiariamo chi ha vinto
    if (risultatoSomma === sceltaUtente) {
        alert("Hai vinto!");
    } else {
        alert("Hai perso. Riprova!");
    }
}

// Avviamo il gioco
gioco();



