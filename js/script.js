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




