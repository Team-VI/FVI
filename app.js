'use strict';


//GLOBALS


let startingSpins = 10;
let score = 0;


const tokens=['😈','👻','🎃','🤖','😡','💎'];

// RNG FUNCTIONS
function init(firstInit=true, groups=1, duration=1){
  for (const door of doors){
    if (firstInit){
      door.dataset.spinned === '0';
    } else if (door.dataset.spinned==='1'){
      return;
    }
  }
}

function randomNumber(){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) +min );
}

function getRandomItem(tokens) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * tokens.length);

  // get random item
  const item = tokens[randomIndex];

  return item;
}

getRandomItem(tokens);
// const array = [1, 'hello', 5, 8];

// const result = getRandomItem(array);











// let winningNumber = randomNumber(1,1);
// let usersNumber = randomNumber(1,1);

// console.log(winningNumber);
// console.log(usersNumber);



//CONSTRUCTOR
function User(name, age, score){
  this.name=name;
  this.age=age;
  this.score = 0;
}


//TODO: "youwin/youlose" if/else function
// sudo-code below
// function winLose(winningNumber,usersNumber) {
//   let i = 0;
//   if (winningNumber === usersNumber) {
//     i++;
//     return i;
//   } else {
//     i--;
//     return i;
//   }
// }

// winLose();


function header(){ /*****stand alone function */

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



let box1 = randomNumber;
let box2 = randomNumber;
let box3 = randomNumber;


//TODO: user number gen on button push
//TODO: winning number gen on spin
//TODO: work array of 3 into both poss.

//TODO:  attatch form to constructor for user input
//TODO: 
//TODO:
//TODO: