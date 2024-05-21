const quotesList = [
  "The only way to do great work is to love what you do",
  "In the middle of difficulty lies opportunity.",
  "The future belongs to those who believe in the beauty of their dreams",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Believe you can and you're halfway there.",
  "The only impossible journey is the one you never begin.",
  "Be yourself everyone else is already taken.",
  "It does not matter how slowly you go as long as you do not stop.",
  "The best way to predict the future is to invent it."
];
const authors = [
  "Steve Jobs",
  "Albert Einstein",
  "Eleanor Roosevelt",
  "Winston Churchill",
  "Franklin D. Roosevelt",
  'Theodore Roosevelt',
  "Tony Robbins",
  "Oscar Wilde",
  "Confucius",
  "Alan Kay"
];
const btnControl = document.getElementById("quote-btn");
const quotesPara = document.getElementById("quotes");
const authorName = document.getElementById("author");
const copy = document.getElementById('copytoclip');
const quotesLength = quotesList.length;
btnControl.addEventListener("click", function () {
  const random = Math.floor(Math.random()*quotesLength);
  quotesPara.innerText = `"${quotesList[random]}"`;
  authorName.innerText=`${authors[random]}`;
});



function copyTextToClipboard(text) {
  console.log(text);
  navigator.clipboard.writeText(text);
}

copy.addEventListener('click',copyTextToClipboard(copy));
