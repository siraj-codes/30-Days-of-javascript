// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
let book = {

    title: 'Diode&Properties',
    author: 'AsifKhan',
    year: '2022',
    info: function () {
        return `Book Title is : ${book['title']} & Book Author is : ${book['author']}`
    }
}

console.log(book.info());


// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book = {

    title: 'Diode&Properties',
    author: 'AsifKhan',
    year: '2022',
    info: function () {
        return `Book Title is : ${book['title']} & Book Author is : ${book['author']} & Book Year of Publishing is ${book['year']} `
    },
    updateYear: function (y) {
        book['year'] = y;
    }



}

console.log(book.info());
book.updateYear(2023);
console.log(book.info());


