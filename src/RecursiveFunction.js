// Recursion exercise
// Write a recursive function sum that calculates
// the sum of an array of integers.
let n = 0;
let s = 0;
function sum(arr) {
  n = arr.length;
  s = s + arr[n - 1];
  //console.log(n);
  // console.log(s);
  //if (n === 1) return s; //doesn´t work ask why.
  if (n > 1) {
    console.log(arr.slice(0, n - 1));
    sum(arr.slice(0, n - 1));
  }
  //if (n === 1) return s;
  return s;
}

// uncomment these to check your work
//console.log(sum([1, 2, 3])); // -> returns 6
//console.log(sum([1, 2, 3, 4, 5, 6])); // -> returns 21
console.log(sum([8, 1, 5]));
