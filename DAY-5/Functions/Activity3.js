// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
let sum = (n1,n2) => n1+n2;
console.log(sum(23,27));
// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let contains = (str,c) => {

    let s = str+'';
    let character = c+'';
    let b = false;


    for (let i=0 ; i<s.length ; i++) {

        if (s[i]===character) {

            b = true;
            break;

        }

        

    }

    return b;
    

}

console.log(contains('Siraj' , 'S'));