// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the
// second parameter.

let product = (n1, n2 = 1) => {

    return n1 * n2;
}

console.log(product(2));
console.log(product(2, 2));