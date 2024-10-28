const currency1 = require('./currency1');
const Currency = require('./currency2');

console.log("Przeliczenia za pomocą currency1:");
console.log("50 USD to PLN:", currency1.toPLN(50, "USD"));
console.log("50 EUR to PLN:", currency1.toPLN(50, "EUR"));
console.log("50 GBP to PLN:", currency1.toPLN(50, "GBP"));
console.log("5000 JPY to PLN:", currency1.toPLN(5000, "JPY"));
console.log("50 CHF to PLN:", currency1.toPLN(50, "CHF"));

console.log("\nPrzeliczenia za pomocą currency2:");
let currency2 = new Currency();
console.log("50 USD to PLN:", currency2.toPLN(50, "USD"));
console.log("50 EUR to PLN:", currency2.toPLN(50, "EUR"));
console.log("50 GBP to PLN:", currency2.toPLN(50, "GBP"));
console.log("5000 JPY to PLN:", currency2.toPLN(5000, "JPY"));
console.log("50 CHF to PLN:", currency2.toPLN(50, "CHF"));
