// alert('funziona?')
//
// Esercizio 1
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// 1.Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

// Recupero l'informazione relativa ad un elemento dello studente. Ad esempio il cognome. Creo una variabile, dove vado ad inserire i dati che mi interessano (nome, cognome, età) li inserisco all'interno delle parentesi graffe e poi creo un console.log dell'elemento studente + .cognome(la caratteristica che mi interessa in questo caso).

var studente = {
  'nome': 'Andrea',
  'cognome': 'Bottini',
  'eta': 36
}
console.log(studente['cognome'], studente['nome'], studente.eta);

// Se voglio stampare tutti i dati presenti all'interno dell'oggetto, potrò utilizzare il ciclo for... in che mi permette di andare a raggruppare e recuperare tutti gli elementi all'interno di un oggetto. Creo un ciclo for, nel quale scriverò var key(key indica il nome su cui vado a lavorare, solitamente è key, ma posso chiamarlo come voglio), poi scrivo 'in' e dichiaro dove cercare gli attributi che mi interessano. Dopodichè creo un console.log composto dal nome della variabile e tra le quadre [] la key.

var studente = {
  'nome': 'Andrea',
  'cognome': 'Bottini',
  'eta': 36
}

for (var attributiCheMiInteressano in studente) {
  console.log(studente[attributiCheMiInteressano]);
}
