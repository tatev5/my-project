//   let map=Object.fromEntries(basket.entries())
//   console.log(map.orange)

function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { 
      day = 7;
    }
  
    return day;
  }
  let date = new Date(2021, 2, 21);  //march  21 sunday 
  console.log( getLocalDay(date) )