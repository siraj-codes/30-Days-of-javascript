// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console. 

let n = 5;

switch (n) {
    case 1: console.log('\nMonday\n');
    
    break;
    case 2: console.log('\nTuesday\n');
    
        break;
    case 3: console.log('\nWednesday\n');
        
    break;
    case 4: console.log('\nThursday\n');
    
    break;
    case 5: console.log('\nFriday\n');
    
    break;
    case 6: console.log('\nSaturday\n');
    
    break;
    case 7: console.log('\nSunday\n');
    
    break;
    
    
    default: console.log('\nInvalid Number Entered!\n');
    break;
}


// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.


let score = 80;
let grade = '';

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else if (score >= 50) {
    grade = 'E';
} else {
    grade = 'F';
}

console.log(grade); // Output: B
