// arrow function = compact alternative to a traditional function expression
//      =>

const greeting = (username, age) => console.log(`hello im ${username} im ${age}`);
const hello = () => console.log(`hello`);
greeting("bro", 18);
hello();


// const percent = function(x, y){
//     return x / y * 100;
// }
// console.log(`${percent(80, 150)}%`)
// 
// become this on below

const percent = (x, y) =>  x / y * 100;
console.log(`${percent(45, 50)}%`)

// 

//from this
// 
// let grades = [100, 50, 90, 60, 80, 70];
// grades.sort(descending);
// grades.forEach(print);
// function descending(x, y){
//     return y - x;
// }
// function print(element){
//     console.log(element);
// }
// 
// to this

// let grades = [100, 50, 90, 60, 80, 70];
// grades.sort(function(x, y){
//     return y - x;
// });
// grades.forEach(function(element){
//     console.log(element);
// });

// to this

let grades = [100, 50, 90, 60, 80, 70];
grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));





