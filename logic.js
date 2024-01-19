//Spooky! The start of a JS file
const numberOfAdditionButtons = 20;
const numberOfSubtractionButtons = 20;

const buttonContainer = document.getElementById("button-container");

for (let i = 1; i <= numberOfAdditionButtons; i++) {
  const addButton = document.createElement("button");
  addButton.textContent = "Add 1";
  addButton.setAttribute("id", `buttonA${i}`);
  buttonContainer.appendChild(addButton);
}
