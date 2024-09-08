// const quotes = [
//     "The only limit to our realization of tomorrow is our doubts of today.",
//     "Be yourself; everyone else is already taken.",
//     "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
//     "Do what you can, with what you have, where you are.",
//     "Success is not final, failure is not fatal: It is the courage to continue that counts.",
//     "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
//     "Believe you can and you're halfway there.",
//     "It always seems impossible until it's done.",
//     "To live is the rarest thing in the world. Most people exist, that is all."
// ];



const quotes = [
    {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "quote": "Success is not how high you have climbed, but how you make a positive difference to the world.",
        "author": "Roy T. Bennett"
    },
    {
        "quote": "The only limit to our realization of tomorrow is our doubts of today.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "Do what you can, with what you have, where you are.",
        "author": "Theodore Roosevelt"
    },
    {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill"
    }
];


function generateQuote() {
    var quoteDisplay = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // Display the selected quote and author
    quoteDisplay.innerText = `"${selectedQuote.quote}" - ${selectedQuote.author}`;
}