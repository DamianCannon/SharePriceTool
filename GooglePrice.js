var googleFinance = require('google-finance');

function GooglePrice() {}

GooglePrice.prototype.downloadSinglePrice = function(ticker, date, callback) {
    var tickerForLSE = `${ticker}.L`;
    
    googleFinance.historical({
        symbol: tickerForLSE,
        from: date,
        to: date
    }, function (err, quotes) {
        if (quotes.length > 0) {
            callback(quotes[0].close);
        } else {
            callback();
        }
    });
};

GooglePrice.prototype.downloadMultiplePrices = function(tickers, date, callback) {
    var tickersForLSE = tickers.map(x => `${x}.L`);
    
    googleFinance.historical({
        symbols: tickersForLSE,
        from: date,
        to: date,
    }, function (err, quotes) {
        var results = [];
        for (var key in quotes) { results.push(quotes[key].pop()) };
        var closePrices = results.filter(x => x != undefined).map(x => { return ({symbol: x.symbol, close: x.close})});
     
        callback(closePrices);
    });
};

module.exports = GooglePrice;