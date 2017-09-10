var yahooFinance = require('yahoo-finance');

function Price() {}

Price.prototype.downloadSinglePrice = function(ticker, date, callback) {
    var tickerForLSE = `${ticker}.L`;
    
    yahooFinance.historical({
        symbol: tickerForLSE,
        from: date,
        to: date,
        period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
    }, function (err, quotes) {
        callback(quotes[0].close);
    });
};

Price.prototype.downloadMultiplePrices = function(tickers, date, callback) {
    var tickersForLSE = tickers.map(x => `${x}.L`);
    
    yahooFinance.historical({
        symbols: tickersForLSE,
        from: date,
        to: date,
        period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
    }, function (err, quotes) {
        var results = [];
        for (var key in quotes) { results.push(quotes[key].pop()) };
        var closePrices = results.map(x => { return ({symbol: x.symbol, close: x.close})});
     
        callback(closePrices);
    });
};

module.exports = Price;