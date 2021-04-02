
//  let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

//   function sumSalaries(salaries) {
//     let count=0

//     for(let salary of Object.values(salaries)  ){
//         count+=salary
//     }
//     return count
//   }
 
  
//   console.log( sumSalaries(salaries) )


//   let user = {
//     name: 'John',
//     surname:'Math',
//     age: 30
//   };
  
//   function count(obj) {
//      return Object.keys(obj).length 
//   }
//   console.log( count(user) )

function foo(obj) {
 with (obj) {
 a = 2;
 }
}
var o1 = {
 a: 3
};
var o2 = {
 b: 3
};
foo( o1 );
console.log( o1.a ); // 2
foo( o2 );
console.log( o2.a ); // undefined
console.log( a ); // 2—Oops, leaked global!