// Activity 1: Selecting and Manipulating Elements
// • Task 1: Select an HTML element by its ID and change its text content.
let heading = document.getElementById("head");
console.log(heading);
heading.textContent = "This is Changed";

// • Task 2: Select an HTML element by its class and change its background color.
let heading2 = document.querySelector(".dear");
if (heading2) {
    console.log(heading2);
    heading2.style.backgroundColor = "lightblue";
} else {
    console.log("Element with class 'dear' not found");
}
