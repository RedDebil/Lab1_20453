const readline = require("readline");
const math1 = require('./myMathModule1');
const MyMathModule = require('./myMathModule2');
let math2 = new MyMathModule();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Podaj pierwszą liczbę: ", function(a) {
    rl.question("Podaj drugą liczbę: ", function(b) {
        a = parseFloat(a);
        b = parseFloat(b);

        console.log("\nWyniki operacji z użyciem myMathModule1:");
        console.log(`Dodawanie: ${math1.add(a, b)}`);
        console.log(`Odejmowanie: ${math1.subtract(a, b)}`);
        console.log(`Mnożenie: ${math1.multiply(a, b)}`);
        console.log(`Dzielenie: ${math1.divide(a, b)}`);
        console.log(`Potęgowanie: ${math1.power(a, b)}`);

        console.log("\nWyniki operacji z użyciem myMathModule2:");
        console.log(`Dodawanie: ${math2.add(a, b)}`);
        console.log(`Odejmowanie: ${math2.subtract(a, b)}`);
        console.log(`Mnożenie: ${math2.multiply(a, b)}`);
        console.log(`Dzielenie: ${math2.divide(a, b)}`);
        console.log(`Potęgowanie: ${math2.power(a, b)}`);

        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nDo zobaczenia!");
    process.exit(0);
});
