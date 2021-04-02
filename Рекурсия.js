// function sumTo(n){
//     if(n===1){
//         return    1
//     }else{
//         return n+sumTo(n-1)
//     }
// }
// console.log(( sumTo(100) ))

function fib(n){
    if(n===1){
        return [0,1]
    }else{

        let s = fib(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
        
      }
}
console.log(fib(3)); // 2
console.log(fib(7)); // 1