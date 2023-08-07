// array.filter() = creates a new array with all elements
//                  that pass the test provided by a function

let ages = [18, 16, 21, 17, 19, 90];
let adult =  ages.filter(adults);
let student =  ages.filter(students);

adult.forEach(print);
student.forEach(print);

function adults(element){
    return element >= 18;
}
function students(element){
    return element < 18;
}

function print(element){
    console.log(element)

}
