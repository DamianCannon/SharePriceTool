var download = require('./price').download;

console.log('hello');

download((value) => {
    console.log(`Closing price: ${value}`);
});

//var ticker = "BATS";

console.log('Done');