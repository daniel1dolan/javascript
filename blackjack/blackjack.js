let playerHandD = document.querySelector("#player-hand");
let dealerHandD = document.querySelector("#dealer-hand");
let dealButton = document.querySelector("#deal-button");
console.log(dealButton);
console.log(dealerHandD);
console.log(playerHandD);

class Deck {
  constructor() {
    this.deck = [];

    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "King", "Queen"];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push({
          points: values[value],
          suit: suits[suit],
          imgFile: "JPEG/" + values[value] + suits[suit][0] + ".jpg"
        });
      }
    }
  }

  shuffle() {
    const { deck } = this;
    for (var i = deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    return this;
  }

  deal() {
    return this.deck.pop();
  }
}
let dealerHand = [];
let playerHand = [];

const deck1 = new Deck();

dealButton.addEventListener("click", function(e) {
  console.log(e);
  playerCards = [];
  dealerCards = [];
  playerCards.push(deck1.deal());
  playerCards.push(deck1.deal());
  dealerCards.push(deck1.deal());
  dealerCards.push(deck1.deal());
  playerHand.push(playerCards);
  dealerHand.push(dealerCards);
  console.log(playerCards);
  console.log(dealerCards);
  for (let i = 0; i < playerCards.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("src", playerCards[i].imgFile);
    img.setAttribute("width", "100px");
    playerHandD.appendChild(img);
  }
  for (let i = 0; i < dealerCards.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("src", dealerCards[i]["imgFile"]);
    img.setAttribute("width", "100px");
    dealerHandD.appendChild(img);
  }
});
// deck1.shuffle();
// console.log(deck1.deck);
// deck1.shuffle();
// console.log(deck1.deck);
