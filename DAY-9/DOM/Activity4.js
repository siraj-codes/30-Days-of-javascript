// Activity 4: Modifying Attributes and Classes

// • Task 7: Select an HTML element and change one of its attributes (e.g., href of a link).
let link = document.getElementById("myLink");
if (link) {
    console.log("Old href:", link.href);
    link.setAttribute("href", "https://youtube.com");
    console.log("New href:", link.href);
} else {
    console.log("Element with ID 'myLink' not found");
}

// • Task 8: Add and remove a CSS class to/from an HTML element.
let div = document.getElementById("myDiv");
if (div) {
    console.log("Before adding class:", div.className);
    div.classList.add("highlight");
    console.log("After adding class:", div.className);


} else {
    console.log("Element with ID 'myDiv' not found");
}