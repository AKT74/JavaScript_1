// ternary opertaor = shortcut for an 'if/else statement'
//                      takes 3 operands
//  
//                      1. a condition with ?
//                      2. expression if True :
//                      3. expression if False
// 
// condition ? exprIfTrue : exprIfFalse

// let adult = checkage(18);
// console.log(adult);

// function checkage(age){

//     if(age >= 18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// function checkage(age){
//     // return age >= 18 ? true : false;
//     return age >= 18 ? "you are adult" : "you are a child";

// }

checkwin(false);

function checkwin(win){
    win ? console.log("you win") : console.log("you lose")
}
