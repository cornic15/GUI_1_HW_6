/*
   File: table.js
   91.461 Assignment: Creating an Interactive Dynamic Table
   Corina Mangione, UMass Lowell Computer Science, corina_mangione@student.uml.edu
   Copyright (c) 2020 by Corina Mangione. All rights reserved. May be
   freely
   copied or excerpted for educational purposes with credit to the
   author.
   updated by Corina Mangione on July 29, 2020
   */

// Decleare variables
var horizontalFirst;
var horizontalLast;
var verticalFirst;
var verticalLast;


// Get data from form
function getFormData() {
    horizontalFirst = parseInt(document.getElementById('horz_first').value);
    horizontalLast = parseInt(document.getElementById('horz_last').value);
    verticalFirst = parseInt(document.getElementById('vert_first').value);
    verticalLast = parseInt(document.getElementById('vert_last').value);
}

// Makes sure ueser input meeting requirements
function validateData() {
  var error = 0;
    if (horizontalFirst < -50 || horizontalLast > 50 || verticalFirst < -50 || verticalLast > 50) {
        document.getElementById('errorString').innerHTML = "Please enter a number between -50 and 50. ";
        //return false;
        error +=1;
    }

    if (horizontalFirst > horizontalLast) {
        console.log(horizontalFirst + ' - ' + horizontalLast);
        document.getElementById('errorString').innerHTML += "The horizontal first number is larger then the ending number. ";
        //return false;
  error +=1;
    }

    if (verticalFirst > verticalLast) {
        console.log(verticalFirst + ' - ' + verticalLast);
        document.getElementById('errorString').innerHTML += "The vertical first number is larger then the ending number. ";
        //return false;
          error +=1;
    }
    if(error!=0){
      return false;
    }
    else {
    return true;
  }
}


// used this resource for help with the dynamic table http://www.itgeared.com/articles/1503-how-to-create-dynamic-html-table-javascript/

// creates the table
function drawTable() {
    // changes table size based on number of elements
    var div1 = document.getElementById('div1');
    let tClass;
    if ((horizontalLast - horizontalFirst > 20) || (verticalLast - verticalFirst > 20)) {
        tClass = "largeTable";
    } else {
        tClass = "smallTable";
    }
    // creates a <table> element
    var tbl = document.createElement("table");
    tbl.classList.add(tClass);
    var row = document.createElement("tr");
    var cell = document.createElement("td");

    var cellText = ' ';
    var cellTextNode = document.createTextNode(cellText);
    cell.appendChild(cellTextNode);
    row.appendChild(cell);
    tbl.appendChild(row); // add the row to the end of the table body
    div1.appendChild(tbl);

    // creates the row of multiplicands
    for (var c = horizontalFirst; c <= horizontalLast; c++) {
        var cell = document.createElement("td");
        var cellText = c;
        var cellTextNode = document.createTextNode(cellText);
        cell.appendChild(cellTextNode);
        row.appendChild(cell);
    }

    tbl.appendChild(row); // add the row to the end of the table body

    div1.appendChild(tbl);


    // create row of multipliers
    // creating rows
    for (var r = verticalFirst; r <= verticalLast; r++) {
        var row = document.createElement("tr");
        // create cells in row
        var cell = document.createElement("td");
        var cellText = r;
        var cellTextNode = document.createTextNode(cellText);
        cell.appendChild(cellTextNode);
        row.appendChild(cell);
        tbl.appendChild(row);
        div1.appendChild(tbl);

        // creates the products in table
        for (var c = horizontalFirst; c <= horizontalLast; c++) {
            var cell = document.createElement("td");
            var cellText = c * r;
            var cellTextNode = document.createTextNode(cellText);
            cell.appendChild(cellTextNode);
            row.appendChild(cell);
        }

        tbl.appendChild(row); // add the row to the end of the table body

    }

    div1.appendChild(tbl); // appends <table> into <div1>
}

// function that calls function to get data, validate and return table to html
function doItAll() {
    document.getElementById('div1').innerHTML = '';
      document.getElementById('errorString').innerHTML = '';
    getFormData();
    var check = validateData();
    if (check) drawTable();
}
