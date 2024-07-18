// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let arr = [12, 13, 14, 15];
console.log(arr);
let squared = arr.map(n => n * n);
console.log(squared);
// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evens = arr.filter(n => n % 2 == 0);
console.log(evens);
// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sumOfNumbers = arr.reduce((t, c) => t + c);
console.log(sumOfNumbers);