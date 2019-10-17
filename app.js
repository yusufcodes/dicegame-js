/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0]; // Player 1 and 2 scores
roundScore = 0; // Score for the current round for player currently playing
activePlayer = 0; // 0 = Player 1, 1 = Player 2

document.querySelector('.dice').style.display = 'none'; // Hiding the image of the dice by default

// Setting scores to 0 by default (score-0, score-1, current-0, current-1)
for (var i=0; i<2; i++)
{
    document.getElementById('score-'+i).textContent = '0';
    document.getElementById('current-'+i).textContent = '0';
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    // Generate a random number
    var dice = Math.floor((Math.random() * 6) + 1);

    // Display the rolled dice with correct image
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice-' + dice + '.png';

});