// CHIDERE IL NUMERO DI KM CHE VORRA' PERCORRERE E L'ETA' DEL PASSEGGERO. IN BASE A QUESTE INFORMAZIONI CALCOLARE IL PREZZO DEL BIGLIETTO.
// IL PREZZO DEL BIGLIETTO E' DEFINITO IN BASE AI KM (0.21 EURO AL KM);
// SCONTO DEL 20 % AI MINORENNI;
// SCONTO DEL 40 % AGLI OVER 65;

// chiedere all'utente il numero di km che dovrà compiere;
// chiedere l'età dell'utente;
// definire il prezzo in base ai km che dovrà effettuare;
// applicare lo sconto nel caso che l'utente rientri nelle fasce d'età previste;

// Ask km numbers
const kmNumber = parseInt(prompt("How many km will you have to travel?"));
// Ask age
const age = parseInt(prompt("How old are you?"));
// Multiply Km numbers * ticket price
const price = kmNumber * 0.21;

// Minor age discount
const minorDiscount = (price * 20) / 100;

// Over 65 discount
const overDiscount = (price * 40) / 100;

// Discount application
if (age < 18) {
  price = price - minorDiscount.toFixed(2);
} else if (age > 65) {
  price = price - overDiscount.toFixed(2);
} else {
  price.toFixed(2);
}

document.getElementById("price").innerHTML = price.toFixed(2);
