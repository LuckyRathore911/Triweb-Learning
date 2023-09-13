let initialText = document.querySelector("h1");
let redBox = document.getElementById("red-box");
let greenBox = document.getElementById("green-box");
let blueBox = document.getElementById("blue-box");
let yellowBox = document.getElementById("yellow-box");

let inputTag = document.querySelector("input"); //adding .value here initialized it with empty space

let addButton = document.getElementById("add-button");
let deleteButton = document.getElementById("delete-button");
let redButton = document.getElementById("red-button");
let greenButton = document.getElementById("green-button");
let blueButton = document.getElementById("blue-button");
let yellowButton = document.getElementById("yellow-button");

function addition() {
  initialText.innerHTML = inputTag.value;
}
function deletion() {
  initialText.innerHTML = "";
  redBox.innerHTML = "";
  greenBox.innerHTML = "";
  blueBox.innerHTML = "";
  yellowBox.innerHTML = "";
}

function red() {
  redBox.innerHTML = inputTag.value;
}
function green() {
  greenBox.innerHTML = inputTag.value;
}
function blue() {
  blueBox.innerHTML = inputTag.value;
}
function yellow() {
  yellowBox.innerHTML = inputTag.value;
}
