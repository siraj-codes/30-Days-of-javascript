// Activity 5: Enhanced Object Literals


// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let firstName = "John";
let lastName = "Doe";
let propName = "age";
let value = 25;

let person = {

    firstName,
    lastName,
    [propName]: value,

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person.fullName())
console.log(person.age);

// Task 9: Create an object with computed property names based on variables and log the object to the console.



let prop1 = "name";
let prop2 = "age";
let prop3 = "country";

let value1 = "Alice";
let value2 = 28;
let value3 = "Wonderland";

person = {
    [prop1]: value1,
    [prop2]: value2,
    [prop3]: value3
};

console.log(person);

