let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");


alert( fruits.length ); // ? =>4

let styles=["Джаз", "Блюз"];
styles.push('Рок-н-ролл')
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
styles.shift()
styles.unshift('Рэп','Регги')