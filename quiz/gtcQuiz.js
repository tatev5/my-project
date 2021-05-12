// function getEven(array) {
//     if (!Array.isArray(array)) {
//         throw new Error('Parametr is not array')

//     }
//     for (let i in array) {
//         if (typeof array[i] !== 'number' || Number.isNaN(array[i])) {

//             throw new Error(JSON.stringify(array[i]) + ' is not number')

//         }

//     }
//     let arr = array.filter(num => num % 2 === 0)
//     return arr;


// }

//console.log(getEven([2, 3, 4, 6,'s', 7, 9, 10]));
// console.log(getEven([2, 3, 4, 6, 7, 9, 10]));
// console.log(getEven('atri'));

// console.log(getEven('str'));
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

let getEven;
try {

    getEven = (array) => {
        if (!Array.isArray(array)) {
            throw new Error('Parametr is not array')

        }
        for (let i in array) {
            if (typeof array[i] !== 'number' || Number.isNaN(array[i])) {

                throw new Error(JSON.stringify(array[i]) + ' is not number')

            }

        }
        let arr = array.filter(num => num % 2 === 0)
        return arr;


    }
    
    console.log(getEven([2, 3, 4, 6, 7, 9, 10]));
    console.log(getEven([2, 3, 4, 6, 's', 7, 9, 10]));
    console.log(getEven('atri'));

} catch (err) {
    console.log(err)
}finally{
    console.log('finally))')
}

console.log(getEven([2, 3, 4, 6, 7, 9, 10]));
console.log(getEven([2, 3, 4, 6, 's', 7, 9, 10]))



