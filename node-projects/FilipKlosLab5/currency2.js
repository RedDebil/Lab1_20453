class Currency {
    constructor() {
        this.exchangeRates = {
            USD: 4.5,
            EUR: 4.9,
            GBP: 5.3,
            JPY: 0.034,
            CHF: 4.8
        };
    }

    roundTwoDecimals(amount) {
        return Math.round(amount * 100) / 100;
    }

    toPLN(amount, currency) {
        if (!this.exchangeRates[currency]) {
            throw new Error("Nieobsługiwana waluta.");
        }
        return this.roundTwoDecimals(amount * this.exchangeRates[currency]);
    }
}

module.exports = Currency;
