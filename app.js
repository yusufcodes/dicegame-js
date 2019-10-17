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

    // Update the score given that the user did NOT roll a 1
    if (dice !== 1)
    {
        // Add to player score
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    }

    else
    {
        nextPlayer();
    }
});

// User clicks hold -> their current score is saved globally and it is the next user's turn
document.querySelector('.btn-hold').addEventListener('click', function(){
    // Save the user's current score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    // Check if player has won the game
    nextPlayer();
});

// Resets scores and makes UI changes when the current player's turn is finished
function nextPlayer()
{
    // Switch the active player to the other player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // Resetting the round scores and the displayed scores for the users
    roundScore = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none'; 
}