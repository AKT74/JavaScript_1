// super = refers to the parent class.
//          commonly used to invoke constructor of a parent class

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{

    constructor(name, age, runspeed){
        super(name, age);
        this.runspeed = runspeed;
    }
}

class Fish extends Animal{
    
    constructor(name, age, swimspeed){
        super(name, age);
        this.swimspeed = swimspeed;
    }
}

class Hawk extends Animal{
    
    constructor(name, age, flyspeed){
        super(name, age);
        this.flyspeed = flyspeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimspeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flyspeed);

