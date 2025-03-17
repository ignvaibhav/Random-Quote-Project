const quoteElement = document.querySelector('.quote')
const authorElement = document.querySelector('.author-name')
const changeQuoteButton = document.querySelector('.change-quote')
const clipboard = document.querySelector('.clipboard')
const twitter = document.querySelector('.twitter')
const body = document.querySelector('body')

const tweetingUrl = 'https://twitter.com/intent/tweet?text='
let quoteData

updateQuote()


async function newQuote() {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/quotes/quote/random"
      );
      quoteData = await response.json();
    } catch (error) {
      return error;
    }
  }


async function updateQuote() {
  await newQuote()
  quoteElement.innerHTML = `"${quoteData.data.content}"`
  // console.log(quoteData.data.content);
  authorElement.innerHTML = `${quoteData.data.author}`
  
}


clipboard.addEventListener('click', ()=>{
  try{
    navigator.clipboard.writeText(quoteData.data.content)
    alert('Quote Copied 🥰')
    
  }catch{
    console.log('fucked up bro');
    
  }
})


twitter.addEventListener('click', ()=>{
  alert("let's go to twitter 🐥")
  window.open(`${tweetingUrl}`+ `${quoteData.data.content}`)
})


changeQuoteButton.addEventListener('click', ()=>{
  updateQuote()
})