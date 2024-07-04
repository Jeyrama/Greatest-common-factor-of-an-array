/*
Write a function that returns the greatest 
common factor of an array of positive integers. 
Your return value should be a number, 
you will only receive positive integers.

greatestCommonFactor([46, 14, 20, 88]); // --> 2
*/


// Solution

function greatestCommonFactor(array) {
  function gcf(a, b) {
    if (b === 0) return a;
    return gcf(b, a % b);
  }
  return array.reduce(gcf);
};

// or

function greatestCommonFactor(array) {
  let min = Math.min(...array)
  let maxCommon = 1
  for(let i = 1 ; i <= min ;i++){
    for(let j = 0; j < array.length; j++){
      if (array[j] % i != 0){
        break;
      }
      if (!array[j + 1]){
        maxCommon = i 
      }
    }
    }
  
  return maxCommon
};