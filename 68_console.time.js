// console.time() = starts a timer you can use to 
//                  track how long an operation takes
//                  give each timer a unique name.

// start
console.time("response time");

// alert("click the ok button")
setTimeout(()=> console.log("hello"), 3000)

// end
console.timeEnd("response time");
