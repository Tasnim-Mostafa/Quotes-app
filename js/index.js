var Quotes = [
    {
        quote: "Be yourself; everyone else is already taken.", //0
        author: "―Oscar Wilde",
    },

    {
        quote: "So many books, so little time.", //1
        author: "―Frank Zappa",
    },


    {
        quote: "A room without books is like a body without a soul.",  //2
        author: "―Marcus Tullius Cicero",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.", //3
        author: "―Mae West",
    },
    {
        quote: "Without music, life would be a mistake.",    //4
        author: "―Friedrich Nietzsche, Twilight of the Idols",
    },
];

var newIndex;
var lastIndex;
var displayedQuotes = [];

function getQuotes() {

    if (displayedQuotes.length == Quotes.length) {
displayedQuotes = [];
    }

    do {
        newIndex = Math.floor(Math.random() * Quotes.length);
    } while (newIndex == lastIndex || displayedQuotes.includes(newIndex));

    lastIndex = newIndex

    console.log(newIndex);

    displayedQuotes.push(newIndex);

    document.getElementById("quote").innerHTML = Quotes[newIndex].quote;

    document.getElementById("author").innerHTML = Quotes[newIndex].author;
}
