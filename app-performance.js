// 'use strict';
//  //************************DOM */

// let recordTable = document.getElementById('performanceTable');
// let userArray = [];

// //**************Parsed data */

// // let leaderBoard = localStorage.getItem('');
// // if (leaderBoard) {
// //   let parseleaderInfo = JSON.parse(leaderBoard);
// //   for (let linfo of parseleaderInfo) {
// //     let name = linfo.name;
// //     let score = linfo.score;
// //     makeleaderScoreInfo(name, score);
// //   }
// // }


// let fetchedUser = localStorage.getItem('user');
// let parsedUser = JSON.parse(fetchedUser);
// let fetchedScore = localStorage.getItem('score');
// let parsedScore = JSON.parse(fetchedScore);
// localStorage.removeItem('user');
// localStorage.removeItem('score');


// function UserScore(userName, score){
//   this.userName = userName;
//   this.score = score;
// }
// createUserObj(fetchedUser, fetchedScore);
// storeUserArray();

// function createUserObj(userName, score){
//   let userObj = new UserScore(userName, score);
//   userArray.push(userObj);
//   console.log(userArray);
// }
// function storeUserArray(){
//   let stringifiedArray = JSON.stringify(userArray);
//   localStorage.setItem('usersStorage', stringifiedArray);
// }  






// //*************************** Recording users result to the table 


// //*************************/







// function header(){ /*****Stand alone function */

//   let tableRow = document.createElement('tr');
//   recordTable.appendChild(tableRow);

//   let tableHeader = document.createElement('th');
//   tableHeader.textContent = 'Player';
//   tableRow.appendChild(tableHeader);

//   tableHeader = document.createElement('th');
//   tableHeader.textContent = 'Score';
//   tableRow.appendChild(tableHeader);
// }

// header();

// // function recordResult()     /**********Recording current result */
// // {
// //   let tableRow = document.createElement('tr');
// //   recordTable.appendChild(tableRow);

// // //   tableCell = document.createElement('td');
// // //   tableCell.textContent = User.name;
// // //   tableRow.appendChild(tableCell);

// // //   tableCell = document.createElement('td');
// // //   tableCell.textContent = User.score;
// // //   tableRow.appendChild(tableCell);

// // // }

// // recordResult();







