// Activity 3: Removing Elements
// • Task 5: Select an HTML element and remove it from the DOM.
let Remove = document.querySelector(".rm");
Remove.remove();
// • Task 6: Remove the last child of a specific HTML element.
let container = document.getElementById("container");
if (container && container.lastElementChild) {
    container.removeChild(container.lastElementChild);
} else {
    console.log("Container or last child not found");
}