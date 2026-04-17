'use strict';

// @ts--check

/*1. Costruire la fetch in js e farla funzionare**
- controlla che la richiesta venga processata correttamente con il method json()
- setta correttamente sia catch che finally restituendo allútente update su cosa sta succedendo in pagina
- dentro il .then dovremo arcodare una funzione per gestire la creazione delle card scorrendo lárray degli oggetti*/

const API_URL = 'https://lanciweb.github.io/demo/api/pictures/'; // dichiaro variabile per API

fetch(API_URL) // inserisco la fetch - PIANO TEMPORALE PRESENTE
    .then ((result) => { // promessa di restituire dati - PIANO TEMPORALE CODICE ASINCRONO 1
        return result.json(); // quando avro'i dati, li converto con il method json e li restituisco al prossimo then
    })
    .then ((jsonData) => { // quando avro' i dati - PIANO TEMPORALE CODICE ASINCRONO 2
        console.log(jsonData); // stampero'in console per check
    })
    .catch ((error) => { // SE si risolve in caso negativo
        console.log('error'); // check
        
    })

