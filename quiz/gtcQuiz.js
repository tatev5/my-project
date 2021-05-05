// function getEven(array) {
//     if (!Array.isArray(array)) {
//         return 'parametr is not array';
//     }
//     for (let i in array) {
//         if (typeof array[i] !== 'number' || Number.isNaN(array[i])) {
//             return JSON.stringify(array[i]) + ' is not number';


//         }

//     }
//     let arr = array.filter(num => num % 2 === 0)
//     return arr;

// 1
// }

// console.log(getEven([2, 3, 4, 6, 7, 9, NaN, 10]));

//    const newarr=[];
// for(var i in array){
//     if(array[i]%2===0){
//           newarr.push(array[i]);

//      } 

// }

// let arr=[5,4,7,1,2,4,8]
// for(let i in arr){
//     if(arr[i]>5){
//         return 'false'
//     }
//     else{
//         return 'true'
//     }
// }

// function num(a1, n,d) {
//   if ( n== 1) {
//     return 1;
//   } else {
//   return 
//   }
// }

// console.log( progresia(2, 3) )




function sum(x) {
    let sum = 0
    for (let i = 1; i <= x; i++) {
        sum += i

    }
    return sum;
}

console.log(sum(10));
function foo (object1,string1){
    return object1[string1[0]][string1[2]][string1[4]];
     
}
console.log( foo ({a: {b:{d:'5555'}}},  'a.b.d'));