// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
let max = function (first,second) {

    if (first>second) {

        console.log(`First Number is maximum`);
        
    }
    
    else {
        console.log(`Second Number is maximum`);
        
    }
}

console.log(max(23,35));


// Task 4: Write a function expression to concatenate two strings and return the result.

let fullName = function (firstName , lastName) {

    let fn = firstName+lastName;
    return fn;
}


console.log(fullName('Siraj','Ahmed'));