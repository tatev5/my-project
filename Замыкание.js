// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi()

// function makeWorker() {
//     let myname = "Pete";
  
//     return function() {
//       console.log(myname);
//     };
//   }
  
//   let myname = "John";
  
//   // create a function
//   let work = makeWorker();
  
//   // call it
//   work();


  function inBetween(a,b) {
      return function (x) {
          return x>=a && x<=b
      }
      
  }
  let array= [1, 2, 3, 4, 5, 6, 7];
console.log( array.filter(inBetween(1, 4)) )