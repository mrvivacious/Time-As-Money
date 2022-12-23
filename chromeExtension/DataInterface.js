/*

UserData
 | HourlyRate
 | Expenses AKA [ {"name": name, "cost": cost}, {"name": name, "cost": cost}, ...]

Expense
 | Name
 | Cost

*/

function hi() {
  alert("hello chicken");
}

// getUserExpenses?
// getUserHourlyRate?

function setUserHourlyRate(rate) {
  // get UserData object
  let userData = getUserData();

  // set hourly rate field
  userData["HourlyRate"] = parseFloat(rate);

  // write new object into storage
  setUserData(userData);
}

function setUserData(dataObject) {
  chrome.storage.sync.set({ UserData: dataObject }, function () {
    console.log("updated user data in storage, I hope");
  });
}

function createEmptyUserData() {
  let userData = {};
  userData["HourlyRate"] = 11.0;
  userData["Expenses"] = [];

  console.log(userData);

  chrome.storage.sync.set({ UserData: userData }, function () {
    console.log("created empty user data, i hope");
  });
}

function getUserData() {
  chrome.storage.sync.get("UserData", function (returnedObject) {
    if (returnedObject["UserData"]) {
      let userData = returnedObject["UserData"];
      return userData;
    } else {
      createEmptyUserData();
      return undefined;
    }

    // let hourlyRate = parseFloat(userData["HourlyRate"]);
    // let expenses = userData["Expenses"];
  });
}
