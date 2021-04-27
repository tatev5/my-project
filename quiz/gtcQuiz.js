function getEven(array) {
    if (!Array.isArray(array)) {
        return 'parametr is not array';
    }
    for (let i in array) {
        if (typeof array[i] !== 'number' || Number.isNaN(array[i])) {
            return JSON.stringify(array[i]) + ' is not number';


        }

    }
    let arr = array.filter(num => num % 2 === 0)
    return arr;

1
}

console.log(getEven([2, 3, 4, 6, 7, 9, NaN, 10]));

//    const newarr=[];
// for(var i in array){
//     if(array[i]%2===0){
//           newarr.push(array[i]);

//      } 

// }