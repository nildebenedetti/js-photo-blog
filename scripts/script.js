'use strict';

// @ts--check

// Riferimenti DOM

const loadingMsg = document.querySelector('.loading-content'); // div con msg caricamento
const errorMsg = document.querySelector('.error-content');     // div con msg errore

//======== MY FUNCTIONS =======//

// prende come argomento un array di oggetti
// struttura una card in html 
// valorizza la card con i dati presenti nellárray di oggetti
// utilizzando un for of per scorrere tutti gli indici e prendere quello che serve

function returnCards(ArrayofObjects) {
    console.log(ArrayofObjects); //test 
    
}


/*1. Costruire la fetch in js e farla funzionare**
- dentro il .then dovremo arcodare una funzione per gestire la creazione delle card scorrendo lárray degli oggetti*/

const API_URL = 'https://lanciweb.github.io/demo/api/pictures/'; // dichiaro variabile per API 

fetch(API_URL) // inserisco la fetch - PIANO TEMPORALE PRESENTE
    .then ((result) => { // promessa di restituire dati - PIANO TEMPORALE CODICE ASINCRONO 1
        return result.json(); // quando avro'i dati, li converto con il method json e li restituisco al prossimo then
    })
    .then ((jsonData) => { // quando avro' i dati - PIANO TEMPORALE CODICE ASINCRONO 2
        // inizio a costruire le mie card in questo piano temporale
        returnCards(jsonData);
    })
    .catch ((error) => { // SE si risolve in caso negativo
        console.log('error'); // check
        // rimuoviamo la d-none se c'e risoluzione negativa
        errorMsg.classList.remove('d-none');
    })
    .finally (() => { // PIANO TEMPORALE ULTIMO, SI VERIFICA IN OGNI TIPO DI RISOLUZIONE
        loadingMsg.classList.add('d-none'); // aggiungi utility class d-none al loading message
    })


