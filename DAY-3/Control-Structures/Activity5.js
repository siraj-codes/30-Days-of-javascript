// Activity 5: Combining Conditions




// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2004;

let isLeap = '';

if (year%4 === 0 && year%400 === 0) {

    if (year%100 === 0) {

        isLeap = 'Yes';

    }

}

else if (year%4 === 0 && year%400 !== 0) {

    if (year%100 !== 0) {

        isLeap = 'Yes';

    }

}

else {

    isLeap = 'No';
}

if (isLeap === 'Yes') {

    console.log(`${isLeap} , ${year} is a leap year`);
}

else {
    
    console.log(`${isLeap} , ${year} is not a leap year`);
}

