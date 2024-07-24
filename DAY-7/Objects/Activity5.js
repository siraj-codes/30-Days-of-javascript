// Activity 5: Object Iteration

// Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.
let book = {

    title: 'Diode&Properties',
    author: 'AsifKhan',
    year: '2022',
}


console.log(typeof book)

for (const key in book) {
    if (Object.hasOwnProperty.call(book, key)) {

        console.log(`${key} : ${book[key]}`)

    }
}



// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log(`${Object.keys(book)}`)
console.log(`${Object.values(book)}`)