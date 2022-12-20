'use strict';

let boxOne = document.getElementById('box-one');
let boxTwo = document.getElementById('box-two');
let boxThree = document.getElementById('box-three');

let recordTable = document.getElementById('record-table');

//**************GLOBALS***********************************/////////


let startingSpins = 10;
let score = 0;

let boxArray =[box1,box2,box3];

const tokens=['😈','👻','🎃','🤖','😡','💎'];

//**  RNG FUNCTIONS************************ */

// function randomNumber(){
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) +min );
// }

function getRandomItem(tokens) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * tokens.length);

  // get random item
  const item = tokens[randomIndex];

  return item;
}

getRandomItem(tokens);



function spinFunction ()
{
  let box1 = getRandomItem;
  let box2 = getRandomItem;
  let box3 = getRandomItem;



  if (box1 === box2 && box2 === box3){
  score = score + 100;
  }
  else {
    score = score - 100;
  }
  return score;

  boxOne.innerHTML = `${box1}`;
  boxTwo.innerHTML = `${box2}`;
  boxThree.innerHTML = `${box3}`;

}




// const array = [1, 'hello', 5, 8];

// const result = getRandomItem(array);



//CONSTRUCTOR
function User(name, age){
  this.name=name;
  this.age=age;
  this.score = 0;
  User.userArray.push(this);
}

let userArray = [];

let savedUser = JSON.stringify(userArray);
localStorage.setItem('user', savedUser);

let fetchedUser = localStorage.getItem('user');
let parsedUser = JSON.parse(fetchedUser);




//*************************** Recording users result to the table *************************/

function header(){ /*****Stand alone function */

  let tableRow = document.createElement('tr');
  recordTable.appendChild(tableRow);

  let tableHeader = document.createElement('th');
  tableHeader.textContent = 'Player';
  tableRow.appendChild(tableHeader);

  tableHeader = document.createElement('th');
  tableHeader.textContent = 'Score';
  tr.appendChild(tableHeader);
}

header();

function recordResult()     /**********Recording current result */
{
  let tableRow = document.createElement('tr');
  recordTable.appendChild(tableRow);

  tableCell = document.createElement('td');
  tableCell.textContent = User.name;
  tableRow.appendChild(tableCell);

  tableCell = document.createElement('td');
  tableCell.textContent = User.score;
  tableRow.appendChild(tableCell);

}








//TODO: user number gen on button push
//TODO: winning number gen on spin
//TODO: work array of 3 into both poss.

//TODO:  attatch form to constructor for user input
//TODO: 
//TODO:
//TODO:

playButton.addEventListener('click', spinFunction);