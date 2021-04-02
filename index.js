let members = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
let arr=[5,10,15,20,25,30,35,40,6,12,18,24,31,37,3,11,19,27,34,2,13,22,32,1,14,26,38,9,17,8,33,29,16,39,28,23]

// let index=members.length

// while (index--) {
//   (index + 1) % 5 === 0 && members.splice(index, 1);
// }
// console.log(members)

// members.map(function(item, i, arr) {
//   if(i===5){
//     console.log('yes')
//     members.pop()
//     console.log(members)
//   }
// })

arr.sort(function(a, b) { return a - b; });

console.log(arr)



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