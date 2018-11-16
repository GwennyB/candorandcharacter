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
  allCharacters[0].quizOne = ['Gwen', 'Hoggle', 'Gnome', 'Chaotic Evil'];
  allCharacters[0].quizTwo = ['3','1','8','8','10','10'];
  allCharacters[0].quizThree = ['8','2','2','28'];
  allCharacters[0].renderURL = 'https://gwennyb.github.io/candorandcharacter/existingcharacter.html?' + allCharacters[0].quizOne[1];
  // define Jason's character
  allCharacters[1].quizOne = ['Jason', 'Ludo', 'race', 'Lawful Good'];
  allCharacters[1].quizTwo = ['5','7','6','4','10','8'];
  allCharacters[1].quizThree = ['4','4','3','115'];
  allCharacters[1].renderURL = 'https://gwennyb.github.io/candorandcharacter/existingcharacter.html?' + allCharacters[1].quizOne[1];
  // define Guru's character
  allCharacters[2].quizOne = ['Guru', 'Didymus', 'race', 'Chaotic Evil'];
  allCharacters[2].quizTwo = ['3','10','9','6','10','7'];
  allCharacters[2].quizThree = ['6','6','5','2'];
  allCharacters[2].renderURL = 'https://gwennyb.github.io/candorandcharacter/existingcharacter.html?' + allCharacters[2].quizOne[1];
  // define Andrew's character
  allCharacters[3].quizOne = ['Andrew', 'Ambrosius', 'race', 'Lawful Good'];
  allCharacters[3].quizTwo = ['7','3','4','10','10','9'];
  allCharacters[3].quizThree = ['7','4','1','45'];
  allCharacters[3].renderURL = 'https://gwennyb.github.io/candorandcharacter/existingcharacter.html?' + allCharacters[3].quizOne[1];

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


