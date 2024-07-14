// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let age = 22;
let gender = 'male';

if (age > 17 && gender === 'male'){
    console.log('\nYou can Join Army!!!\n')
}
else {
    console.log('\nEither your age is less then 18 or you are not a male\n')
}
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
let grade = 'A+';
let com = 'strong';
if (grade === 'A+' || com === 'strong') {
    console.log('\nCong Your Are Selected\n');

}
else {
    console.log('\nBetter Luck Next Time\n')
}
// Task 13: Write a program that uses the! operator to negate a condition and log the result to the console.

if (!age === 22) {
    console.log('\nyou are under 18!\n')
}
else {
    console.log('\nyou are 18 or over\n')

}