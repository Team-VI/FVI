'use strict';


//******************DOM********************/
let recordTable = document.getElementById('performanceTable');

let userArray = [];

let boxOne = document.getElementById('box1');
let boxTwo = document.getElementById('box2');
let boxThree = document.getElementById('box3');

let playButton = document.getElementById('mainBet');
let scoreDisplay = document.querySelector('#scoreDisplay');
let spinDisplay = document.querySelector('#spinDisplay');

//**************GLOBALS-VARIABLES***********************************/////////




let startingSpins = 20;
let score = 0;
let tokens = ['😈','👻','🎃'];



//**************CONSTRUCTOR-FUNCTIONS***********************************/////////


function User(name, score) {
  this.name = name;
  this.score = score;
}


//**************HANDLER-FUNCTIONS***********************************/////////



//**********RNG-FUNCTIONS************************ */

function getRandomToken() 
{
  return tokens[Math.floor(Math.random() * tokens.length)];
}     
  

//*******************GETTING-USER-INFO*******/




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

let usersInfo = localStorage.getItem('usersStorage');
if (usersInfo){
  let parsedUserInfo = JSON.parse(usersInfo);
  for (let usersStorage of parsedUserInfo) {
    let name = usersStorage.userName;
    let score = usersStorage.score;
    createUserObj(name, score);
  }
}

let fetchedUser = localStorage.getItem('user');
let parsedUser = JSON.parse(fetchedUser);
let fetchedScore = localStorage.getItem('score');
let parsedScore = JSON.parse(fetchedScore);
localStorage.removeItem('user');
localStorage.removeItem('score');


function UserScore(userName, score){
  this.userName = userName;
  this.score = score;
}
if (fetchedUser !== null && fetchedScore !== null){
  createUserObj(fetchedUser, fetchedScore);
}

storeUserArray();

function createUserObj(userName, score){
  let userObj = new UserScore(userName, score);
  userArray.push(userObj);
  console.log(userArray);
}
function storeUserArray(){
  let stringifiedArray = JSON.stringify(userArray);
  localStorage.setItem('usersStorage', stringifiedArray);
}  


//*************************** Recording users result to the table 


//*************************/







function header(){ /*****Stand alone function */

  let tableRow = document.createElement('tr');
  recordTable.appendChild(tableRow);


  let tableHeader = document.createElement('th');
  tableHeader.textContent = 'Player';
  tableRow.appendChild(tableHeader);

  tableHeader = document.createElement('th');
  tableHeader.textContent = 'Score';
  tableRow.appendChild(tableHeader);
}

header();

// function recordResult()     /**********Recording current result */
// { 
//   let tableRow = document.createElement('ul');
//   recordTable.appendChild(tableRow);
//   for (let i=0; i<userArray.length; i++){
//   // let tableRow = document.createElement('th');
//   // recordTable.appendChild(tableRow);

//   // tableCell = document.createElement('td');
//   // tableCell.textContent = userArray[i].userName;
//   // tableRow.appendChild(tableCell);

//   // tableCell = document.createElement('td');
//   // tableCell.textContent = userArray[i].score;
//   // tableRow.appendChild(tableCell);
//   let tableNum = document.createElement('li');
//   tableRow.appendChild(tableNum);
//   tableNum.textContent =userArray[i].userName;
  
// }
// }

function renderTable() {
  for (let i = 0; i < userArray.length; i++) {
  let tr = document.createElement('tr');
  recordTable.appendChild(tr);
  let td = document.createElement('td');
  
  td.textContent = userArray[i].userName;
  
  tr.appendChild(td);
  let tdcookie = document.createElement('td');
  tdcookie.textContent = userArray[i].score;
  tr.appendChild(tdcookie);
  }
}
renderTable();



playButton.addEventListener('click', handleSpin);