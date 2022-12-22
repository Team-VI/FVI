'use strict';


//******************DOM********************/


let boxOne = document.getElementById('box1');
let boxTwo = document.getElementById('box2');
let boxThree = document.getElementById('box3');

let playButton = document.getElementById('mainBet');
let scoreDisplay = document.querySelector('#scoreDisplay');
let spinDisplay = document.querySelector('#spinDisplay');
// let recordTable = document.getElementById('record-table');

// let userDisplay = document.getElementById('userDisplay');

//**************GLOBALS-VARIABLES***********************************/////////



let userArray = [];
let startingSpins = 20;
let score = 0;
let tokens = ['😈','👻','🎃'];



//**************CONSTRUCTOR-FUNCTIONS***********************************/////////


function User(name, score) {
  this.name = name;
  this.score = score;
}


//**************HANDLER-FUNCTIONS***********************************/////////


function handleSubmit(event){
  event.preventDefault();
  console.dir(event.target);
  let name = event.target.userName.value;
  let newUser = new User(name,score);

  userArray.push(newUser);
}


// document.getElementById('user-builder').addEventListener('submit', handleSubmit);



// ifscore===0 start here to save info on game end
// let savedUser = JSON.stringify(userArray);
// localStorage.setItem('user',savedUser);
// let fetchedUser = localStorage.getItem('user');
// let parsedUser = JSON.parse(fetchedUser);


//**********RNG-FUNCTIONS************************ */

function getRandomToken() 
{
  return tokens[Math.floor(Math.random() * tokens.length)];
}     
  

//*******************GETTING-USER-INFO*******/


// function getUserName(){
//   let userName = prompt('What`s your Name?').toLowerCase();
//   while (userName === ('')){
//     userName = prompt('Try Again')
//   }
//   return userName;
// }


function handleSpin ()
{
  if (startingSpins > 0)
  {  
  let box1 = getRandomToken();
  let box2 = getRandomToken();
  let box3 = getRandomToken();


  /* render reels */
  boxOne.innerHTML = `${box1}`;
  boxTwo.innerHTML = `${box2}`;
  boxThree.innerHTML = `${box3}`;

  /* render the score */
  if(score<100){
    scoreDisplay.textContent =`Score:000`;
  }else if(score>=100) {
    scoreDisplay.textContent =`Score:${score}`;}

  calculateScore(box1, box2, box3);
  startingSpins --;

  /* render the remaining spins */
  if(startingSpins>99){
    spinDisplay.textContent = `Spins:${startingSpins}`;
  }else if(startingSpins<=99 && startingSpins>9){ spinDisplay.textContent = `Spins:0${startingSpins}`;
  }else if(startingSpins<=9){
    spinDisplay.textContent = `Spins:00${startingSpins}`;
  }

  }
  else 
  {
    let userName = prompt(`Game Over. Final score: ${score}. Please enter your Name to save Result`);
    let savedUser = JSON.stringify(userName);
    let savedScore = JSON.stringify(score);
    localStorage.setItem('user', savedUser);
    localStorage.setItem('score', savedScore);
    window.location.reload();
  }
}

function calculateScore(box1, box2, box3){
  if (box1 === box2 && box2 === box3){
  score += 100;
  } 
  return score;

}


// //TODO:  attatch form to constructor for user input



let fetchedUser = localStorage.getItem('user');
let parsedUser = JSON.parse(fetchedUser);
let fetchedScore = localStorage.getItem('score');
let parsedScore = JSON.parse(fetchedScore);


// userDisplay.textContent=`test${parsedUser} and ${parsedScore} `;

if (parsedUser) {
  for (let i = 0; i < userArray.length; i++){
    userArray[i].name = parsedusers[i].name;
    userArray[i].score = parsedusers[i].score;
  }
}


playButton.addEventListener('click', handleSpin);