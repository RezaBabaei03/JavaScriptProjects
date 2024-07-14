
// Count and return tips and totals based on predefined bills
// bills in range [50, 300] have 15% tips, other bills have 20%

const calcTip = function (bill) {
  let tip;
  if (bill >= 50 && bill <= 300) { tip = bill * 0.15; }
  else { tip = bill * 0.2; }
  return tip;
}
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) { sum += arr[i]; }
  return (sum / arr.length)
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(bills, tips, totals)
console.log(calcAverage(bills), calcAverage(tips), calcAverage(totals))
