const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// liste des titres des livres
const bookTitles = books.map(book => book.title);
console.log("liste des titres des livres :", bookTitles);

// tous les livres ont été empruntés au moins une fois ?
const rentedOnce = books.every(book => book.rented > 0);
console.log("les livres ont-ils été empruntés au moins une fois ? : ", rentedOnce);

// quel est le livre le plus emprunté ?
let mostRented = books.reduce((acc, book) => {
  if (acc.rented > book.rented) {
    return acc;
  } else {
    return book;
  }
});
console.log("le livre le plus emprunté est:", mostRented.title);

//livre le moins emprunté
let lessRented = books.reduce((acc, book) => {
  if (acc.rented < book.rented) {
    return acc;
  } else {
    return book;
  }
});

console.log("le livre le moins emprunté est :", lessRented.title)

//supprimer le livre avec l'id 133712
const bookId = books.filter(book => (book.id != 133712));
console.log("liste des livres sans l'id 133712 : ", bookId)
