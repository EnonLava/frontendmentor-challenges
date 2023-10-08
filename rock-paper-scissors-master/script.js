const values = [ "rock", "scissors", "paper"];

function game(player, com) {
    console.log(player);
    console.log(com);
    if (player == com)
        console.log("tie");
    else if ( player == "paper" && com == "rock")
        console.log("win");
    else if ( player == "scissors" && com == "paper" )
        console.log("win");
    else if ( player == "rock" && com == "scissors" )
        console.log("win");
    else
        console.log("lose");
}

function pick(value) {
    let pickState = document.getElementsByClassName("state-1")[0];
    let resultState = document.getElementsByClassName("state-2")[0];
    pickState.style.display = "none";
    resultState.style.display = "flex";
    let coin = document.getElementsByClassName(value)[0];
    let coinSlot = document.getElementsByClassName("coin-slot");
    let comValue = values[Math.floor(Math.random() * 3)];
    let com = document.getElementsByClassName(comValue)[0];
    coinSlot[0].appendChild(coin.cloneNode(true));
    coinSlot[1].appendChild(com.cloneNode(true));
    game(value, comValue);

}

function toggleRules(shown) {
    let rules = document.getElementsByClassName("rules-overlay")[0];
    if(shown)
        rules.style.display = "flex";
    else
        rules.style.display = "none";
}