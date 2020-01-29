// alert('funziona?')
//
// Esercizio 1
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

// recupero l'informazione relativa ad un elemento dello studente. Ad esempio il cognome. Creo una variabile, dove vado ad inserire i dati che mi interessano (nome, cognome, età) li inserisco all'interno delle parentesi graffe e poi creo un console.log dell'elemento studente + .cognome(la caratteristica che mi interessa in questo caso).

var studente = {
  'nome': 'Andrea',
  'cognome': 'Bottini',
  'eta': 36
}
console.log(studente['cognome'], studente['nome'], studente.eta);
