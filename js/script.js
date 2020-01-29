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

// 2.Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

// Creo un array contenente i dati degli studenti (definiti oggetti) e inserisco le caratteristiche di ognuno (nome, cognome, età). Eseguo il log e ottengo tutti i valori contenuti all'interno dell'array. Successivamente, vado a creare un ciclo for lavorando su tutta la lunghezza dell'array ed eseguo un log della variabile studentiClasse[i](estrapolo tutti i dati) e stampo il nome e il cognome.
var studentiClasse = [
  {
    'nome': 'Andrea',
    'cognome': 'Bottini',
    'eta': 36
  },

  {
    'nome': 'Alberto',
    'cognome': 'Bianchi',
    'eta': 22
  },

  {
    'nome': 'Luigi',
    'cognome': 'Piccoli',
    'eta': 30
  },

  {
    'nome': 'Marco',
    'cognome': 'Grandi',
    'eta': 36
  }
]
// console.log(studentiClasse);
for (var i = 0; i < studentiClasse.length; i++) {
  console.log('I nominativi sono i seguenti: ' + studentiClasse[i].nome + ' ' + studentiClasse[i].cognome);
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// Creo tre prompt impostando tre varibili, che diano la possibilità all'utente di inserire i propri dati. Successivamente, creo una variabile per un nuovo studente (var = studenteNew), nella quale inserisco le varibili create in precedenza. Successivamente, utilizzo la proprietà .push per associare il nuovo studente all'array esistente ed eseguo un log per la stampa.

var nomeNew = prompt('Inserisci il tuo nome');
var cognomeNew = prompt('Inserisci il tuo cognome');
var etaNew = parseInt(prompt('Inserisci la tua età'));
console.log(nomeNew, cognomeNew, etaNew);

var studenteNew = {
  'nome': nomeNew,
  'cognome': cognomeNew,
  'eta': etaNew
}

studentiClasse.push(studenteNew)
console.log(studentiClasse);

// Posso creare anche un ciclo for per inserire il nuovo studente all'interno dell'array creato in precedenza. Come effettuato in precedenza, il ciclo for è costruito utilizzando la proprietà .length che mi permette di ciclare tutta la lunghezza dell'array. Creo una variabile dove si verificherà l'uguaglianza tra i dati inseriti dal nuovo utente e gli studenti della classe. Successivamente stampo un log per stampare l'array con il nuovo utente aggiunto.

for (var i = 0; i < studentiClasse.length; i++) {
  var inserimentoPrompt = studentiClasse[i]
  console.log(inserimentoPrompt);
}
