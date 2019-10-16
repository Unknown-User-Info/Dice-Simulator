//Dice Simulator Test

//Dices
//Clicking Play
document.getElementById("play-btn").addEventListener("click", rollDice);

//Setting fund values
let fundValue = 5000;

//Displaying fund value
document.getElementById("funds").innerHTML = fundValue;

//Total value
let totalValue = 0;

//Displaying Total Value
document.getElementById("total-value").innerHTML = "$" + totalValue;

//Selling Luxury
document.getElementById("sell-all").addEventListener("click", sellAll);

//Selling Item variable
let sellWorth = 0;

//Rolling the Dice
function rollDice() {
    //Resetting house and die numbers
    let houseDice = Number(0);
    let playerDice = Number(0);
    //Set Error to empty
    document.getElementById("error").innerHTML = " ";

    //Bet value
    let betValue = Number(document.getElementById("bet-input").value);

    //Disallowing betting because it must be greater than 0
    if (betValue > 0) {
        //Dissallowing betting because you're betting more than you have
        if (fundValue >= betValue) {


            //Random dice number
            let diceNumberPlayer = Math.random();
            diceNumberPlayer = diceNumberPlayer * 100;
            let diceNumberHouse = Math.random();
            diceNumberHouse = diceNumberHouse * 100;
            //Second Dice number
            let diceNumberPlayer2 = Math.random();
            diceNumberPlayer2 = diceNumberPlayer2 * 100;
            let diceNumberHouse2 = Math.random();
            diceNumberHouse2 = diceNumberHouse2 * 100;

            //Getting dice values-player
            if (diceNumberPlayer <= 17) {
                document.getElementById("player-die").src = "images/1.png";
                playerDice = playerDice + 1;
            } else if (diceNumberPlayer <= 34) {
                document.getElementById("player-die").src = "images/2.png";
                playerDice = playerDice + 2;
            } else if (diceNumberPlayer <= 51) {
                document.getElementById("player-die").src = "images/3.png";
                playerDice = playerDice + 3;
            } else if (diceNumberPlayer <= 68) {
                document.getElementById("player-die").src = "images/4.png";
                playerDice = playerDice + 4;
            } else if (diceNumberPlayer <= 84) {
                document.getElementById("player-die").src = "images/5.png";
                playerDice = playerDice + 5;
            } else {
                document.getElementById("player-die").src = "images/6.png";
                playerDice = playerDice + 6;
            }

             //Getting dice values-player dice2
             if (diceNumberPlayer2 <= 17) {
                document.getElementById("player-die-two").src = "images/1.png";
                playerDice = playerDice + 1;
            } else if (diceNumberPlayer2 <= 34) {
                document.getElementById("player-die-two").src = "images/2.png";
                playerDice = playerDice + 2;
            } else if (diceNumberPlayer2 <= 51) {
                document.getElementById("player-die-two").src = "images/3.png";
                playerDice = playerDice + 3;
            } else if (diceNumberPlayer2 <= 68) {
                document.getElementById("player-die-two").src = "images/4.png";
                playerDice = playerDice + 4;
            } else if (diceNumberPlayer2 <= 84) {
                document.getElementById("player-die-two").src = "images/5.png";
                playerDice = playerDice + 5;
            } else {
                document.getElementById("player-die-two").src = "images/6.png";
                playerDice = playerDice + 6;
            }

            //Getting dice values-house
            if (diceNumberHouse <= 17) {
                document.getElementById("house-die").src = "images/1.png";
                houseDice = houseDice + 1;
            } else if (diceNumberHouse <= 34) {
                document.getElementById("house-die").src = "images/2.png";
                houseDice = houseDice + 2;
            } else if (diceNumberHouse <= 51) {
                document.getElementById("house-die").src = "images/3.png";
                houseDice = houseDice + 3;
            } else if (diceNumberHouse <= 68) {
                document.getElementById("house-die").src = "images/4.png";
                houseDice = houseDice + 4;
            } else if (diceNumberHouse <= 84) {
                document.getElementById("house-die").src = "images/5.png";
                houseDice = houseDice + 5;
            } else {
                document.getElementById("house-die").src = "images/6.png";
                houseDice = houseDice + 6;
            }

            //Getting dice values-house die 2
            if (diceNumberHouse2 <= 17) {
                document.getElementById("house-die-two").src = "images/1.png";
                houseDice = houseDice + 1;
            } else if (diceNumberHouse2 <= 34) {
                document.getElementById("house-die-two").src = "images/2.png";
                houseDice = houseDice + 2;
            } else if (diceNumberHouse2 <= 51) {
                document.getElementById("house-die-two").src = "images/3.png";
                houseDice = houseDice + 3;
            } else if (diceNumberHouse2 <= 68) {
                document.getElementById("house-die-two").src = "images/4.png";
                houseDice = houseDice + 4;
            } else if (diceNumberHouse2 <= 84) {
                document.getElementById("house-die-two").src = "images/5.png";
                houseDice = houseDice + 5;
            } else {
                document.getElementById("house-die-two").src = "images/6.png";
                houseDice = houseDice + 6;
            }

            //Changing the funds after each bet
            if (playerDice > houseDice) {
                fundValue = fundValue + betValue;
                document.getElementById("results").innerHTML = "You win";
            } else if (playerDice < houseDice) {
                fundValue = fundValue - betValue;
                document.getElementById("results").innerHTML = "House wins";
            } else if (playerDice = houseDice) {
                document.getElementById("results").innerHTML = "Tie";
            }

            //Displaying fund value after bet;
            document.getElementById("funds").innerHTML = fundValue;

            //If funds are 0
        } else if (fundValue == 0) {
                document.getElementById("error").innerHTML = "You don't have the funds to bet this much, but you found $500 laying around";
                fundValue = fundValue + 500;

                //Display funds
                document.getElementById("funds").innerHTML = fundValue;

        //Error because you're betting more than you have
        } else {
            document.getElementById("error").innerHTML = "You don't have the funds to bet this much";
        }
    //Error if there's no bet
    } else {
        document.getElementById("error").innerHTML = "Please put a bet in before pressing PLAY";
    }
}
//Dices End




//Buying luxury begin
//Clicking the luxury button
document.getElementById("purchase-btn").addEventListener("click", purchaseGoods);

//Purchasing luxury items
function purchaseGoods() {
    //Sock
    if (fundValue < 1000) {
        document.getElementById("loot").innerHTML += '<img src="images/socks.png">';
    } else if (fundValue < 5000) {

        //Random value for 1000
        let oneGrand = Math.random();
        oneGrand = oneGrand *100;

        //Probilities for oneGrand
        if (oneGrand <= 33) {
            document.getElementById("loot").innerHTML += '<img src="images/trip.jpg">';
        } else if (oneGrand <= 66) {
            document.getElementById("loot").innerHTML += '<img src="images/ring.png">';
        } else {
            document.getElementById("loot").innerHTML += '<img src="images/bike.jpg">';
        }

        //Subtracting funds from total
        fundValue = fundValue - 1000;

        //Displaying funds after subtraction
        document.getElementById("funds").innerHTML = fundValue;

        //Adding total value
        totalValue = totalValue + 1000;

        //Displaying total value
        document.getElementById("total-value").innerHTML = "$" + totalValue;

        //Sell Worth increase


    } else {
        //Random value for 5000
        let fiveGrand = Math.random();
        fiveGrand = fiveGrand*100;

        //Probabilities for fiveGrand
        if (fiveGrand <= 25) {
            document.getElementById("loot").innerHTML += '<img src="images/motorcycle.jpg">';
        } else if (fiveGrand <= 50) {
            document.getElementById("loot").innerHTML += '<img src="images/house.png">';
        } else if (fiveGrand <= 75) {
            document.getElementById("loot").innerHTML += '<img src="images/car.png">';
        } else {
            document.getElementById("loot").innerHTML += '<img src="images/boat.png">';
        }

        //Subtracting funds from total
        fundValue = fundValue - 5000;

        //Displaying funds after subtraction
        document.getElementById("funds").innerHTML = fundValue;

        //Adding total value
        totalValue = totalValue + 5000;

        //Displaying total value
        document.getElementById("total-value").innerHTML = "$" + totalValue;
    }
}
//Buying Luxury End



//Selling Luxury Begin
//Selling Luxury
function sellAll() {
    //Erase all imgs
    document.getElementById("loot").innerHTML = '<img src="">';

    //Displaying resetted total value
    document.getElementById("total-value").innerHTML = "$" + totalValue;

    //Giving back cash
    for (totalValue = totalValue; totalValue >= 5000; totalValue = totalValue - 5000) {
        fundValue = fundValue + 3750;
    }
    for (totalValue = totalValue; totalValue >= 1000; totalValue = totalValue - 1000) {
        fundValue = fundValue + 750;
    }

    //Displaying fund value after sold
    document.getElementById("funds").innerHTML = fundValue;

    //Displaying resetted total value
    document.getElementById("total-value").innerHTML = "$" + totalValue;
}
//Selling Luxury End