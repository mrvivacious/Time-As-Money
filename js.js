// IDEAS from Alex at Emma's Cafe
// - Calculate rate after expenses and bills ("disposable income")
// A whole budgeting framework
// Add a popup where you an just enter a raw value for your rate and the cost
//

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
      let sampleWage = 11.0; // TODO get this data from the user via chrome.storage (prompt the to submit from within the popup or smth)
      // maybe, if samplewage is null, add a tooltip to every price that says "u can add a wage in the popup to see time calculated!"

      let time = costAsNum / sampleWage;

      htmlElement.setAttribute(
        "title",
        "At a wage of $11.00, the hours needed to buy this are\n\n" +
          time +
          " hours"
      );
    }
  }
}

document.addEventListener("mouseover", checkForPrice);

// // bind to each span

// $("p").unbind("hover");

// $("p").hover(function () {
//   if (this.innerText.includes("$")) {
//     console.log(this.innerText);
//   }

//   // todo add "title" with hourly rate as the text to the element
//   // .setAttribute('title', calculateRateAsString());
// });

// // Find anything with a price tag
// // console.log that shit

// // let findFirstMatchRegex = /\$\d+.\d+/i;

// // how to find all matching patterns?
