var yahooFinance = require('yahoo-finance');

function YahooPrice() {}

YahooPrice.prototype.downloadSinglePrice = function(ticker, date, callback) {
    var tickerForLSE = `${ticker}.L`;
    
    yahooFinance.historical({
        symbol: tickerForLSE,
        from: date,
        to: date,
        period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
    }, function (err, quotes) {
        if (quotes.length > 0) {
            callback(quotes[0].close);
        } else {
            callback();
        }
    });
};

YahooPrice.prototype.downloadMultiplePrices = function(tickers, date, callback) {
    var tickersForLSE = tickers.map(x => `${x}.L`);
    
    yahooFinance.historical({
        symbols: tickersForLSE,
        from: date,
        to: date,
        period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
    }, function (err, quotes) {
        var results = [];
        for (var key in quotes) { results.push(quotes[key].pop()) };
        var closePrices = results.filter(x => x != undefined).map(x => { return ({symbol: x.symbol, close: x.close})});
     
        callback(closePrices);
    });
};

module.exports = YahooPrice;