// Ask the number of km you want to travel and the age of the passenger. Based on the information calculate the ticket price
// THE TICKET PRICE IS DEFINED ON THE BASIS OF KM(0.21 EURO PER KM);
// 20 % DISCOUNT FOR MINORS;
// 40% DISCOUNT FOR OVER 65;

// ask user the number of km he will have to travel;
// ask user's age;
// define the price based on the km to be covered;
// apply the discount if the user falls within the specified age ranges;

// Ask km numbers
let kmNumber = parseInt(prompt("How many km will you have to travel?"));
console.log(kmNumber);
// Ask age
let age = parseInt(prompt("How old are you?"));
console.log(age);
// Multiply Km numbers * ticket price
let kmPrice = kmNumber * 0.21;
console.log("Your ticket price is:" + " " + kmPrice.toFixed(2) + "€");

// Minor age discount
let minorDiscount = (kmPrice * 20) / 100;

// Over 65 discount
let overDiscount = (kmPrice * 40) / 100;

// Refresh when user write a wrong value
if (isNaN(kmNumber)) {
  alert("You entered a wrong value, refresh the page and try again");
}

if (isNaN(age)) {
  alert("You entered a wrong value, refresh the page and try again");
}

// Discount application
if (age < 18) {
  kmPrice = kmPrice - minorDiscount.toFixed(2);
} else if (age > 65) {
  kmPrice = kmPrice - overDiscount.toFixed(2);
} else {
  kmPrice.toFixed(2);
}

// Stamp in html
document.getElementById("price").innerHTML = kmPrice.toFixed(2);
