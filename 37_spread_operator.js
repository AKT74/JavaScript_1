// spread operator = allows an iterable such as an 
// ...                  array or string to be expanded
//                      in places where zero or more
//                      arguments are expected
//                      (unpacks the elements)

// let username = "Aka Aja"
// let number = [1, 20, 3, 4, 5,6 ,7, 8, 9];
// let maximum = Math.max(...number);

// console.log(maximum);
// console.log(...username);


let class1 = ["aka", "aja", "sih"];
let class2 = ["naya", "jeh", "gih"];

class1.push(...class2);
console.log(...class1);