// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// NON USARE SPLIT E REVERSE!!! TUTTO CON CICLO FOR

// passaggi
// dati 
// richiesta della parola all'utente
// creare una funzione di controllo che ne verifica la caratteristica di palindromità

// creazione funzione
// nome: palindroma
// parametri richiesti: la parola
// deve restituire valaore booleano


const userWord = prompt("scrivi qui la tua parola")

function palindroma(parolaToCheck){
  for(let i=0; i<parolaToCheck; i++)
  if (parolaToCheck[0] === parolaToCheck[parolaToCheck.length-1]){
    let counterCheck= parolaToCheck[0] + 1 && parolaToCheck[parolaToCheck.length - 1] -1;
    
  }else if{
    console.log("la parola è palindroma")
    
  }else{
    console.log("la parola non è palindroma")
  }
}

const finalCheck = palindroma(userWord);





// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// const numeroScelto = prompt("scegli un numero da 1 a 5");
// const numeroSceltoNum = parseInt(numeroScelto)
// console.log(numeroSceltoNum)

// function rndNumber() {
//     const  random = Math.floor(Math.random() * 5) + 1;
//     return random;
//   }

// const computerNum = rndNumber();
// console.log(computerNum)

// const somma = numeroSceltoNum + computerNum;
// console.log(somma)


// function isEven(numberToCheck) {
  
//     let even;
//     if (numberToCheck % 2 === 0) {
//       even = true;
//     } else {
//       even = false;
//     }
  
//     return even;
//   }

//   const risultatoFinale = isEven(somma);
//   console.log(risultatoFinale)







// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.Domande da  farsi quando si crea una funzione:
// 1. Come dovrebbe chiamarsi?
// 2. Ho bisogno di parametri?
// 3. Devo restituire un valore?
// 4. Se sì, di che tipo?Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:


