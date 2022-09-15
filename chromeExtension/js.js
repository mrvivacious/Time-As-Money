// IDEAS from Alex at Emma's Cafe
// - Calculate rate after expenses and bills ("disposable income")
// A whole budgeting framework
// Add a popup where you an just enter a raw value for your rate and the cost
//
// Add a whole ass website tool, and make the chrome extension a supplemental tool,
//  and use GitHub pages to host the tool for free???? Dashboard for Cost of Time / Time as a Resource?
// Visualizer of a horizontal line (of length hours to be spent collecting money) with colored chunks (expenses)
// todo list? feature list? ui? make this a project? hahahah
// todo refactor shit at the end of a feature cycle
//////////

console.log("hello from Time As Money");

function checkForPrice(event) {
  let htmlElement = event.target;
  let elementText = htmlElement.innerText;

  console.log(htmlElement);

  if (htmlElement.childElementCount > 1) {
    return; // StockX, avoid showing tooltip on larger, unrelated sections of the website. bug?
  }

  if (elementText.includes("$")) {
    elementText = elementText.replaceAll(",", "");
    let cost = elementText.split("$");

    if (cost[1]) {
      let costAsNum = parseFloat(cost[1]);
      // let sampleWage = 11.0; // TODO get this data from the user via chrome.storage (prompt the to submit from within the popup or smth)
      // maybe, if samplewage is null, add a tooltip to every price that says "u can add a wage in the popup to see time calculated!"

      chrome.storage.sync.get("hourlyRate", function (returnedObject) {
        let wage = returnedObject["hourlyRate"];
        let time = costAsNum / wage;

        htmlElement.setAttribute(
          "title",
          "At a wage of $" +
            wage +
            ", the hours needed to buy this are\n\n" +
            Math.ceil(time) +
            " hours"
        );
      });
    }
  }
}

document.addEventListener("mouseover", checkForPrice);
