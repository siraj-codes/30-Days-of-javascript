// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
let arr = [45, 76, 12, 33, 22, 11];

for (let i = 0; i < arr.length; i++) {

    console.log(`At ${i} index is ${arr[i]}`);

}
console.log('\n');

for (const val of arr) {
    console.log(val);

}

for (const index in arr) {
    console.log(`At ${index} index is ${arr[index]}`);
}
// Task 11: Use the forEach method to iterate over the array and log each element to the console.

console.log('\n');

arr.forEach(val => console.log(val));