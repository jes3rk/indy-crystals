# week-4-game

A crystal collector game where the user is presented with a target score and four crystals, each with a specific, random value that the user can press to reach the target score. As the game involes crystals, an Indiana Jones theme seemed appropriate. Useful as an excerxise in alogrithms and game logic.

Deployed Version: https://jes3rk.github.io/week-4-game/#

## Functionality

The game relies on three major elements: generating the target score, generating each crystal value, and updating the user score based on user input.

### Target Score

The target score is generated as a random number between 19 and 139. Each new game, a new target score is generated with a function.

### Crystal Values

First, four random numbers are generated between 1 and 13 and stored in variables. Then, a series of event listeners are created, each targeting an individual crystal. Triggering an event with a click on a crystal calls a function to add the crystal value to the user score.

### Updating the score

Clicking on a crystal calls two functions: one to display the scores and one to check if the user has won or lost. The former uses jQuery to update change the HTML texts of the scores while the latter compares the user score with the target score and if a win/loss condition triggers, the bottom gif and win/loss displays are updated.
