
// Printing elements of an array in console using formatted strings


const printForecast = function (arr) {
    let str = "... ";
    for (let i = 0; i < arr.length; i++) { str += `${arr[i]}C in ${i + 1} days ... `; }
    return str;
}

const arr1 = [17, 21, 23, 0, 0, -7];
const arr2 = [12, 5, -5, 0, 4];
console.log(printForecast(arr1), "\n", printForecast(arr2));
