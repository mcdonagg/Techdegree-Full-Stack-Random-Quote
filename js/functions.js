function getRandomQuote(){
  var r;
  //create a random integer between 0 and the size of the quotes array
  r = Math.floor(Math.random() * (quotes.length));
  //return the quote from that index
  return quotes[r];
}

function printQuote() {
  var quote;
  var html;
  //call the random quote generator to get the quote
  quote = getRandomQuote();

  //create the HTML string to show the quote
  html = '<p class="quote">' + quote.quote + '</p>';
  html += '<p class="source">' + quote.source;
  //if citation exists
  if(quote.citation != null){html += '<span class="citation">' + quote.citation + '</span>';}
  //if year exists
  if(quote.year != null){html += '<span class="year">' + quote.year + '</span>';}
  html += '</p>';

  //send that string to the DOM
  document.getElementById('quote-box').innerHTML = html;
}
