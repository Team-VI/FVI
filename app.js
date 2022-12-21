'use strict';

//****************** Dom

let boxOne = document.getElementById('box1');
let boxTwo = document.getElementById('box2');
let boxThree = document.getElementById('box3');


let playButton = document.getElementById('mainBet');
let scoreWindow = document.getElementById('score-window');

let recordTable = document.getElementById('record-table');



let userArray = [];
//**************GLOBALS***********************************/////////


let startingSpins = 20;
let score = 0;



let tokens = ['😈','👻','🎃'];


function User(name, score) {
  this.name = name;
  this.score = score;
}



function handleSubmit(event){
  event.preventDefault();
  console.dir(event.target);
  let name = event.target.userName.value;
  console.log(name);
  let newUser = new User(name);
  userArray.push(newUser);
  console.log(newUser);
}

document.getElementById('user-builder').addEventListener('submit', handleSubmit);



// ifscore===0 start here to save info on game end
// let savedUser = JSON.stringify(userArray);
// localStorage.setItem('user',savedUser);
// let fetchedUser = localStorage.getItem('user');
// let parsedUser = JSON.parse(fetchedUser);


//**  RNG FUNCTIONS************************ */

function getRandomToken() 
{
  return tokens[Math.floor(Math.random() * tokens.length)];
}     

getRandomToken();
  

//******************** getting users info */



function getUserName(){
  let userName = prompt('What`s  your Name').toLowerCase();
  while (userName === ('')){
    userName = prompt('Try Again')
  }
  return userName;
}


  

function handleSpin ()
{
  if (startingSpins > 0)
  {  
  let box1 = getRandomToken();
  let box2 = getRandomToken();
  let box3 = getRandomToken();

  
  console.log('string', startingSpins);


  boxOne.innerHTML = `${box1}`;
  boxTwo.innerHTML = `${box2}`;
  boxThree.innerHTML = `${box3}`;

  calculateScore(box1, box2, box3);
  startingSpins --;
  }
  else 
  {
    alert(`You are done, final score: ${score}`);
  // User.prototype.push(score);
  }
}

function calculateScore(box1, box2, box3){
  
  if (box1 === box2 && box2 === box3){
  score = score + 100;
  } 

  console.log(score);
  return score;

}

// handleSpin();

// console.log(box1);

// console.log(spinFunction);



// // const array = [1, 'hello', 5, 8];

// // const result = getRandomItem(array);



// //CONSTRUCTOR


// let userArray = [];

// let savedUser = JSON.stringify(userArray);
// localStorage.setItem('user', savedUser);

// let fetchedUser = localStorage.getItem('user');
// let parsedUser = JSON.parse(fetchedUser);




// //*************************** Recording users result to the table *************************/

// function header(){ /*****Stand alone function */

//   let tableRow = document.createElement('tr');
//   recordTable.appendChild(tableRow);

//   let tableHeader = document.createElement('th');
//   tableHeader.textContent = 'Player';
//   tableRow.appendChild(tableHeader);

//   tableHeader = document.createElement('th');
//   tableHeader.textContent = 'Score';
//   tr.appendChild(tableHeader);
// }

// header();

// function recordResult()     /**********Recording current result */
// {
//   let tableRow = document.createElement('tr');
//   recordTable.appendChild(tableRow);

//   tableCell = document.createElement('td');
//   tableCell.textContent = User.name;
//   tableRow.appendChild(tableCell);

//   tableCell = document.createElement('td');
//   tableCell.textContent = User.score;
//   tableRow.appendChild(tableCell);

// }

// recordResult();






// //TODO: user number gen on button push
// //TODO: winning number gen on spin
// //TODO: work array of 3 into both poss.

// //TODO:  attatch form to constructor for user input
// //TODO: 
// //TODO:
// //TODO:

playButton.addEventListener('click', handleSpin);