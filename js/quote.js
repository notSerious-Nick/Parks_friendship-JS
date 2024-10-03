const quotes = document.querySelector(".quote_quote");
const authors = document.querySelector(".quote_author");

const quoteArray= [
    {
        quote:"Don't waste your time chasing butterflies. Mend your garden, and the butterflies will come.",
        author:"Mario Quintana"
    },
    {
        quote: "You don't put bumper stickers on a Bentley.",
        author:"Kim Kardashian"
    },
    {
        quote:"Well, easy money is money easily lost.",
        author:"John Candy"
    },
    {
        quote: "Don’t walk behind me… I may not lead Walk beside me… just be my friend",
        author: "Albert Camus"
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard"
    },
    {
        quote:"Without music, life would be a mistake.",
        author:"Friedrich Nietzsche"
    },
    {
        quote:"We are all in the gutter, but some of us are looking at the stars.",
        author:"Oscar Wilde"
    },
    {
        quote: "Rule No. 1 is never lose money. Rule No. 2 is never forget Rule No. 1.",
        author:"Warren Buffett"
    },
    {
        quote:"Be fearful when others are greedy, and greedy when others are fearful.",
        author:"Warren Buffett"
    },
    {
        quote:"안들키면 합법이다",
        author:"제3야수교"
    }
]

const quoteToday = quoteArray[Math.floor(Math.random() * quoteArray.length)];
console.log(quoteToday);
quotes.innerHTML = quoteToday.quote;
authors.innerHTML = quoteToday.author;
