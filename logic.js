//Spooky! The start of a JS file
const numberOfAdditionButtons = 20;
const numberOfSubtractionButtons = 20;
const numberOfNumbers = 20;

const addButtonContainer = document.getElementById("add-button-container");
const subButtonContainer = document.getElementById("sub-button-container");
const numberContainer = document.getElementById("number-container");

for (let i = 1; i <= numberOfAdditionButtons; i++) {
  const addButton = document.createElement("button");
  addButton.textContent = "Add 1";
  addButton.setAttribute("id", `buttonA${i}`);
  addButtonContainer.appendChild(addButton);
}

for (let i = 1; i <= numberOfSubtractionButtons; i++) {
  const subButton = document.createElement("button");
  subButton.textContent = "Subtract 1";
  subButton.setAttribute("id", `buttonS${i}`);
  subButtonContainer.appendChild(subButton);
}

for (let i = 1; i <= numberOfNumbers; i++) {
  const numberFields = document.createElement("div");
  numberFields.textContent = `${1}`;
  numberFields.setAttribute("id", `number${i}`);
  numberContainer.appendChild(numberFields);
}
