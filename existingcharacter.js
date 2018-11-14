'use strict';

// create new Character
var newChar = new Character();

// pull/decode LS
var allCharacters = getFromLocalStorage() || []; // returns either LS or empty array

// read query string
var whichChar = window.location.search.split('?name=')[1];


// find correct character from query string
for (var i = 0; i<4; i++) {
  if (allCharacters[i].quizOne[1] === whichChar) {
    whichChar = i;
    break;
  }
}

// push character stats to Character
newChar.quizOne = allCharacters[whichChar].quizOne; // extra conditioning needed?
newChar.quizTwo = allCharacters[whichChar].quizTwo; // extra conditioning needed?
newChar.quizThree = allCharacters[whichChar].quizThree; // extra conditioning needed?

newChar.renderCharacter();
