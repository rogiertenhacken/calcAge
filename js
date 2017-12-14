// the javascript file


const date = new Date('2011-10-10'); //geboortedatum
const date2B = date.getTime() //om datum om te zetten naar timestamp
console.log(date2B + ' date2B'); //extra string is om te zien wat wat is in de console ;)


const date2 = new Date(); //datum vandaag
const date2A = date2.getTime() //om datum om te zetten naar timestamp
console.log(date2A + ' date2A');

var date3 = date2A - date2B; //vandaag(timestamp) min geboortedatum(timestamp), geeft helaas een nieuwe timestamp datum
console.log(date3 + ' date3');

var ts = new Date(date3);
console.log(ts.toDateString() + ' ts'); //zet date3 om naar human-readable date maar var date3 moet het tijdsverschil of de verstreken tijd berekenen tussen de twee data



