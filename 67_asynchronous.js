// synchronous code = in an ordered sequence. 
//                    step-by-step linear instructions
//                      (start now, finish now)
// 
// asynchronous code = out of sequence.
//                      ex. access a database
//                      fetch a file
//                      tasks that take time
//                      (start now, finish sometime later)
// 

console.log("start");
setTimeout(() => console.log("this step is asynchronous"), 5000)
console.log("end");
