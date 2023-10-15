const values = [ "rock", "scissors", "paper"];
const emptyCoin = document.createElement("div");
emptyCoin.className = "empty";
let score = document.getElementById("score");

function game(player, com) {
    let winner = 2;
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
        winner = 1;
        let resetButton = document.getElementsByClassName("reset-button")[0];
        resetButton.style.color = "#A00"
        if (score.innerText > 0)
            score.innerText--;
    }
    if (result.innerHTML == "YOU WIN") {
        score.innerText++;
        winner = 0;
    }
        
    resultContainer.style.visibility = "visible";
    return winner;
}

function reset() {
    let pickState = document.getElementsByClassName("state-1")[0];
    let resultState = document.getElementsByClassName("state-result")[0];
    let resultContainer = document.getElementsByClassName("result-container")[0]
    let coins = document.getElementsByClassName("coin-slot");
    let resetButton = document.getElementsByClassName("reset-button")[0];
    resetButton.style.color = "var(--dark-text)"
    for (let i = 0; i < coins.length; ++i) {
        coins[i].removeChild(coins[i].firstElementChild);
        coins[i].appendChild(emptyCoin.cloneNode(true));
    }
    pickState.style.display = "block";
    resultState.style.display = "none";
    resultContainer.style.visibility = "hidden";
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
        coinSlot[0].removeChild(coinSlot[0].firstElementChild);
        coinSlot[0].appendChild(coin.cloneNode(true));
        coinSlot[0].children[0].onclick = null;
        setTimeout(() => {
            coinSlot[1].removeChild(coinSlot[1].firstElementChild);
            coinSlot[1].appendChild(com.cloneNode(true));
            coinSlot[1].children[0].onclick = null;
            setTimeout(() => {
                let winner = game(value, comValue);
                if (winner < 2)
                    coinSlot[winner].firstElementChild.classList.add(...["outer-gradient"])
            }, 500);
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
