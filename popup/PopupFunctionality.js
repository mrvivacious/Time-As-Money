function saveRateToStorage() {
  let rate = document.getElementById("btn_save_rate").value;

  if (rate) {
    localStorage.setItem("hourlyRate", rate); // this doesnt seem to work. switch to chrome storage sync
  }
}

let button_save_rate = document.getElementById("btn_save_rate");

button_save_rate.addEventListener("click", saveRateToStorage);
