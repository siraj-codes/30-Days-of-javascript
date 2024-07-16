// Activity 3: Do... While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let i = 1;
do {

    console.log(i);
    i++;

} while (i<6);
// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let number = 5;
i = number;
let fac = 1;

do {

    if (number < 0) {

        console.log('Negeative Num Occured');
        break;

    }

    else {

        fac *= i;
        i--;
    }

}while(i>0)

if (number >=0) {

    console.log(`Factorial is : ${fac}`)    
}