# SwordAndShield
TypeScript Game

This project is simple game and is created for the purpose of learning programming.

## ToDo

* Write the basics rules of the game in docs. Write must have features and additional features.
* Store game state in context or redux state? decide

## Basic rules of the game

### Figures

* Sword - can strike King or Shield. Has one move point.
* Shield - can block Sword strike. Doesnt hurt the King. Has two move points.
* King - can strike Sword. Has one move point.


### Controls
* Keyboard controls
* Mouse controls


### Folder structure:
src - source code
    components - common components (use in app more then once)
    contexts - react context files
    features - view components
    hooks - react hook files
    services - other files
    types - ts types
    constants - app constants


### Components:
* Login - display user login

### Features:
* Game - global app component
* TopBar - display game state, user login and whoes turn it is

### Context/Hooks:
* gameContext - game data like state, login, player

### Hooks:
* useGameContext - get game context data
