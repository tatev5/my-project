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