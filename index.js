let str = "ASDFGHJ";

console.log( str.split('') );


let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 3],
    ['apple', 5]
  ]);
  
  
  console.log(prices.apple);

  let basket=new Map()
  basket.set('banana', 1);
  basket.set('orange', 3)
  basket.set('apple', 5)

  let map=Object.fromEntries(basket.entries())
  console.log(map.orange)