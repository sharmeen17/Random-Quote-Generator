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

// localStorage.setItem("quotes", JSON.stringify(quotes));


// localStorage.getItem("quotes")


function generateQuote() {
    var quoteDisplay = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // Display the selected quote and author
    quoteDisplay.innerText = `"${selectedQuote.quote}" - ${selectedQuote.author}`;
}


function addQuote(){
    var addQuote = document.getElementById("quoteInput").value;
    var addAuthor = document.getElementById("authorInput").value;

    // var quoteObject= `"${addQuote.quote}" - ${addAuthor.author}`;
    // console.log(quoteObject);
    // quotes.push(quoteObject);

  
    quotes.push({ quote: addQuote, author: addAuthor });

  console.log(quotes);
}