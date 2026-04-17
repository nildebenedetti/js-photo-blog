# Workflow

**1. Costruire la fetch in js e farla funzionare**
- controlla che la richiesta venga processata correttamente con il method json()
- setta correttamente sia catch che finally restituendo allútente update su cosa sta succedendo in pagina
- dentro il .then dovremo arcodare una funzione per gestire la creazione delle card scorrendo lárray degli oggetti

**2. creare la card con innerHTML injection**
- usero'una funzioone per rendere il codice piu chiaro, annidata nel .then
- uso for...of o for...each? TBD


# Dos & Don'ts
- aggiungere ulteriori livelli di validazione controllando che i querySelector restituiscano !==null
- usare @-ts per definire obj e variabili
- CSS puro senza Bootstrap? tentative

# Consecutio Tempori in UI/UX
n.b. pensa a come utilizzare la d-none per lavorare correttamente
1. messaggio di caricamento 
2. lancio della fetch
3. .finally rimuove il messaggio di caricamento, e si risolve con .then o .catch 


# bonus
- layout responsive con media query
- input caricamento nuova card con form e input type=file
        possiamo legarci con advent listener al caricamento del file
        immagineInputElem.addEventListener('change', (event) => {
            // SE immagineInputElem.files e' diverso da null && immagineInoputElem.files.length > 0 && immagineThumbnailEWElem !==null
            // creo costante immagine per accedere asl primo file
            const image = immagineInputElem.files[0];
            // posso creare url
            const imageUrl = URL createObjectURL;
            
            //devo recuperare la thumbnail