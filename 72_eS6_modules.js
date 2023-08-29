// the idea behind a module is that it's file of reusable code
// we can import sections of pre-written code to use whenever we want
// great for any general utility values and functions
// helps to make your code more reusable and maintanable
// think of modules as seperate chapters of a book

// import only PI, getcircumference, getarea
/*
import {PI, getcircumference, getarea} from "./72_module_math_util.js"

console.log(PI);

let circumference = getcircumference(10);
console.log(circumference);

let area = getarea(10);
console.log(area);
*/

// import all with *
import * as mathutil from "./72_module_math_util.js";

console.log(mathutil.PI);

let circumference = mathutil.getcircumference(10);
console.log(circumference);

let area = mathutil.getarea(10);
console.log(area);