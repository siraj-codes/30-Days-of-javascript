// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

let g = () => {
    console.log('hello');
}

let rf = (fn, n) => {

    for (let i = 1; i <= n; i++) {

        fn();

    }
}

console.log(rf(g, 5));




// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

let f1 = val => val * val;

let f2 = doubled => doubled + 5;

let multiFun = (f1, f2, val) => f2(f1(val));
let multiFun2 = (f1, f2, val) => f1(f2(val));

console.log(multiFun(f1, f2, 2));
console.log(multiFun2(f1, f2, 2));



