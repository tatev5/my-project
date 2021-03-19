let array=[2,4,5,4,21,65,3,88,24]
var randomValue = array[Math.floor(array.length * Math.random())];
console.log(randomValue)


let arr=[4,6,3,2,8,9,-2,-8,0,16,-29,45,-90]
function NumSort(a,b){
  return b-a
}
console.log(arr.sort(NumSort))