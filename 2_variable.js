// a variable is a container for storing data 
// a variable behaves as if it was the value that it contains

// two steps
// 1. declaration (var, let, const)
// 2. assignment (= assignment operator)

let firstname = "";
let age;
let student = true;     //boolean

firstname = "AKA"; //string

age = 19;   //number
age = age + 1;  //aritmetic expression

console.log("hello", firstname);
console.log("you are", age, "old");
console.log("enrolled", student);


document.getElementById("p1").innerHTML = "Hello " + firstname;
document.getElementById("p2").innerHTML = "You are " + age + " old";
document.getElementById("p3").innerHTML = "Enrolled: " + student ;