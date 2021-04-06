function sum(val) {
    let currentSum=val
    function func(arg) {
        currentSum+=arg
        return func
    }
    func.toString=function () {
        return currentSum
    }
    return func
}
console.log( sum(1)(2) ); 
console.log( sum(5)(-1)(2) ); 
console.log( sum(6)(-1)(-2)(-3) ); 
console.log( sum(0)(1)(2)(3)(4)(5) ); 