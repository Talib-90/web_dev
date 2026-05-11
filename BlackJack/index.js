let player = {
    name: "shah",
    checks: 145
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.checks

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    }else {
        return randomNumber
    }
}


function renderGame() {
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum
    for(let card = 0; card<cards.length; card++) {
        cardsEl.textContent += cards[card] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card? ";
    } else if (sum === 21) {
        message = "Wohoo! You've got a black jack! "
    } else {
        message = "You lose! "
        isAlive = false
    }
    messageEl.textContent = message
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    
    sum = firstCard + secondCard
    renderGame()
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let newSumCard = getRandomCard()
        sum += newSumCard
        cards.push(newSumCard)
        renderGame()
    }
}
