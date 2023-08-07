// array.forEach() = executes a provided callback function 
//                      once for each array element

let student = ["sponge", 'patrick', "squid"];
student.forEach(capital);
student.forEach(print);


function capital(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element)
}

