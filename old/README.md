# Memory-Game

### BRIEF DESCRIPTION OF THE GAME

The goal is to collect as many pairs of tiles as possible.

Shuffle the numbers or tiles and place them face down on the grid (6x6 or 4x4).

The game is started by a random player. The game then proceeds in a clockwise direction. On each turn, a player flips any two tiles (one at a time) and receives a score of 1 if the cards match (for instance, two kings). They get another turn if they successfully match a pair.

When a player turns over two tiles that do not match, those cards are turned face down (in the same position) and it is the turn of the next player.


At the end of the game, the player with the most pairs wins.


### EXPECTED BEHAVIOUR

- The default screen should be the Start Game screen.

- In a solo game, track the time elapsed since first clicking on a tile and the total number of moves made. A move counts as two
 tiles being selected as a potential match. Once all pairs have been found, stop the timer and show the end of game modal with the stats.

- In a multiplayer game, track the total number of pairs each player has found. If a player finds a pair, increment their score by one.
 The current turn switches to the next player after the current player has made a move to find a potential match.

- Clicking "Restart" will restart the game with the current settings
- Clicking "New Game" will go to the Start Game screen where the player can choose their settings
