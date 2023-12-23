# Time-As-Money
Convert monetary prices to hourly prices.

[Chrome extension](https://chromewebstore.google.com/detail/time-as-money/pjhijfjkkfmmniikmfkenjpjbfipkcib)


When you put your mouse over a price tag, you can see how many hours of work it'll take to make that amount of money.

---

```
!! Test app with Amazon, Best Buy, Walmart, etc websites

TODO::
Popup has calculator
Popup allows user to save their hourly wage and workday duration
Popup shows cost in terms of hours + workdays

Hover over price shows converted price
Tooltip shows calculation. Be sure to append this to the existing tooltip
 so to not overwrite website functionality or, idk, aria-label stuff

Wishlist feature, new tab
Save items and their prices
See "wishlist cost" in hours and workdays

Marketing: icon, banners for chrome store submission
YouTube: launch. walkthrough. tutorials. idk

In future, add a way to account for income tax (depends on each state)
Maybe also add an actual UI.
Add code tests somehow to validate the javascript and app's functions for development sake.
DONE::

```

Potential data schema:

```
"UserData" : Object
| "HourlyRate" : Float
| "Expenses" : Array / List of Expense objects


"Expense" : Object
| "Name" : String
| "Cost" : Float


Why float instead of double? Float holds less decimals than Double, therefore Float requires less space.

Maybe, if we ever integrate a cloud service or login for whatever reason,
  a session token or cookie will need to be added, idk, inexperienced.
```
