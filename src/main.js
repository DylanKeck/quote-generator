import 'flowbite'
const quoteBox = document.getElementById("quote-box");
const resetButton = document.getElementById("reset-button");
// //const randomQuote = [
//     {
//         quote: '"You know, you can\'t please all the people all the time... and last night, all those people were at my show."',
//         author: "Mitch Hedberg",
//     },
//     {
//         quote: '"Only exceptionally rational men can afford to be absurd."',
//         author: "Allan Goldfein",
//     },
//     {
//         quote: '"Just a word of advice. Whenever you\'re furious with your parents or you think they\'re terrible, just remember, you vomited on them and they kept you."',
//         author: "John Green"
//     },
//     {
//         quote: "All the world's a cage",
//         author: "Jeanne Phillips",
//
//     },
//     {
//         quote: '"Sometimes the mind, for reasons we don\'t necessarily understand, just decides to go to the store for a quart of milk."',
//         author: "Diane Frolov",
//
//     },
//     {
//         quote: '"The difference between a democracy and a dictatorship is that in a democracy you vote first and take orders later; in a dictatorship you don\'t have to waste your time voting."',
//         author: "Charles Bukowski",
//
//     },
//     {
//         quote: '"Love is the difficult realization that something other than oneself is real."',
//         author: "Iris Murdoch",
//
//     },
// ]
const quoteButton = document.getElementById("quote-button");

// function getRandomQuote()  {
//     const index = Math.floor(Math.random() * randomQuote.length);
//     const quote = randomQuote[index];
//     quoteBox.innerHTML = `
//     <p>${quote.quote}</p>
//     <p>- ${quote.author}</p>
//     `;
//     quoteBox.style.display = "block";
//     resetButton.style.display = "block";
// }

function reset () {


    quoteBox.innerHTML = "Click for a new quote.";
    resetButton.style.display = "none";

}

resetButton.addEventListener('click', reset );


function fetchRandomQuote()  {
    fetch('https://quotes-api-self.vercel.app/quote')
        .then(response => response.json())
        .then(data => {
        console.log(data);
        const quote = data
        quoteBox.innerHTML =
        `<p>"${quote.quote}"</p>
         <p>-${quote.author}</p>`
        quoteBox.style.display = "block";
        resetButton.style.display = "block";

        })
        .catch(error => {
            console.log("error", error)
            quoteBox.innerHTML = "<p>Could not fetch a quote.</p>";
        });

}
quoteButton.addEventListener('click', fetchRandomQuote);
window.addEventListener('keydown', event => {
    if (event.key === ' ') {
        event.preventDefault();
        fetchRandomQuote();
    }
} );

