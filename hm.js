pjs.addSuite({
  // single URL or array
  url: 'http://www2.hm.com/en_gb/sale/kids/viewall.html?product-type=kids_all&sort=stock&offset=0&page-size=5',
    
  // single function or array, evaluated in the client
  scraper: function() {
    return $("article.product-item").map(function(indx, el){
      return {name: $(el).find('a').text(), oldPrice: $(el).find('small').text(), price: $(el).find('.product-item-price').text().trim(), image: $(el).find('img').attr('data-image')};
    });
  }
});