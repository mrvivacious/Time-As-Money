function saveRateToStorage() {
  console.log("cllicked saveRate");
  let rate = document.getElementById("input_hourly_rate").value;

  if (rate) {
    // TODO put below lines in a data interface class of some sort?
    chrome.storage.sync.set({ hourlyRate: rate }, function () {
      console.log("rate saved?"); // replace with some kind of visual feedback, like a Toast from Android platform
    });
  }
}

let button_save_rate = document.getElementById("btn_save_rate");
button_save_rate.addEventListener("click", saveRateToStorage);

// TODO put below lines in a data interface class of some sort?
chrome.storage.sync.get("hourlyRate", function (returnedObject) {
  if (!returnedObject) {
    return;
  }

  let rate = returnedObject["hourlyRate"];
  if (rate) {
    document.getElementById("input_hourly_rate").value = parseFloat(rate);
  } else {
    console.error(
      "hourlyRate property is missing, but the object exists in storage."
    );
  }
});

function saveDurationToStorage() {
  console.log("cllicked saveDuration");
  let duration = document.getElementById("input_workday_duration").value;

  if (duration) {
    // TODO put below lines in a data interface class of some sort?
    // also, workdayDuration and hourlyRate would be better as keys to a user object rather than individual items
    chrome.storage.sync.set({ workdayDuration: duration }, function () {
      console.log("duration saved?"); // replace with some kind of visual feedback, like a Toast from Android platform
    });
  }
}

let button_save_duration = document.getElementById("btn_save_duration");
button_save_duration.addEventListener("click", saveDurationToStorage);

// TODO put below lines in a data interface class of some sort?
chrome.storage.sync.get("workdayDuration", function (returnedObject) {
  if (!returnedObject) {
    return;
  }

  let duration = returnedObject["workdayDuration"];
  if (duration) {
    document.getElementById("input_workday_duration").value =
      parseFloat(duration);
  } else {
    console.error(
      "workdayDuration property is missing, but the object exists in storage."
    );
  }
});
