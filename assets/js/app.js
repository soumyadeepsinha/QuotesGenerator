AOS.init();
const quote = document.getElementById('quote')
const author = document.getElementById('author');
const button = document.getElementById('btn');
const tweet = document.getElementById('tweet')
let data = '';
let quoteData = '';

const getNewQuotes = () => {
  let num = Math.floor(Math.random() * 1500);
  quoteData = data[num];
  quote.innerText = `${quoteData.text}`;
  quoteData.author == null
    ? (author.innerText = 'unKnown')
    : author.innerText = `${quoteData.author}`;
}


const getQuotes = async () => {
  const url = 'https://type.fit/api/quotes';
  try {
    const qoutes = await fetch(url);
    data = await qoutes.json();
    getNewQuotes();
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener('click', getNewQuotes);
tweet.addEventListener('click', tweetNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${quoteData.text}`;
  window.open(tweetPost);
})

getQuotes();