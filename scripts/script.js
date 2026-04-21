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

    for (const object of ArrayofObjects) { // per ogni oggetto dell'arrauy
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

//============= EVENT HANDLERS =============//

// PER LA GESTIONE DEL CLICK SULLE FOTO DELLA GALLERY

function picClickHandler() {
    const card = event.target.closest('.card'); // il click mi deve selezionare la card con closest(.card) 
    if (!card) return; // capiamo se e'stat cliccata una card, altrimenti non fare nulla

    const clickedCardImage = card.querySelector('.photo'); // identifico img
    const clickedCardImageSrc = clickedCardImage.src; // trovo src da passare al modale
    const clickedCardImageAlt = clickedCardImage.alt // trovo il mio alt

    // ova vado a mettere nel mio modale img e alt
    modalImage.src = clickedCardImageSrc;
    modalImage.alt = clickedCardImageAlt;
    // tolgo d-none e aggiungo d-flex
    modalContainer.classList.remove('d-none');
    modalContainer.classList.add('d-flex');
}

// PER LA GESTIONE DEL CLICK DI USCITA DA MODALE

function btnCloseModalClickHandler() { // quando click, 
    modalContainer.classList.remove('d-flex'); // tolgo d-flex
    modalContainer.classList.add('d-none'); // add d-none e adios modale
}

// Per la gestione di btn add-memory

function btnAddMemoryClickHandler() { // quando click, 
    containerFormAddNewMemory.classList.remove('d-none'); // tolgo d-none
    containerFormAddNewMemory.classList.add('d-flex'); // add d-flex et voila il mio form
    btnAddMemory.classList.add('d-none');
}

//per la gestione click btn submit nel form

function btnFormSubmitClickHandler() {
    event.preventDefault(); // annulla refresh della pagina quando click sul form
    console.log('submit')
}

//==========================================//

//========== Riferimenti DOM ===============//

const loadingMsg = document.querySelector('.loading-content'); // div con msg caricamento
const errorMsg = document.querySelector('.error-content');     // div con msg errore
const cardContainer = document.querySelector('.card-container'); // card container
const API_URL = 'https://lanciweb.github.io/demo/api/pictures/'; // dichiaro variabile per API 
const modalImage = document.querySelector('.modal-image'); // immagine del modale
const modalContainer = document.querySelector('.modal-container'); // container del modale
const btnCloseModal = document.querySelector('.close-btn'); // bottone per chiudere modale
const btnAddMemory = document.querySelector('.add-memory-btn'); // bottone per mostrare la form
const containerFormAddNewMemory = document.querySelector('.new-memory-form-container'); // form container
const btnFormSubmit = document.querySelector('.btn-submit');
// creo obj con dati del form
const formDataEl = {
    memomryTitleEl: document.querySelector('#ricordo'),
    memoryDateEl: document.querySelector('#data'),
    memoryFotoInput: document.querySelector('#foto'),
    memoryFotoThumb: document.querySelector('#anteprima')
}
let myImgSlider = {};

//=========================================//

fetch(API_URL) // inserisco la fetch - PIANO TEMPORALE PRESENTE
    .then((result) => { // promessa di restituire dati - PIANO TEMPORALE CODICE ASINCRONO 1
        return result.json(); // quando avro'i dati, li converto con il method json e li restituisco al prossimo then
    })
    .then((jsonData) => { // quando avro' i dati - PIANO TEMPORALE CODICE ASINCRONO 2
        // invoco funzione per aggiungere card
        returnCards(jsonData);
    })
    .catch((error) => { // SE si risolve in caso negativo
        console.log(error); // check
        // rimuoviamo la d-none se c'e risoluzione negativa
        errorMsg.classList.remove('d-none');
    })
    .finally(() => { // PIANO TEMPORALE ULTIMO, SI VERIFICA IN OGNI TIPO DI RISOLUZIONE
        loadingMsg.classList.add('d-none'); // aggiungi utility class d-none al loading message
    });

cardContainer.addEventListener('click', picClickHandler); // aggiungo addEventlistener a card container

btnCloseModal.addEventListener('click', btnCloseModalClickHandler); // aggiungo adventlistener per bottone di chiusura del modale

btnAddMemory.addEventListener('click', btnAddMemoryClickHandler); // add adventListener click Aggiungi Ricordo

btnFormSubmit.addEventListener('click', btnFormSubmitClickHandler); // add eventlistener btn submit nel form

