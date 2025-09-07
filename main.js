// Deck of Cards

let suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
let ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
let deckOfCards = [];

for (let suit of suits) {
    for (let rank of ranks) {
        deckOfCards.push(`${rank} of ${suit}`);
    }
}

console.log(deckOfCards);
console.log(deckOfCards.length); // checks to make sure there are 52 cards in the deck

for (let card of deckOfCards) {
    console.log(card); // prints each card individually
}