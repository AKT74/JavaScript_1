// object = a group of properties and method
//          properties = what an object has 
//          method = what an object can do
//          use. to access properties/methods

const car = {
    model : "Mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log("you drive the car");
    },
    brake : function(){
        console.log("you step on the brakes");
    }

}

console.log(car.model);
car.brake();
