// (fruit)
// let element = document.body;
// let child = element.firstElementChild;
// child.style.backgroundColor = "lightgreen";

// (body)
// let element = document.querySelector("#vegetable");
// let parent = element.parentElement;
// parent.style.backgroundColor = "lightgreen";

// (dessert)
// let element = document.querySelector("#vegetable");
// let sibling = element.nextElementSibling;
// sibling.style.backgroundColor = "lightgreen";

// (fruit)
// let element = document.querySelector("#vegetable");
// let sibling = element.previousElementSibling;
// sibling.style.backgroundColor = "lightgreen";

// (apple)
// let element = document.querySelector("#fruit");
// let child = element.firstElementChild;
// child.style.backgroundColor = "lightgreen";

// (banana)
// let element = document.querySelector("#fruit");
// let child = element.lastElementChild;
// child.style.backgroundColor = "lightgreen";

// (orange)
// let element = document.querySelector("#fruit");
// let child = element.children[1];
// child.style.backgroundColor = "lightgreen";

// (vegetable)
let element = document.querySelector("#vegetable");
let children = Array.from(element.children);
children.forEach(child => child.style.backgroundColor = "lightgreen");

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)
