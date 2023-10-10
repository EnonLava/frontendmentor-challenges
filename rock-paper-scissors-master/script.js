// TEMPORARY THIS CODE NEEDS REFACTORING

const values = [ "rock", "scissors", "paper"];
const emptyCoin = document.createElement("div");
emptyCoin.className = "empty";
let score = document.getElementById("score");

function game(player, com) {
    let result = document.getElementById("result");
    let resultContainer = document.getElementsByClassName("result-container")[0]
    if (player == com)
        result.innerText = "TIE";
    else if ( player == "paper" && com == "rock")
        result.innerText = "YOU WIN";
    else if ( player == "scissors" && com == "paper" )
        result.innerText = "YOU WIN";
    else if ( player == "rock" && com == "scissors" )
        result.innerText = "YOU WIN";
    else {
        result.innerText = "YOU LOSE";
        if (score.innerText > 0)
            score.innerText--;
    }

    if (result.innerText == "YOU WIN")
        score.innerText++;
        
    resultContainer.style.display = "flex";
}

function reset() {
    let pickState = document.getElementsByClassName("state-1")[0];
    let resultState = document.getElementsByClassName("state-result")[0];
    let resultContainer = document.getElementsByClassName("result-container")[0]
    let coins = document.getElementsByClassName("coin-slot");
    for (let i = 0; i < coins.length; ++i) {
        coins[i].removeChild(coins[i].firstElementChild);
        coins[i].appendChild(emptyCoin.cloneNode(true));
    }
    pickState.style.display = "block";
    resultState.style.display = "none";
    resultContainer.style.display = "none";
}

function pick(value) {
    let pickState = document.getElementsByClassName("state-1")[0];
    let resultState = document.getElementsByClassName("state-result")[0];
    pickState.style.display = "none";
    resultState.style.display = "block";
    let coin = document.getElementsByClassName(value)[0];
    let coinSlot = document.getElementsByClassName("coin-slot");
    let comValue = values[Math.floor(Math.random() * 3)];
    let com = document.getElementsByClassName(comValue)[0];
    setTimeout(() => {
        console.log(coinSlot[0].firstElementChild);
        coinSlot[0].removeChild(coinSlot[0].firstElementChild);
        coinSlot[0].appendChild(coin.cloneNode(true));
        coinSlot[0].children[0].onclick = null;
        setTimeout(() => {
            coinSlot[1].removeChild(coinSlot[1].firstElementChild);
            coinSlot[1].appendChild(com.cloneNode(true));
            coinSlot[1].children[0].onclick = null;
            setTimeout(() => {
                game(value, comValue);
            }, 250);
        }, 500);
    }, 500);
}

function toggleRules(shown) {
    let rules = document.getElementsByClassName("rules-overlay")[0];
    if(shown)
        rules.style.display = "flex";
    else
        rules.style.display = "none";
}
