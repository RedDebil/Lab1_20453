const exchangeRates = {
    USD: 4.5,   // Kurs USD do PLN
    EUR: 4.9,   // Kurs EUR do PLN
    GBP: 5.3,   // Kurs GBP do PLN
    JPY: 0.034, // Kurs JPY do PLN
    CHF: 4.8    // Kurs CHF do PLN
};

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

exports.toPLN = function(amount, currency) {
    if (!exchangeRates[currency]) {
        throw new Error("Nieobsługiwana waluta.");
    }
    return roundTwoDecimals(amount * exchangeRates[currency]);
};
