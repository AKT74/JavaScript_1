// slice() = extract a section of a string
//          and return it as a new String,
//          without modifying the original string

let fullname = "Aka Aja"
let firstname;
let lastname;

// firstname = fullname.slice(0, 3);
// lastname = fullname.slice(4);

firstname = fullname.slice(0, fullname.indexOf(" ") + 1);
lastname = fullname.slice(fullname.indexOf(" ") + 1);


console.log(firstname);
console.log(lastname);