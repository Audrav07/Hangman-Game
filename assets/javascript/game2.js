var wordBank = ['breckenridge', 'vail', 'steamboat', 'aspen', 'keystone', 'winterpark', 'abasin'];
var drawArray = ['rightLeg', 'leftLeg', 'rightArm', 'leftArm',  'torso',  'head', 'frame4', 'frame3', 'frame2', 'frame1']; 
// var winLose = 0;
var winCounter = 10;
var lives; //lives
var guessedLetters = [];
var wrongLetters = [];
// var guessesLeft = 10;
var userGuess = "";
var wordSpaces = [];
var rightLetters = [];
var chosenWord = "";
var letterIsGuessed = false;
var hangman = "";




$( document ).ready(function() {

function winLose() {
	if (guessCounter === chosenWord.length) {
		// winCounter++;
		alert('You win!');
		
	}else if (guessCounter === 0) {
		guessCounter--;
		alert('Sucks to suck' + wrongLetters.join(' '));
		
	}
}


function chooseRandomWord() {
 	chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
}

//check letter
function letterChecker() {
	letterIsGuessed = false;

	for (var i = 0; i < guessedLetters.length; i++) {
		if(guessedLetters[i] === userGuess) {
			letterIsGuessed = true;

		}
	}


	if(!letterIsGuessed) {
		for(var i = 0; i < chosenWord.length; i++){
			// console.log(chosenWord[i]);
			console.log(userGuess);
			   if(chosenWord[i] === userGuess){
				guessedLetters.push(userGuess);
				wordSpaces.join('');
				wordSpaces[i] = userGuess;
			
				guessCounter++;
				// winLose();

				// make sure guessed letters is updated before the doucument.getelement is run
				document.getElementById("wordSpaces").innerHTML = wordSpaces;

				// make sure guessed letters is updated before the doucument.getelement is run
				document.getElementById("guessedSoFar").innerHTML = guessedLetters;
			
			}else if (!chosenWord[i] === userGuess){
				guessedLetters.push(userGuess);
		

				// make sure guessed letters is updated before the doucument.getelement is run
				document.getElementById("guessedSoFar").innerHTML = guessedLetters;

				guessCounter.push(userGuess);
			

				document.getElementById("wrongletter").innerHTML = wrongLetters;
				console.log(wrongLetters);
				guessCounter --;

					} 
			
			letterIsGuessed = false;
		
	
			}
			
		}
	}






var animate = function(){
	var drawMe = guessCounter;
	drawArray[drawMe]();
}


 canvas =  function(){

    hangman = document.getElementById("hangman");
    context = hangman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  }
  
  head = function(){
      hangman = document.getElementById("hangman");
      context = hangman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }

  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

 frame1 = function() {

     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  

function makeBlankSpaces() {
	for (var i = 0; i < chosenWord.length; i++) {
		wordSpaces.push("_");
	}
	console.log(chosenWord);
	console.log(wordSpaces);
	$("#wordSpaces").text(wordSpaces.join(' '));
}

//hangman

// function showPartOfMan(numPartsLeft)
//     {
//         var part = MAX_BODY_PARTS - numPartsLeft;
//         if(part < 0 || part >= man.length) return;
//         if(part == 1)  //show the torso
//         {
//             var torso = document.querySelectorAll("." + man[1]);
//             torso[0].style.visibility = "visible";
//             torso[1].style.visibility = "visible";
//         }
//         else
//         {
//             var otherPart = document.querySelector("#" + man[part]);
//             otherPart.style.visibility = "visible";        
//         }
//     }

// var canvas = document.createElement('canvas');
// 		document.body.appendChild(canvas);
// 		 draw p.size(600, 600);= new Processing(canvas, function(p) {
			
	
		 // draw.background(255, 255, 255);


// GAME PROCESS ============================================


function reset() {
	chooseRandomWord();
	makeBlankSpaces();
	guessedLetters = [];
	guessCounter = 10;
	// var guessesLeft = 10;
	var userGuess = "";
	var wordSpaces = [];
	
// document.getElementById('guessedSoFar').innerHTML = "Guesses remaining: " + guessCounter;


}


$(document).keyup(function(event) {
	userGuess = event.key;
	letterChecker();
	$('#start').click(reset);

});

reset();

});



