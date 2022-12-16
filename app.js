'use strict';



//GLOBALS



// RNG FUNCTIONS
function randomNumber(min,max){
  min =Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) +min );
}

let winningNumber = randomNumber(1,1);
let usersNumber = randomNumber(1,1);

console.log(winningNumber);
console.log(usersNumber);



//CONSTRUCTOR
function User(name, age, wallet){
  this.name=name;
  this.age=age;
  this.wallet = 1;
}

let testUser = new User('someone', 4);
console.log(testUser);

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

// console.log(winLose);


//TODO: user number gen on button push
//TODO: winning number gen on spin
//TODO: work array of 3 into both poss.

//TODO:  attatch form to constructor for user input
//TODO: 
//TODO:
//TODO: