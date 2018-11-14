'use strict';
// var allCharacters = [];

// TASK CARD: build Character object constructor function #18
function Character() {
  this.quizOne = []; // player name, character name, race, alignment (receive from quiz 1)
  this.quizTwo = []; // strength, dexterity, constitution, intelligence, wisdom, charisma (receive from quiz 2)
  this.quizThree = []; // armor class, initiative, speed, hit points (receive from quiz 3)
  this.renderURL = '';

}

// TASK CARD: build Character object constructor function #18
Character.prototype.sendToLocalStorage = function() {
  var charJSON = JSON.stringify(allCharacters); // encode updated characters list
  localStorage.setItem('storedCharacters',charJSON); // send updated characters list to LS
};

// TASK CARD: build Character object constructor function #18
function getFromLocalStorage () {
  var storedCharacters = localStorage.getItem('storedCharacters');// || []; // get array of 4 chars from LS or return empty array
  storedCharacters = JSON.parse(storedCharacters);
  return storedCharacters;
}

// TASK CARD: build Character object constructor function #18
// load page 'existingcharacter.html', which launches 'existingcharacter.js' and renders with this function
Character.prototype.renderCharacter = function() { // this will come from query string ('existingcharacter.js') or 'new character' ('newcharacter.js')
  // render this.quizOne[i]
  var quizOneAnswers = document.getElementById('quizone');
  for (var outputOne in this.quizOne) {
    quizOneAnswers.childNodes[1+2*outputOne].textContent = this.quizOne[outputOne];
  }
  // render this.quizTwo[i]
  var quizTwoAnswers = document.getElementById('quiztwo');
  for (var outputTwo in this.quizTwo) {
    quizTwoAnswers.childNodes[1+2*outputTwo].textContent = this.quizTwo[outputTwo];
  }
  // render this.quizThree[i]
  var quizThreeAnswers = document.getElementById('quizthree');
  for (var outputThree in this.quizThree) {
    quizThreeAnswers.childNodes[1+2*outputThree].textContent = this.quizThree[outputThree];
  }
};


