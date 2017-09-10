describe("Price", function() {
    var Price = require('../Price');
    var price;
    var historicPrices = [
        { ticker: 'BATS', date: '31-Jul-2017', price: 4713.5 }
    ];

    beforeEach(function() {
        price = new Price();
    });
  
    it("should exist", function() {
        expect(price).toBeDefined();
    });

    it("should return a value for a ticker", function(done) {
        var testStock = historicPrices.filter(x => x.ticker === 'BATS')[0];
        price.download(testStock.ticker, (value) => {
            expect(value).toBe(testStock.price);
            done();
        });
    });
    
});