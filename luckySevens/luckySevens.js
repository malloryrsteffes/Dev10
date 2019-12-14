function playRound() {
  let bet = Number(document.forms["luckySevens"]["startingBet"].value);
  let money = bet;
  let die1;
  let die2;
  let rolls = 0;
  let maxWins = 0;
  let rollsAtWin = 0;

  if (money <= 0) {
    alert("Please enter a positive number!");
  } else {
    while (money > 0) {
      die1 = rollDice();
      die2 = rollDice();
      diceTotal = die1 + die2;
      rolls++;

      if (diceTotal != 7) {
        money--;
        console.log("You lose! You have $" + money + " remaining.");
      } else {
        money += 4;
        if (money > maxWins) {
          maxWins += money - maxWins;
          rollsAtWin = rolls;
        }
        console.log("You win! You have $" + money + " remaining.");
      }
    }
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("submitButton").innerText = "Play Again!";
  document.getElementById("start").innerText = bet;
  document.getElementById("totalRolls").innerText = rolls;
  document.getElementById("highestAmount").innerText = maxWins;
  document.getElementById("rollsAtHighest").innerText = rollsAtWin;
  return false;
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
