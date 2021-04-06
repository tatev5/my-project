const get = function (obj, path, def) {
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

let getPath = get(obj, ['a', '0', 'b', 'c']);


console.log(getPath);