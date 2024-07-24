// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {

    libraryName: 'SindhLibrary',

    books: [

        {
            title: 'Diode&Properties',
            author: 'AsifKhan',
            year: '2022',
        },
        {
            title: 'OOP Principles',
            author: 'SherKhan',
            year: '2023',
        }, {
            title: 'SoundAndProperties',
            author: 'NimraAli',
            year: '2024',
        },
    ]

}

console.log(library);


// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library['libraryName'])

for (let index = 0; index < library['books'].length; index++) {

    console.log(library['books'][index].title)

}