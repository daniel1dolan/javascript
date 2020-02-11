let playerHandD = document.querySelector("#player-hand");
let dealerHandD = document.querySelector("#dealer-hand");
let dealButton = document.querySelector("#deal-button");
let hitButton = document.querySelector("#hit-button");
let messagesD = document.querySelector("#messages");
let standButton = document.querySelector("#stand-button");
let up10 = document.querySelector(".up10");
let down10 = document.querySelector(".down10");
let betD = document.querySelector("#bet-amount");
let moneyD = document.querySelector("#money-amount");

class Deck {
  constructor() {
    this.deck = [];
    this.reset();
    this.shuffle();
  }
  reset() {
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

class Bet {
  constructor() {
    this.money = 500;
    this.bet = 0;
  }
  betWin() {
    this.money += 2 * this.bet;
    this.bet = 0;
    betD.textContent = this.bet;
    moneyD.textContent = this.money;
  }
  betLoss() {
    this.bet = 0;
    betD.textContent = this.bet;
    moneyD.textContent = this.money;
  }
  betDraw() {
    this.money += this.bet;
    this.bet = 0;
    betD.textContent = this.bet;
    moneyD.textContent = this.money;
  }
  betButtonReset() {
    up10.disabled = false;
  }
}

const beto = new Bet();

up10.addEventListener("click", function() {
  if (beto.money == 0) {
    up10.disabled = true;
  } else {
    beto.bet += 10;
    beto.money -= 10;
    betD.textContent = beto.bet;
    moneyD.textContent = beto.money;
    down10.disabled = false;
    console.log(beto.bet);
  }
});

if (beto.bet == 0) {
  down10.disabled = true;
}

down10.addEventListener("click", function() {
  if (beto.bet == 0) {
    down10.disabled = true;
  } else {
    beto.bet -= 10;
    beto.money += 10;
    betD.textContent = beto.bet;
    moneyD.textContent = beto.money;
  }
});

betD.textContent = beto.bet;
moneyD.textContent = beto.money;

class Player {
  constructor() {
    this.hand = [];
    this.points = 0;
  }
  checkBust() {
    if (this.points > 21) {
      let bustMessage = document.createElement("div");
      bustMessage.className = "alert";
      bustMessage.innerHTML =
        '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">Play Again</span> <strong>You Busted!</strong>';
      messagesD.appendChild(bustMessage);
      beto.betLoss();
      disableButtons();
      reseto();
      beto.betButtonReset();
    } else {
      standButton.disabled = false;
    }
  }
}

class Dealer {
  constructor() {
    this.hand = [];
    this.points = 0;
  }
  checkBust() {
    if (this.points > 21) {
      let bustMessage1 = document.createElement("div");
      bustMessage1.className = "alert success";
      bustMessage1.innerHTML =
        '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">Play Again</span> <strong>Dealer Busted! You win!</strong>';
      messagesD.appendChild(bustMessage1);
      beto.betWin();
      disableButtons();
      reseto();
      beto.betButtonReset();
    } else if (this.points == player.points) {
      let bustMessage2 = document.createElement("div");
      bustMessage2.className = "alert info";
      bustMessage2.innerHTML =
        '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">Play Again</span> <strong>Draw!</strong>';
      messagesD.appendChild(bustMessage2);
      beto.betDraw();
      disableButtons();
      reseto();
      beto.betButtonReset();
    } else if (this.points > player.points) {
      let bustMessage3 = document.createElement("div");
      bustMessage3.className = "alert";
      bustMessage3.innerHTML =
        '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">Play Again</span> <strong>Dealer Wins!</strong>';
      messagesD.appendChild(bustMessage3);
      beto.betLoss();
      disableButtons();
      reseto();
      beto.betButtonReset();
    } else if (this.points < player.points) {
      let bustMessage4 = document.createElement("div");
      bustMessage4.className = "alert success";
      bustMessage4.innerHTML =
        '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">Play Again</span> <strong>You Win!</strong>';
      messagesD.appendChild(bustMessage4);
      beto.betWin();
      disableButtons();
      reseto();
      beto.betButtonReset();
    }
  }
  hitLogic() {
    while (this.points < 17) {
      this.hand.push(deck1.deal());
      let img = document.createElement("img");
      img.setAttribute("src", dealer.hand[dealer.hand.length - 1]["imgFile"]);
      img.setAttribute("width", "100px");
      img.setAttribute("class", "slideExpandUp");
      dealerHandD.appendChild(img);
      calculatePoints(this);
      calculatePoints(this);
    }
    calculatePoints(this);
    calculatePoints(this);
    calculatePoints(player);
    this.checkBust();
  }
}

const player = new Player();
const dealer = new Dealer();
const deck1 = new Deck();
deck1.shuffle();

dealButton.addEventListener("click", function(e) {
  console.log(e);
  player.hand.push(deck1.deal());
  player.hand.push(deck1.deal());
  dealer.hand.push(deck1.deal());
  dealer.hand.push(deck1.deal());
  for (let i = 0; i < player.hand.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("src", player.hand[i].imgFile);
    img.setAttribute("width", "100px");
    img.setAttribute("class", "slideExpandUp");
    playerHandD.appendChild(img);
  }
  for (let i = 0; i < dealer.hand.length; i++) {
    if (i == 0) {
      let img = document.createElement("img");
      img.setAttribute("src", "JPEG/Gray_back.jpg");
      img.setAttribute("width", "100px");
      img.setAttribute("class", "slideExpandUp");
      img.setAttribute("id", "face-down");
      dealerHandD.appendChild(img);
    } else {
      let img = document.createElement("img");
      img.setAttribute("src", dealer.hand[i]["imgFile"]);
      img.setAttribute("width", "100px");
      img.setAttribute("class", "slideExpandUp");
      dealerHandD.appendChild(img);
    }
  }
  calculatePoints(player);
  calculatePoints(dealer);
  up10.disabled = true;
  down10.disabled = true;
  dealButton.disabled = true;
  hitButton.disabled = false;
  standButton.disabled = false;
  console.log(player);
  console.log(dealer);
});

hitButton.addEventListener("click", function(e) {
  console.log(e);
  player.hand.push(deck1.deal());
  let img = document.createElement("img");
  img.setAttribute("src", player.hand[player.hand.length - 1].imgFile);
  img.setAttribute("width", "100px");
  img.setAttribute("class", "slideExpandUp");
  playerHandD.appendChild(img);
  calculatePoints(player);
  calculatePoints(dealer);
  calculatePoints(player);
  calculatePoints(dealer);
  player.checkBust();
});

standButton.addEventListener("click", function(e) {
  let faceDownCard = document.querySelector("#face-down");
  faceDownCard.setAttribute("src", dealer.hand[0]["imgFile"]);
  disableButtons();
  calculatePoints(dealer);
  calculatePoints(dealer);
  dealer.hitLogic();
});

function calculatePoints(person) {
  let playerPointsD = document.querySelector("#player-points");
  let dealerPointsD = document.querySelector("#dealer-points");
  let pointsC = 0;
  for (let i = 0; i < person.hand.length; i++) {
    switch (person.hand[i]["points"]) {
      case "Ace":
        if (pointsC <= 10) {
          pointsC += 11;
        } else if (person.points == 21) {
          pointsC += 11;
        } else if (person.points > 21) {
          pointsC += 1;
        } else {
          pointsC += 1;
        }
        break;
      case "Jack":
        pointsC += 10;
        break;
      case "Queen":
        pointsC += 10;
        break;
      case "King":
        pointsC += 10;
        break;
      default:
        pointsC += person.hand[i]["points"];
        break;
    }
  }
  person.points = pointsC;
  console.log(hitButton.disabled == true);
  if (person == player) {
    playerPointsD.textContent = person.points;
  } else if (hitButton.disabled == true) {
    dealerPointsD.textContent = person.points;
  } else {
    dealerPointsD.textContent = person.hand[1]["points"];
  }
}

function reseto() {
  let x = document.querySelector(".closebtn");
  let playerPointsD = document.querySelector("#player-points");
  let dealerPointsD = document.querySelector("#dealer-points");
  disableButtons();
  x.addEventListener("click", function(e) {
    player.points = 0;
    dealer.points = 0;
    player.hand = [];
    dealer.hand = [];
    playerHandD.innerHTML = "";
    dealerHandD.innerHTML = "";
    playerPointsD.innerHTML = "";
    dealerPointsD.innerHTML = "";
    messagesD.innerHTML = "";
    deck1.reset();
    deck1.shuffle();
    dealButton.disabled = false;
  });
}

function disableButtons() {
  dealButton.disabled = true;
  hitButton.disabled = true;
  standButton.disabled = true;
}

// deck1.shuffle();
// console.log(deck1.deck);
// deck1.shuffle();
// console.log(deck1.deck);
