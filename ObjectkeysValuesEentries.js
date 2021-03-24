
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