// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let arr = [12, 54, 11, 10, 31];
let arr2 = [...arr, 55, 92];
console.log(arr);
console.log(arr2);
// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.




let sumOfNumbers = (...numbers) => {

    let sum = 0;

    for (let index = 0; index < numbers.length; index++) {

        sum += numbers[index];

    }

    return sum;

}


console.log(sumOfNumbers(12, 34, 65, 11))