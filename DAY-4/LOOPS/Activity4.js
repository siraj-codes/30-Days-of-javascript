

// Task 7: Write a program to print a pattern using nested for loops:
// (ignore color)
// *
// **
// ***
// ****
// *****

for (let i = 1 ; i <= 5 ; i++) {

    let rp = '';

    for (let j = 1; j <=i ; j++) {
        rp+='*';
        
    }

    console.log(rp);

}