'use strict';

//****************** Dom

let boxOne = document.getElementById('box-one');
let boxTwo = document.getElementById('box-two');
let boxThree = document.getElementById('box-three');


let playButton = document.getElementById('play-button');
let scoreWindow = document.getElementById('score-window');

let recordTable = document.getElementById('record-table');
//**************GLOBALS***********************************/////////


let startingSpins = 10;
let score = 0;

// let boxArray =[box1, box2, box3];

let tokens = ['😈','👻','🎃'];
// const tokens = [1,2,3,4,5,6];

//**  RNG FUNCTIONS************************ */

function getRandomToken() 
{
  return tokens[Math.floor(Math.random() * tokens.length)];
}     
  
getRandomToken();
  

  // function User(name, age){
  //     this.name = name;
  //     this.age=age;
  //     this.score = 0;
  //     User.userArray.push(this);
  //   }



//Store.prototype.getCust = function () {  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) +this.minCust);};
// let box1 = randomToken;

function handleSpin ()
{
  if (startingSpins > 0)
  {  
  let box1 = getRandomToken();
  let box2 = getRandomToken();
  let box3 = getRandomToken();

  
  console.log('strin', startingSpins);


  boxOne.innerHTML = `${box1}`;
  boxTwo.innerHTML = `${box2}`;
  boxThree.innerHTML = `${box3}`;

  calculateScore(box1, box2, box3);
  startingSpins --;
  }
  else 
  {
    alert(`You are done, final score: ${score}`);}
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
// function User(name, age){
//   this.name=name;
//   this.age=age;
//   this.score = 0;
//   User.userArray.push(this);
// }

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