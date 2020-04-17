Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:





function evenNumbers(array, number){
  const result = [];
  for (let i = 0; i <= array.length; i++){
    if (array[i] % 2 === 0) result.push(array[i]);
  }
  return result.splice(result.length - number, number);
}
