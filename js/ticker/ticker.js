// Coinmarketcap Ticker BitcoinX
// =============
// Author: BitcoinX - Denis
// Improvements by contributor Denis
// Created: 13/06/2018
// Date: 13/06/2018
// Website: http://bcx.org
// Description: Shows the current price of BitcoinX on the page.
//

(function ( $ ) {
  $.fn.ticker = function( options ) {
    var ele = this

    $.ajax({
      dataType: 'json',
      url: 'https://api.coinmarketcap.com/v2/ticker/' + options.symbolId + '/',
    })
    .done(function(res) {
      ele.find('.price').html(res.data.quotes.USD.price)
    })
    .done(function(res) {
      ele.find('.percent_change_24h').html(res.data.quotes.USD.percent_change_24h)
    })
    .done(function(res) {
      ele.find('.percent_change_1h').html(res.data.quotes.USD.percent_change_1h)
    })
    .fail(function() {
      ele.html('##Error##')
    })
    .always(function() {  });
    
  };
}(jQuery));