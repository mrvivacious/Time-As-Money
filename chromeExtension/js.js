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

  // console.log(htmlElement);

  if (htmlElement.childElementCount > 1) {
    return; // StockX, avoid showing tooltip on larger, unrelated sections of the website. bug?
  }

  if (elementText.includes("$")) {
    console.log("=========");
    console.log(elementText);
    elementText = elementText.replaceAll(",", ""); // $10,123.45
    let cost = elementText.split("$");

    if (cost[1]) {
      let costAsNum = parseFloat(cost[1]);
      // let sampleWage = 11.0; // TODO get this data from the user via chrome.storage (prompt the to submit from within the popup or smth)
      // maybe, if samplewage is null, add a tooltip to every price that says "u can add a wage in the popup to see time calculated!"

      chrome.storage.sync.get(null, function (returnedObject) {
        let wage = parseFloat(returnedObject["hourlyRate"]);
        let workDuration = parseFloat(returnedObject["workdayDuration"]);

        // if (!returnedObject) {
        //   htmlElement.setAttribute(
        //     "title",
        //     "Please set your data in the browser menu for the mouse menu to work."
        //   );
        // }

        // let wage = returnedObject["hourlyRate"];
        let timeAsHours = costAsNum / wage;

        htmlElement.setAttribute(
          "title",
          "Wage: $" +
            wage +
            "\nWork: " +
            workDuration +
            " hours" +
            "\n\nTime:\n\n" +
            prettyPrintTime(timeAsHours, workDuration)
        );

        let p = document.createElement("p");
        let t = document.createTextNode(
          prettyPrintTime(timeAsHours, workDuration)
        );
        p.appendChild(t);

        htmlElement.appendChild(p);
      });
    }
  }
}

function prettyPrintTime(time, duration) {
  // time = 80, duration = 7, return 11 D 3 H
  let diff = time * 60 * 60; // Conver to seconds
  let durationAsHours = duration * 60 * 60;

  let d = Math.floor(diff / durationAsHours);
  diff = diff - d * durationAsHours;
  let h = Math.floor(diff / (60 * 60));
  diff = diff - h * 60 * 60;

  if (diff > 0) {
    h++;
  }

  // Overflow correction from above conditional
  if (h == duration) {
    h = 0;
    d++;
  }

  // let m = Math.floor(diff / 60);
  // diff = diff - m * 60;
  // let s = Math.ceil(diff);

  return (
    d + " day(s), " + h + " hour(s)."

    // d + " day(s), " + h + " hour(s), " + m + " minute(s), " + s + " second(s)."
  );
}

document.addEventListener("mouseover", checkForPrice);
