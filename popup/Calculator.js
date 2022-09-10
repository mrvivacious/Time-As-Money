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
  } // else, do nothing. maybe show an error message?
}

function main() {
  let input_hourly_rate = document.getElementById("input_hourly_rate");
  let input_item_cost = document.getElementById("input_item_cost");

  input_hourly_rate.addEventListener("change", calculateWork);
  input_item_cost.addEventListener("change", calculateWork);
}

main();
