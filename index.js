var YahooPrice = require('./YahooPrice');

console.log('hello');

var price = new YahooPrice();

var tickers = ['ACSO', 'AV', 'BOI', 'BKG', 'BLT', 'BVXP', 'BUR', 'CCC', 'DTG', 'FDM', 'FEVR', 'GAW', 
'GSK', 'HEAD', 'LTHM', 'LLPD', 'LXB', 'NWBD', 'NXT', 'NRR', 'PCA', 'CAKE', 'PHTM', 'PLP', 'PPH', 
'RBG', 'RWS', 'SOM', 'TAP', 'TET', 'WJG', 'XLM', 'XPP', 'ZYT']

var date = '2017-07-04';

// price.downloadMultiplePrices(tickers, date, (value) => {
//     console.log(value);
// });

tickers.forEach((tick, index, thing) => {
    price.downloadSinglePrice(tick, date, (value) => {
        console.log(`${tick} ${value}`);
    });
})

console.log('Done');