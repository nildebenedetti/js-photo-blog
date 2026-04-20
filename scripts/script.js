'use strict';

// @ts--check

//=============== MY FUNCTIONS =============//

// prende come argomento un array di oggetti
// struttura una card in html 
// valorizza la card con i dati presenti nellárray di oggetti
// utilizzando un for of per scorrere tutti gli indici e prendere quello che serve

/**
 * @param {{id: string, title: string, date: string, url: string}[]} ArrayofObjects // correggi i nomi
 */

function returnCards(ArrayofObjects) {
    let tempContent = ''; // dichiaro stringa vuota da riempire a ogni giro del for of

    for ( const object of ArrayofObjects) { // per ogni oggetto dell'arrauy
        tempContent += `<!-- card #${object.id}--> 
            <div class="card memory-${object.id} d-flex">
                <div class="photocard-container">
                    <div class="pin-container">
                        <img src="./img/pin.svg" alt="" class="pin">
                    </div>
                    <img src="${object.url}" alt="${object.title}" class="photo">
                    <div class="photo-caption">
                        <p class="memory-date date-font">${object.date}</p>
                        <p class="memory-name title-font">${object.title}</p>
                    </div>
                </div>
            </div>`
    }
    return cardContainer.innerHTML = tempContent;
};

//==========================================//

//========== Riferimenti DOM ===============//

const loadingMsg = document.querySelector('.loading-content'); // div con msg caricamento
const errorMsg = document.querySelector('.error-content');     // div con msg errore
const cardContainer = document.querySelector('.card-container'); // card container
const API_URL = 'https://lanciweb.github.io/demo/api/pictures/'; // dichiaro variabile per API 

//=========================================//

fetch(API_URL) // inserisco la fetch - PIANO TEMPORALE PRESENTE
    .then ((result) => { // promessa di restituire dati - PIANO TEMPORALE CODICE ASINCRONO 1
        return result.json(); // quando avro'i dati, li converto con il method json e li restituisco al prossimo then
    })
    .then ((jsonData) => { // quando avro' i dati - PIANO TEMPORALE CODICE ASINCRONO 2
        // invoco funzione per aggiungere card
        returnCards(jsonData);
    })
    .catch ((error) => { // SE si risolve in caso negativo
        console.log(error); // check
        // rimuoviamo la d-none se c'e risoluzione negativa
        errorMsg.classList.remove('d-none');
    })
    .finally (() => { // PIANO TEMPORALE ULTIMO, SI VERIFICA IN OGNI TIPO DI RISOLUZIONE
        loadingMsg.classList.add('d-none'); // aggiungi utility class d-none al loading message
    });

// aggiungo addEventlistener a card container
// il click mi deve selezionare la card con closest(.card)
// recuperare img src
// passare la source come innertext di src e alt come alt
// rimuovere classe d-none + add d-flex


cardContainer.addEventListener('click', picClickHandler) 

function picClickHandler () {
    const card = event.target.closest('.card'); // capiamo se e'stat cliccata una card
    if (!card) return;

    const clickedCardImage = card.querySelector('.photo'); // identifico img
    const clickedCardImageSrc = clickedCardImage.src; // trovo src da passare al modale
    console.log(clickedCardImageSrc);

}

