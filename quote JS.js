const quoteContainer =document.getElementById('quote-container');
const authortext =document.getElementById('author-text');
const twitterbtn =document.getElementById('twitter');
const newquotes =document.getElementById('newquote');
const quotetext =document.getElementById('quotes');
const loaderr =document.getElementById('loader');

let apiquotes = [];


// Show loading
function loading(){
    loaderr.hidden =false;
    quoteContainer.hidden = true;
}
// // Hide loading
function complete(){
    loaderr.hidden =true;
    quoteContainer.hidden = false;
}

// show new quote
function newquote(){
    loading();
    const quoteeee = apiquotes[Math.floor(Math.random() * apiquotes.length)];
    if(quoteeee.author == null){
       authortext.textContent = 'Unknown'; 
    } else{
        authortext.textContent = quoteeee.author;
    }
    // check quote length to determining styling
   if(quoteeee.text.length > 120){
       quotetext.classList.add('long-quote')
   } else{
    quotetext.classList.remove('long-quote')
   }
    quotetext.textContent = quoteeee.text;
    complete();
}



// Get quotes from API
async function getquotes(){
    loading();
    const apiurls ='https://type.fit/api/quotes';
   
    try{
    const responses = await fetch(apiurls);
    apiquotes = await responses.json();
    newquote();    
    } catch(error){
        // catch error here
    }
}

// tweet your quote
function tweetquote(){
    const twitterurl = `https://twitter.com/intent/tweet?text=${quotetext.textContent} - ${authortext.textContent}`;
    window.open(twitterurl, '_blank');
}
// Event listeners
newquotes.addEventListener('click',newquote);
twitterbtn.addEventListener('click',tweetquote);


//on load
getquotes();

console.log('script');

