// Activity 4: The this Keyword

// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book = {

    title: 'Diode&Properties',
    author: 'AsifKhan',
    year: '2022',
    info: function () {
        return `Book Title is : ${this.title}  & Book Year of Publishing is ${this.year} `
    },
    updateYear: function (y) {
        book['year'] = y;
    }





}

console.log(book.info());