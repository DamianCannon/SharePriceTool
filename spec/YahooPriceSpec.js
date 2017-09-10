describe("YahooPrice", function() {
    var YahooPrice = require('../YahooPrice');
    var price;
    var historicPrices = [
        { ticker: 'BATS', date: '2017-07-31', price: 4713.5 },
        { ticker: 'AV', date: '2017-07-31', price: 539.0 },
        { ticker: 'GSK', date: '2017-07-31', price: 1514.50 },
        { ticker: 'BOI', date: '2017-07-31', price: 210.75 },
    ];

    beforeEach(function() {
        price = new YahooPrice();
    });
  
    it("should exist", function() {
        expect(price).toBeDefined();
    });

    it("should return a value for a ticker and a date", function(done) {
        var testStock = historicPrices.filter(x => x.ticker === 'BATS')[0];
        price.downloadSinglePrice(testStock.ticker, testStock.date, (value) => {
            expect(value).toBe(testStock.price);
            done();
        });
    });

    it("should return nothing for a ticker that's not found", function(done) {
        var testStock = historicPrices.filter(x => x.ticker === 'BOI')[0];
        price.downloadSinglePrice(testStock.ticker, testStock.date, (value) => {
            expect(value).toBeUndefined();
            done();
        });
    });
    
    it("should return a value for multiple tickers and a date", function(done) {
        var testStock = historicPrices.filter(x => x.ticker === 'BATS')[0];
        var testStockTickers = historicPrices.map(x => x.ticker);
       
        price.downloadMultiplePrices(testStockTickers, testStock.date, (value) => {
            expect(value[0].close).toBe(historicPrices.filter(x => x.ticker === 'BATS')[0].price);
            expect(value[1].close).toBe(historicPrices.filter(x => x.ticker === 'AV')[0].price);
            expect(value[2].close).toBe(historicPrices.filter(x => x.ticker === 'GSK')[0].price);
            done();
        });
    });
    
});