function saveRateToStorage() {
  console.log("cllicked save");
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
