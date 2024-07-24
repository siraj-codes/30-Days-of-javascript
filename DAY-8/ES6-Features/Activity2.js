// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let numbers = [12, 23, 45, 65, 11];
let [first, second] = numbers;
console.log(`First Value is ${first} , Second Value is ${second}`)
// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
    title: 'Diode&Properties',
    author: 'AsifKhan',
    year: '2022',
}

let { title, author } = book;
console.log(`Title is ${title} & Author is ${author}`)