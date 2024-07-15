// Activity 2: Nested If-Else Statements


// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let n1 = 12;

let n2 = 35;

let n3 = 11;

if (n1 > n2 ) {

    if (n1 > n3) {

        console.log(`n1  is greatest..`);
        
    }
    
    else if (n2 > n1) {
        
        if (n2 > n3 ) {
            
            console.log(`n2  is greatest..`);
        }
        
    }
    
    else if (n3 > n1){
        
        if (n3 > n2) {
            
            console.log(`n3 is greatest..`);
        }
    }

}