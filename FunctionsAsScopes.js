let a = 2;
(function foo(){ 
 let a = 3;
 console.log( a ); 
})(); 

console.log( a ); 


var x = 2;
(function IIFE( global ){
 var x = 3;
 console.log( x ); 
 console.log( global.x ); 
})( window );
console.log( x ); 