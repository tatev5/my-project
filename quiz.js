const take = function (obj, path, def) {
	let current = obj;
	for (let i = 0; i < path.length; i++) {
		if (!current[path[i]]){
            return def;
        }   
		current = current[path[i]];
	}
	return current;

};
const obj = {
	'a': [
		{
			'b': {
				'c': 3
			}
		} 
	]
};

let getPath = take(obj, ['a', '0', 'b', 'c']);


console.log(getPath);

function add(param1, param2) {
    
    if((-1000 <= param1 || param1 >= 1000) && (-1000 <= param2 || param2 >= 1000)) {
       var sum=param1+param2;
    }return sum
}
var sum=add(2,4)
console.log(sum)

function centuryFromYear(year) {
    return Math.floor(year/100) + ((year%100) ? 1 : 0)
}


console.log(centuryFromYear(2000))


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

   class Animal {
	constructor(name) {
	  this.speed = 0;
	  this.name = name;
	}
	run(speed) {
	  this.speed = speed;
	  console.log(`${this.name} бежит со скоростью ${this.speed}.`);
	}
	stop() {
	  this.speed = 0;
	  console.log(`${this.name} стоит.`);
	}
  }
  
 
  class Rabbit extends Animal {
	hide() {
	  console.log(`${this.name} прячется!`);
	}
  }
  
  let rabbit = new Rabbit("Белый кролик");
  	
  rabbit.run(5); 
  rabbit.hide();
  rabbit.run(2)
  rabbit.stop(2)



  try{

	function inBetween(a,b) {
		return function (x) {
			return x>=a && x<=b
		}
		
	}
	let array= [0,1, 2, 3, 4, 5, 6, 7,8,9,10];
  console.log( array.filter(inBetween(1, 7)) )
  }catch(err){
	console.log(err);
  }


  class FormatError extends SyntaxError {
	constructor(message) {
	  super(message);
	  this.name = "FormatError";
	}
  }
  
  let err = new FormatError("ошибка форматирования");
  
  console.log( err.message ); 
  console.log( err.name ); 
  console.log( err.stack );  
  
  console.log( err instanceof SyntaxError ); 