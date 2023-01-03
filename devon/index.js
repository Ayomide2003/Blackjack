let sum = 0
let cards = []
let message = " "
hasBlackJack = false
isAlive = false
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random()*13)+1

    if (randomNumber > 10) {
        return 10
    }
  else  if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum: " + sum
    if (sum <= 20) {
        message = "do you want to pick a new card?"
    }
  else if (sum === 21) {
        message = "you've got blackJack"
        hasBlackJack = true
    } else {
        message = "you're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        let card = getRandomNumber()
        sum += card
        cards.push(card)
            
        renderGame()
    }
}

