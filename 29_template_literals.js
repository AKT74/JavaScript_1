// template literals = delimited with (`)
//                      instead of double or single quotes
//                      allows embedded variable and expression


let username = "Aka";
let item = 3;
let total = 75;

// console.log("hello", username);
// console.log("you have", item, " items in your cart");
// console.log("your total is", total);

// console.log(`hello ${username}`);
// console.log(`you have ${item} items in your cart`);
// console.log(`your total is $${total}`);

let text = 
`hello ${username}<br>
you have ${item} items in your cart<br>
your total is $${total}<br>`;

// console.log(text);
document.getElementById("label").innerHTML = text;