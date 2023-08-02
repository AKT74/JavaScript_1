// 2D array = an array of arrays

let fruits = ["banana", "apple", "orange", "mango"];
let meat = ['chicken', 'beef', 'fish']
let vegetable = ['carrot', 'onion', 'tomato']

let grocery = [fruits, vegetable, meat];

grocery[0][2] = "lemon";  //change the element index 2 from array index 0

for(let list of grocery){
    for(let food of list){
    console.log(food);

    }    
}
