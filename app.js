'use strict';

// TASK CARD: build Character object constructor function #18
function Character() {
  this.quizOne = []; // player name, character name, race, alignment (receive from quiz 1)
  this.quizTwo = []; // strength, dexterity, constitution, intelligence, wisdom, charisma (receive from quiz 2)
  this.quizThree = []; // armor class, initiative, speed, hit points (receive from quiz 3)
}

// TASK CARD: build Character object constructor function #18
Character.prototype.sendToLocalStorage = function() {
  var storedCharacters = this.getFromLocalStorage(); // this is the decoded array of 4 characters that was already in LS
  storedCharacters.splice(0,1); // delete first element (oldest character)
  storedCharacters.push(this);  // add newest character to end of array
  var charJSON = JSON.stringify(this); // encode updated characters list
  localStorage.setItem('storedCharacters',charJSON); // send updated characters list to LS
};

// TASK CARD: build Character object constructor function #18
Character.prototype.getFromLocalStorage = function() {
  var storedCharacters = localStorage.getItem('storedCharacters') || ['seeTaskCard17']; // get array of 4 chars from LS, or use hard-coded chars
  return JSON.parse(storedCharacters);
};

// TASK CARD: build Character object constructor function #18
Character.prototype.populateCharacter = function() {
  // event handler for characters list on Splash - requires ID for target element (held for TASK CARD: Create character list #15)
  // send character selection to LS
  // load page 'existingcharacter.html', which launches 'existingcharacter.js'
};