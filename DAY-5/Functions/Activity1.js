// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function evenOrOdd (n) {

    if (n%2!=0) {

        console.log(`${n} is a odd number`);
        
    }
    
    else {
        
        console.log(`${n} is a even number`);
    }

}

evenOrOdd(3);

// • Task 2: Write a function to calculate the square of a number and return the result.


function squared (n) {

    return n*n;
}

let ans = squared(2);

console.log(ans);