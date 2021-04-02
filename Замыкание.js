let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi()

function makeWorker() {
    let myname = "Pete";
  
    return function() {
      console.log(myname);
    };
  }
  
  let myname = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work();