//1
function add(param1, param2) {
    
    if((-1000 <= param1 || param1 >= 1000) && (-1000 <= param2 || param2 >= 1000)) {
       var sum=param1+param2;
    }return sum
}
var sum=add(1,2)
console.log(sum)

//2
function centuryFromYear(year) {
    return Math.floor(year/100) + ((year%100) ? 1 : 0)
}


console.log(centuryFromYear(2000))

//4
function adjacentElementsProduct(inputArray) {
    let arr = inputArray;
     let x=0;
     let y=0;
     let p=-Infinity;
     for(let i=0;i<inputArray.length;i++){
       x=arr[i];
       y=arr[i+1];
       if(x*y>p){
        p=x*y;
       };
     };
    return p;
   };
   adjacentElementsProduct([3, 6, -2, -5, 7, 3])
 
//5
function shapeArea(n) {
    return n*n + (n-1)*(n-1);
}