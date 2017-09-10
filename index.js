//import yahooFinance from ('yahoo-finance');
var yahooFinance = require('yahoo-finance');

console.log('hello');

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

  console.log('Done');