var YahooPrice = require('./YahooPrice');
var GooglePrice = require('./GooglePrice');

var yahooPrice = new YahooPrice();
var googlePrice = new GooglePrice();

var tickers = ['ACSO', 'AV', 'BOI', 'BKG', 'BLT', 'BVXP', 'BUR', 'CCC', 'DTG', 'FDM', 'FEVR', 'GAW', 
'GSK', 'HEAD', 'LTHM', 'LLPD', 'LXB', 'NWBD', 'NXT', 'NRR', 'PCA', 'CAKE', 'PHTM', 'PLP', 'PPH', 
'RBG', 'RWS', 'SOM', 'TAP', 'TET', 'WJG', 'XLM', 'XPP', 'ZYT']

var date = '2017-07-04';

googlePrice.downloadMultiplePrices(tickers, date, (value) => {
    console.log(value);
});

// tickers.forEach((tick, index, thing) => {
//     yahooPrice.downloadSinglePrice(tick, date, (value) => {
//         console.log(`${tick} ${value}`);
//     });
// })
