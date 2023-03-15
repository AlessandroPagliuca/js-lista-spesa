/**
Descrizione:
Rivediamo l’esercizio visto insieme, 
ma questa volta con il ciclo while al posto del ciclo for.
Facciamo attenzione a non dimenticare
tutte le differenze implementative che il ciclo while ci impone, 
in particolare alla variabile di indice.
 */

// sviluppiamo il nostro array della listaSpesa

const listaSpesa = ['pane', 'pasta', 'frutta', 'pomodori', 'zucchero']
console.log(listaSpesa.length)
//creiamo il ciclo while per stampare lista spesa dentro <ul>

let counter = 0;
while(counter < listaSpesa.length){
    console.log(listaSpesa[counter]);
    const spesaN = document.createElement('li');
    spesaN.innerHTML = listaSpesa[counter];
    const lista = document.querySelector('ul');
    lista.appendChild(spesaN);

    counter++;
}