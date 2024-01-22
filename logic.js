//Spooky! The start of a JS file
const numberOfAdditionButtons = 20;
const numberOfSubtractionButtons = 20;
const numberOfNumbers = 20;

const addButtonContainer = document.getElementById("add-button-container");
const subButtonContainer = document.getElementById("sub-button-container");
const numberContainer = document.getElementById("number-container");

function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

function initClient() {
  gapi.client
    .init({
      apiKey: "AIzaSyCPx6EYcEKkyJ3MV7BVAGiqEH7PNChfQCc",
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4",
      ],
      clientId:
        "417051681649-7jctn8epfrpmt7lu6e53runct8klq2o4.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/spreadsheets",
    })
    .then(function () {
      addButtonEventListeners();
    });
}

for (let i = 1; i <= numberOfAdditionButtons; i++) {
  const addButton = document.createElement("button");
  addButton.textContent = "Add 1";
  addButton.setAttribute("id", `buttonA${i}`);
  addButton.style.gridArea = `aB${i}`;
  addButtonContainer.appendChild(addButton);
}

for (let i = 1; i <= numberOfSubtractionButtons; i++) {
  const subButton = document.createElement("button");
  subButton.textContent = "Subtract 1";
  subButton.setAttribute("id", `buttonS${i}`);
  subButton.style.gridArea = `sB${i}`;
  subButtonContainer.appendChild(subButton);
}

for (let i = 1; i <= numberOfNumbers; i++) {
  const numberFields = document.createElement("div");
  numberFields.textContent = i;
  numberFields.setAttribute("class", "number");
  numberFields.setAttribute("id", `number${i}`);
  numberFields.style.gridArea = `nu${i}`;
  numberContainer.appendChild(numberFields);
}

function addButtonEventListeners() {
  for (let i = 1; i <= numberOfAdditionButtons; i++) {
    const addButton = document.getElementById(`buttonA${i}`);
    addButton.addEventListener("click", function () {
      addToSheet("+1");
    });
  }
}

function addToSheet(value) {
  const spreadsheetId = "1s5fcF7p7UZSoHxZVZ0FfRDUmlXlnUZ8uOJhd_Ns7Ywo";
  const range = "Sheet1!B2";
  const values = [[value]];

  gapi.client.sheets.spreadsheets.values
    .append({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: "RAW",
      resource: { values: values },
    })
    .then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.error("Error adding to sheet:", error.result.error.message);
      }
    );
}
