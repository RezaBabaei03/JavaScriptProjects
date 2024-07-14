
// Finding the difference between Max and min values in console

const max = function (arr) {
    if (arr.length === 0) { return undefined; }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if ((typeof arr[i] === "number") && (arr[i] > max)) { max = arr[i]; }
    }
    return max;
}
  
const min = function (arr) {
if (arr.length === 0) { return undefined; }
let min = arr[0];
for (let i = 1; i < arr.length; i++) {if ((typeof arr[i] === "number") && (arr[i] < min)) { min = arr[i]; }}
return min;
}


// Uniarrayal:


// const amplitude = function (arr) { return max(arr) - min(arr); }
// const temp = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// console.log(amplitude(temp));


// Biarrayal:


const amplitude = function (arr1, arr2) {
    let mx = max([max(arr1), max(arr2)]);
    let mn = min([min(arr1), min(arr2)]);
    return mx - mn;
  }
  
  const temp1 = [3, 5, -1];
  const temp2 = [9, 0, 5];
  console.log(amplitude(temp1, temp2));
