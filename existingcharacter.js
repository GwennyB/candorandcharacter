// create new Character
var newChar = new Character();

// read query string
var whichChar = window.location.search; // splice out leading chars from return string

// pull/decode LS
var allCharacters = newChar.getFromLocalStorage();

// find correct character from query string
for (var i = 0; i<4; i++) {
  if (allCharacters[i].name === whichChar) {
    whichChar = i;
    break;
  }
}

// push character stats to Character
newChar.quizOne = allCharacters[whichChar].quizOne; // extra conditioning needed?
newChar.quizTwo = allCharacters[whichChar].quizTwo; // extra conditioning needed?
newChar.quizThree = allCharacters[whichChar].quizThree; // extra conditioning needed?

newChar.renderCharacter();