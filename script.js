"use strict";

window.addEventListener("load", startApp);

const randomNumbers = [
  9, 31, 16, 16, 27, 14, 31, 19, 22, 22, 0, 6, 1, 27, 18, 28, 7, 25, 6, 25, 15, 1, 12, 23, 26, 26, 0, 22, 31, 31, 5, 7, 21, 7, 1, 29, 20, 30, 13, 14,
];

function startApp() {
  setBarHeights();
}

function setBarHeights() {
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < bars.length; i++) {
    const barHeight = randomNumbers[i];
    bars[i].style.height = `${barHeight}%`;
  }
}

function addNewValue(newValue) {
  randomNumbers.shift();
  randomNumbers.push(newValue);
  setBarHeights();
}

function getNumberofCustomers() {
  return Math.floor(Math.random() * 32);
}

function updateData() {
  const newValue = getNumberofCustomers();
  addNewValue(newValue);
}

setInterval(updateData, 1000);
