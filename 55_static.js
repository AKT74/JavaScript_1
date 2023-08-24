// static = belongs to the class, not the objects 
//          properties: useful for caches, fixed-configuration
//          method: useful for utility functions


class car{

    static numberofcars = 0;
    
    constructor(model){
        this.model = model;
        car.numberofcars += 1;
    }

    static startrace(){
        console.log("3....2....1...GO!");
    }

}

const car1 = new car("mustang");
const car2 = new car("corvette");
const car3 = new car("BMW");
const car4 = new car("ferrari");
const car5 = new car("lambo");

// console.log(car.numberofcars);

car.startrace();
