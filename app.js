/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



// Define score and player variables
var scores, roundScore, activePlayer, gamePlaying;

init();

// Function to change player
function nextPlayer() {
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //ternary operator

    // Score back to 0
    roundScore = 0;

    // Reset round score boards
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Change active player class in the DOM
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // Hide dice
    document.querySelector('.dice').style.display = 'none';
};


// Generate a random number between 1 and 6
// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);


// Change content of dice in current score
//document.querySelector('#current-' + activePlayer).textContent = dice; // textContent for only text
//document.querySelector('#current-' + activePlayer).innerHTML = dice; // innerHTML for text and HTML


// Read content of dice in current score
// var x = document.querySelector('#score-0').textContent;
// console.log(x);


// Apply functionality to roll button
// Event listener that triggers an anonymous function
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {

        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        
        // 2. Display result and change dice-x.png
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the score if the roll is NOT a 1
        if (dice !== 1) {

            // Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            nextPlayer();
        }
    }
});


// Apply functionality to hold button
// Event listener that triggers an anonymous function
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add round score to global player score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Change player
            nextPlayer();
        };
    }
});


// Apply functionality to hold button
// Event listener that triggers an anonymous function
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    // Set scores to zero
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    // Change CSS of dice to hide it
    document.querySelector('.dice').style.display = 'none';

    // Set scores to 0 in the HTML
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Set names back to 'player x' after winning
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // Remove winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    // Remove active player + set player-0 as active player
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};



/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
