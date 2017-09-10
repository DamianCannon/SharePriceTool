var yahooFinance = require('yahoo-finance');

exports.download = function() {
    var ticker = "BATS";
    
    yahooFinance.historical({
        symbol: `${ticker}.L`,
        from: '2017-07-31',
        to: '2017-07-31',
        period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
      }, function (err, quotes) {
    
        quotes.forEach(function(quote) {
            console.log(`Closing price: ${quote.close}`);
            
        }, this);
    
      });
}
