// on input field change
// update wage

function calculateWorkRequired(itemCost, hourlyRate) {
  return itemCost / hourlyRate;
}

function isValidMonetaryFormat(value) {
  if (!value.includes(".")) {
    value += ".00";
  }

  let moneyRegexLol = /\d+.\d+/i;

  console.log(moneyRegexLol.exec(value)[0]);

  return moneyRegexLol.exec(value)[0];
}

// function convertRawHoursToClockTime(rawHours) {
//   let diff = rawHours * 60 * 60; // Minutes, seconds, milliseconds

//   let d = Math.floor(diff / (24 * 60 * 60));
//   diff = diff - d * 24 * 60 * 60;
//   let h = Math.floor(diff / (60 * 60));
//   diff = diff - h * 60 * 60;
//   let m = Math.floor(diff / 60);
//   diff = diff - m * 60;
//   let s = diff;

//   let streak = document.getElementById("streak");
//   if (streak) {
//     streak.innerHTML =
//       d + " day(s), " + h + " hour(s), " + m + " min(s), " + s + " sec(s)";
//   } // todo, instead, use Years Months Weeks Days Hours.
// }

function calculateWork() {
  // validate input
  let hourlyRate = document.getElementById("input_hourly_rate").value;
  let itemCost = document.getElementById("input_item_cost").value;

  hourlyRate = isValidMonetaryFormat(hourlyRate);
  itemCost = isValidMonetaryFormat(itemCost);

  if (hourlyRate && itemCost) {
    let work = calculateWorkRequired(itemCost, hourlyRate);
    console.log(work);

    document.getElementById("p_work_required_rounded").innerText =
      Math.ceil(work) + " real hours";

    document.getElementById("p_work_required").innerText = work + " math hours";
    // convertRawHoursToClockTime(Math.ceil(work));
  } // else, do nothing. maybe show an error message?
}

document.addEventListener("change", calculateWork);
