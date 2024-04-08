const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Creates an array which contains only the the first and last name of the entrepreneurs
let namelist = [];
for (let n = 0; n < entrepreneurs.length; n++) {
  let entrepreneur = entrepreneurs[n];
  namelist.push(entrepreneur.first + ' ' + entrepreneur.last);
};
console.log("liste des entrepreneurs par nom :", namelist);

// Replace the birth year with the age of the entrepreneurs + first and last with firstName and Lastname
const currentYear = new Date().getFullYear();
const entrepreneursAge = entrepreneurs.map(entrepreneur => ({
  firstName: entrepreneur.first,
  lastName: entrepreneur.last,
  age: currentYear - entrepreneur.year
}));
console.log("âge actuel des entrepreneurs : ", entrepreneursAge)

// Filter entrepreneurs born in the 70's
let seventies = entrepreneursAge.filter(entrepreneur => (entrepreneur.age >= 45 && entrepreneur.age < 54));
console.log("entrepreneurs nés dans les années 70 :", seventies)