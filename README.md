# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#Run)
- [Contributing](#Play)

## Run
  first, I add in class Enemy x and y axis and speed, and same as in the class Player when I create it except the speed.
  After that I create Arrow function speedVarying() that set a random speed for speed property in class Enemy.
  Then I create:
      Three enemy objects and I add them in array
      player object
  the game start when the user press the arrow keys, so the handleInput() function is called
  handleInput() :
        x axis for left, right = -+ 100
        y axis for up, down    = -+90
  in each moves the Enemy.prototype.update
        1) check if there is a collisions
        2)After the enemies disappear I make them start move again with varying speeds
  if the user win the Player.prototype.update show the alert that you are win and start a new game

## Play
  Game start in grass block which is a safe area. your target to reach to water. so you have to move through stone area and avoid the bugs toward the water and then you win the game.  
