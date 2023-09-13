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
  if (inputTag.value != "") {
    initialText.innerHTML = inputTag.value;
    addButton.disabled = true;
    inputTag.disabled = true;
    deleteButton.disabled = false;
  }
}
function deletion() {
  if (inputTag.value != "") {
    addButton.disabled = false;
    inputTag.disabled = false;
    initialText.innerHTML = "Text";
    redBox.innerHTML = "";
    greenBox.innerHTML = "";
    blueBox.innerHTML = "";
    yellowBox.innerHTML = "";
    inputTag.value = "";
  }
}

function red() {
  addition();
  redBox.innerHTML = inputTag.value;
  greenBox.innerHTML = "";
  blueBox.innerHTML = "";
  yellowBox.innerHTML = "";
}
function green() {
  addition();
  greenBox.innerHTML = inputTag.value;
  redBox.innerHTML = "";
  blueBox.innerHTML = "";
  yellowBox.innerHTML = "";
}
function blue() {
  addition();
  blueBox.innerHTML = inputTag.value;
  redBox.innerHTML = "";
  greenBox.innerHTML = "";
  yellowBox.innerHTML = "";
}
function yellow() {
  addition();
  yellowBox.innerHTML = inputTag.value;
  redBox.innerHTML = "";
  greenBox.innerHTML = "";
  blueBox.innerHTML = "";
}

redButton.addEventListener("click", red);
greenButton.addEventListener("click", green);
blueButton.addEventListener("click", blue);
yellowButton.addEventListener("click", yellow);
