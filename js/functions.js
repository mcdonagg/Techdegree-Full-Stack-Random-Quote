function getRandomQuote(){
  var r;
  //create a random integer between 0 and the size of the quotes array
  r = Math.floor(Math.random() * (quotes.length));
  //return the quote from that index
  return quotes[r];
}

//Function to make a random hex color (I think in Hex not RGB)
function getRandomHexColor(){
  var color = '#';
  for(i=0;i<6;i++){
    //Randomly pull from an array of all the base 16 characters
    color += [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random() * 16)];
  }
  return color;
}
function printQuote() {
  var quote;
  var html;
  var color;
  //call the random quote generator to get the quote
  quote = getRandomQuote();

  //see if oldQuotes is the size of Quotes if so reset it
  if ( oldQuotes.length === quotes.length ){ oldQuotes=[];}
  //see if the quote has been used before, if it has try again
  while(true){
    if (oldQuotes.indexOf(quotes.indexOf(quote)) > -1){
      quote = getRandomQuote();
    } else {
      oldQuotes.push(quotes.indexOf(quote));
      console.log(oldQuotes)
      break;
    }
  }
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

  //set background-color
  color = getRandomHexColor();
  document.body.style.backgroundColor = color;
}
var oldQuotes = [];
