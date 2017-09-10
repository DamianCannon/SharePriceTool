describe("Price", function() {
    var Price = require('../Price');
    var price;
  
    beforeEach(function() {
        price = new Price();
    });
  
    it("should exist", function() {
        expect(price).toBeDefined();
    });

    it("should return a value", function(done) {
        price.download((value) => {
            expect(value).toBe(0);
            done();
        });
    });
    
});