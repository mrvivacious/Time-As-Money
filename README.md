# Time-As-Money
Convert monetary prices to hourly prices.


When you put your mouse over a price tag, you can see how many hours of work it'll take to make that amount of money.


### Version 1.0 feature planning:

- Hover on price displays work required in a readable, large popup
- Should work on Amazon, Best Buy, Walmart, whatever the most [popular shopping sites](https://www.semrush.com/website/top/global/e-commerce-and-retail/) are
- Chrome storage sync for any data inputted by the user (cloud storage). Can move to firebase or smth if app matures significantly...
- Use [Jest](https://jestjs.io/docs/getting-started) for tests (learning experience). Ensure that node files are not published to app store when releasing
- 


---

### Notes for development:

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
