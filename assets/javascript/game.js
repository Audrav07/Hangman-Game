//create array of words
var wordBank = ['breckenridge', 'vail', 'steamboat', 'aspen', 'keystone', 'winterpark', 'abasin'];

//choose word randomly
var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randWord);
var doubleWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



var drawArray = ['rightLeg', 'leftLeg', 'rightArm', 'leftArm',  'torso',  'head', 'frame4', 'frame3', 'frame2', 'frame1']; 

var rightLetter = [];
var wrongLetter = [];
var guessesLeft = 10;
var wordSpaces = [];
var guessedLetter;
var wordPlaceholder = [];
var rightLetterPressed;
var wrongLetterPressed;
var userGuess;
var winCounter = 0;
var startGame;
var currentWord = wordBank[randWord];
var guessedSoFar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];





function winLose() {
	if (winCounter === randWord.length) {
		alert('You win!');
		//startGame();
	} 

	else if (guessesLeft === 0) {
		alert('Sucks to suck');
		//startGame();
	}
}
//choose word randomly
document.onkeyup = function(event) {
		var userGuess = event.key;
		console.log(userGuess);
		if (randWord.indexOf(userGuess) > -1) {
			console.log(true);
			for (var i = 0; i < randWord.length; i++) {
				if (randWord[i] === userGuess) {
					if (userGuess === randWord.charAt(0)) {
						
						
					}

					wordSpaces[i] = userGuess;
					console.log(wordSpaces);
					winCounter++;
					winLose();
				}

				if (guessedLetter === doubleWord[i]) {
					var spliceDword = doubleWord.splice(i, 1);
					

				}

				

				else 

				{
					wrongLetterPressed(userGuess);
					console.log(wrongLetterPressed);
					guessesLeft--;
				}


		if 	(guessedSoFar == 0){
				
					guessesLeft = 9;
					
				}

		else if (guessesLeft == 0){
			
			guessesLeft = 9;
			guessedSoFar.length = 0;
		}

	else if (userGuess !== randWord){
		guessesLeft--;
	}
		if(userGuess === randWord) 
	{
		winCounter++;
		guessesLeft = 9;
		
	}
			}
			//wrong letter pressed
			function wrongLetterPressed(letterPressed) {
				wrongLetter.push(letterPressed);
				$('#wrongletter').keypress(wrongLetterPressed);
	
				console.log(wrongLetterPressed);
			

				}
			}
			//right letter pressed
			function rightLetterPressed(letterPressed) {
				rightLetter.splice(wordspaces[randWord.indexOf(letterPressed)]);
				$('#rightletter').keypress(rightLetter);
				rightLetter.push(userGuess);

	

	}
//create underscores based on length of word
var generatewordSpaces = function() {
	for (var i = 0; i < wordBank.length; i++) {
		wordSpaces.push('_');
		wordSpaces.join(' ');

		

	}
	return wordSpaces;
}
console.log(generatewordSpaces());
	
      // Animate man
  //var animate = function () {
   // var drawMe = lives ;
  //  drawArray[drawMe]();
 // }
 function createWordSpaces() {
 	var newArray;
 	for (var i = newArray.length.length - 1; i >= 0; i--) {
 		newArray.length[i]
 	}
 	newArray.createElement('<div>' + ) 
 	$('#rightletter').push(newArray)

 	//create new array of letters with .split for random word
 	//loop through that new array and create new div element for each letter with a _
 	//create another that replaces those indexes with the right letter
 }

  
   // Hangman
function draw(){




};



function reset(){
	var canvas = document.getElementById('hangman');
	var context = convas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);


};

$(document).ready(function(){
	canvas = $('#hangman')[0];
	context = canvas.getContext("2d");

	draw();
});



var html =  "<p>Press any key to get started!</p>" +
   "<p>Right letters: " + wordSpaces +
    "</p>" 
    "<p>Total Wins: " + 
    winCounter +  "</p>" +
   
    "<p>Guesses so far: " + guessedSoFar +

    "</p>"

    "<p>Right letters:" + "</p>"
    
;
     document.querySelector('#game').innerHTML = html;
		
				
			}
		
	


		//correct letter underscores 

		//create new array from choosen word 
		//get the index of the right letter from our new array
		//change the value in blank array at the same index from above










//buttons






