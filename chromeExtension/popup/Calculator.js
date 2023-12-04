function calculateWorkRequired(itemCost, hourlyRate) {
  return itemCost / hourlyRate;
}

function isValidMonetaryFormat(value) {
  if (!value.includes(".")) {
    value += ".00";
  }

  let moneyRegexLol = /\d+.\d+/i;
  // console.log(moneyRegexLol.exec(value)[0]);

  return moneyRegexLol.exec(value)[0];
}

function convertRawHoursToClockTime(hoursWorkedInTotal, workdayDuration) {
  return (hoursWorkedInTotal / workdayDuration) + ' math workdays';
}

function calculateWork() {
  // validate input
  let hourlyRate = document.getElementById("input_hourly_rate").value;
  let itemCost = document.getElementById("input_item_cost").value;

  hourlyRate = isValidMonetaryFormat(hourlyRate);
  itemCost = isValidMonetaryFormat(itemCost);

  if (hourlyRate && itemCost) {
    let work = calculateWorkRequired(itemCost, hourlyRate);
    // console.log(work);

    document.getElementById("p_work_required_rounded").innerText =
      Math.ceil(work) + " real hours";

    document.getElementById("p_work_required").innerText = work + " math hours";
    
    let workdayDuration = document.getElementById('input_workday_duration').value;
    let workdaysRequired = convertRawHoursToClockTime(Math.ceil(work), workdayDuration);
    
    document.getElementById("p_workdays_required_rounded").innerText =
      Math.ceil(parseFloat(workdaysRequired)) + " real workdays";

    document.getElementById("p_workdays_required").innerText = workdaysRequired;
  }
}

document.addEventListener("change", calculateWork);
