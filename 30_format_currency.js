// toLocaleString() = returns a string with a langugae
//                    sensitive representation of this number
// 
// number.toLocaleString(locale, {options});
// 
// 'locale' = specify that language (undefined = default set in browser )
// 'options' = object with formatting options  
// 
// 

let percent = 1;
let number = 123456.789;
let unit = 100;

// number = number.toLocaleString("en-US"); //US English
// number = number.toLocaleString("hi-IN"); //Hindi
// number = number.toLocaleString("de-DE"); //standard German

// number = number.toLocaleString("en-US", {style: "currency", currency: "USD"}); //US English
number = number.toLocaleString("id-ID", {style: "currency", currency: "IDR"}); 
percent = percent.toLocaleString(undefined, {style: "percent"}); 
unit = unit.toLocaleString(undefined, {style: "unit", unit: "celsius"}); 

console.log(number);
console.log(percent);
console.log(unit);