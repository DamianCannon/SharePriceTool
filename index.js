var Price = require('./price');

console.log('hello');

var price = new Price();

price.download((value) => {
    console.log(`Closing price: ${value}`);
});

//var ticker = "BATS";

console.log('Done');