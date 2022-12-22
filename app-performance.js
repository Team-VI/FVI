'use strict';
 //************************DOM */

let recordTable = document.getElementById('performanceTable');

//*************************** Recording users result to the table *************************/

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







