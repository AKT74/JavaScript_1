// type conversion = change the datatype of a value to another
//                      (strings, number, booleans)

/* let age = window.prompt("how old are you ?");   //window.prompt(user input) nerimanya dalam bentuk string

console.log(typeof age);
age = Number(age);    //ngubah user input yang nerima string menjadi dalam bentuk angka (Number)
console.log(typeof age);
age += 1;

console.log(" happy birthday! you are ", age, " years old");
*/

let x;
let y;
let z;

x = Number("3.14");  //trafrom string of number into a Number, if it letter it will say "NaN"(not a number)
y = String(3.14);
z = Boolean(""); //if this empty it will say FALSE, if filled than its TRUE

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);