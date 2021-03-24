
 let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function sumSalaries(salaries) {
    let count=0

    for(let salary of Object.values(salaries)  ){
        count+=salary
    }
    return count
  }
 
  
  console.log( sumSalaries(salaries) )


  let user = {
    name: 'John',
    surname:'Math',
    age: 30
  };
  
  function count(obj) {
     return Object.keys(obj).length 
  }
  console.log( count(user) )