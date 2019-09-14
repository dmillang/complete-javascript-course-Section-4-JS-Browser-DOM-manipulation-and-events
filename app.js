/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



// Define score and player variables
var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


// Generate a random number between 1 and 6
dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);


// Change content of dice in current score
//document.querySelector('#current-' + activePlayer).textContent = dice; // textContent for only text
document.querySelector('#current-' + activePlayer).innerHTML = dice; // innerHTML for text and HTML


// Read content of dice in current score
var x = document.querySelector('#score-0').textContent;
console.log(x);


// Change CSS of dice to hide it
document.querySelector('.dice').style.display = 'none';