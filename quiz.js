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


console.log(centuryFromYear(1999))