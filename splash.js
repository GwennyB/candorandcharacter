'use strict';

var allCharacters = getFromLocalStorage() || [];
console.log('local storage', allCharacters);

if (allCharacters.length < 1) {
  console.log('pre-pop', allCharacters);
  prepopulate();
}

function prepopulate () {
  // create pre-populated characters
  for (var i = 0; i < 4; i++) {
    var newChar = new Character();
    console.log('newChar',newChar);
    allCharacters.push(newChar);
  }
  // define Gwen's character
  allCharacters[0].quizOne = ['Gwen', 'Gwen_Character', 'race', 'alignment'];
  allCharacters[0].quizTwo = ['10','10','10','10','10','10'];
  allCharacters[0].quizThree = ['10','10','10','50'];
  allCharacters[0].renderURL = 'https://gwennyb.github.io/candorandcharacter/existingcharacter?' + allCharacters[0].quizOne[1];
  // define Jason's character
  allCharacters[1].quizOne = ['Jason', 'Jason_Character', 'race', 'alignment'];
  allCharacters[1].quizTwo = ['10','10','10','10','10','10'];
  allCharacters[1].quizThree = ['10','10','10','50'];
  allCharacters[1].renderURL = 'https://gwennyb.github.io/candorandcharacter/existingcharacter?' + allCharacters[1].quizOne[1];
  // define Guru's character
  allCharacters[2].quizOne = ['Guru', 'Guru_Character', 'race', 'alignment'];
  allCharacters[2].quizTwo = ['10','10','10','10','10','10'];
  allCharacters[2].quizThree = ['10','10','10','50'];
  allCharacters[2].renderURL = 'https://gwennyb.github.io/candorandcharacter/existingcharacter?' + allCharacters[2].quizOne[1];
  // define Andrew's character
  allCharacters[3].quizOne = ['Andrew', 'Andrew_Character', 'race', 'alignment'];
  allCharacters[3].quizTwo = ['10','10','10','10','10','10'];
  allCharacters[3].quizThree = ['10','10','10','50'];
  allCharacters[3].renderURL = 'https://gwennyb.github.io/candorandcharacter/existingcharacter?' + allCharacters[3].quizOne[1];

  allCharacters[0].sendToLocalStorage();
}

// set splash page list links
var characterList = document.getElementById('characterlist');
// console.log('characterList',characterList);
var nodeNum;
console.log('nodeNum',nodeNum);
for (var chars in allCharacters) {
  nodeNum = 1+2*chars;
  characterList.childNodes[nodeNum].firstChild.textContent = allCharacters[chars].quizOne[1];
  characterList.childNodes[nodeNum].firstChild.href = allCharacters[chars].renderURL;
  // re-render list items
}


