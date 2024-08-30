function rollDice()
{
    let a=Math.random();
    a=a*6;
    a=Math.floor(a)+1;
    console.log(a);

    let b=Math.random();
    b=b*6;
    b=Math.floor(b)+1;
    console.log(b);

    document.getElementById("dice1img").src = `./DiceGameResources/dice${a}.png`;
    document.getElementById("dice2img").src = `./DiceGameResources/dice${b}.png`;

    const header = document.querySelector("h1"); // Selects the first <h1> element

        // Update h1 text based on the result
        if (a > b) {
            header.textContent = "Player 1 Wins!";
        } else if (a < b) {
            header.textContent = "Player 2 Wins!";
        } else {
            header.textContent = "It's a Draw!";
        }
}
