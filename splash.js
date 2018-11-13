'use strict';

var allCharacters = [];


prepopulate();

function prepopulate () {
  // create pre-populated characters
  new Character();
  allCharacters[0].quizOne = ['Gwen', 'Gwen_Character', 'race', 'alignment'];
  allCharacters[0].quizTwo = ['10','10','10','10','10','10'];
  allCharacters[0].quizThree = ['10','10','10','50'];
  allCharacters[0].renderURL = 'http://gwennyb.github.io/candorandcharacter/existingcharacter.html?name=' + allCharacters[0].quizOne[1];
  new Character();
  allCharacters[1].quizOne = ['Jason', 'Jason_Character', 'race', 'alignment'];
  allCharacters[1].quizTwo = ['10','10','10','10','10','10'];
  allCharacters[1].quizThree = ['10','10','10','50'];
  allCharacters[1].renderURL = 'http://gwennyb.github.io/candorandcharacter/existingcharacter.html?name=' + allCharacters[1].quizOne[1];
  new Character();
  allCharacters[2].quizOne = ['Guru', 'Guru_Character', 'race', 'alignment'];
  allCharacters[2].quizTwo = ['10','10','10','10','10','10'];
  allCharacters[2].quizThree = ['10','10','10','50'];
  allCharacters[2].renderURL = 'http://gwennyb.github.io/candorandcharacter/existingcharacter.html?name=' + allCharacters[2].quizOne[1];
  new Character();
  allCharacters[3].quizOne = ['Andrew', 'Andrew_Character', 'race', 'alignment'];
  allCharacters[3].quizTwo = ['10','10','10','10','10','10'];
  allCharacters[3].quizThree = ['10','10','10','50'];
  allCharacters[3].renderURL = 'http://gwennyb.github.io/candorandcharacter/existingcharacter.html?name=' + allCharacters[3].quizOne[1];

  // set splash page list links
  var characterList = document.getElementById('characterlist');
  var nodeNum;
  for (var chars in allCharacters) {
    nodeNum = 1+2*chars;
    characterList.childNodes[1].childNodes[nodeNum].firstChild.href = allCharacters[chars].renderURL;
    characterList.childNodes[1].childNodes[nodeNum].firstChild.textContent = allCharacters[chars].quizOne[1];
  }
}
