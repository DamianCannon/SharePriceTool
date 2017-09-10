var yahooFinance = require('yahoo-finance');

function Price() {}

Price.prototype.download = function(ticker, callback) {
    yahooFinance.historical({
        symbol: `${ticker}.L`,
        from: '2017-07-31',
        to: '2017-07-31',
        period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
    }, function (err, quotes) {
        callback(quotes[0].close);

        // quotes.forEach(function(quote) {
        //     console.log(`Closing price: ${quote.close}`);
            
        // }, this);
    
      });
};

module.exports = Price;