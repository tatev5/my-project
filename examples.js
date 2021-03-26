//Print all even numbers between 1-79. *
//(Տպիր 1-79 միջակայքում բոլոր զույգ թվերը:)
even = []; 
odd = []; 
 
for (var i=1; i<79; i++){ 
	if (i % 2 ===0){ 
		even.push(i); 
	} 
	else{ 
		odd.push(i); 
	} 
} 
 
console.log(even)

//
for (i=0;i<5;i++) 
{
	for(j=0; j<=i; j++)
	{
	
	 document.write("*");  	
		
	}	
	document.write("<br>");
} 
document.write("<br>");

// Write a function, which can find and replace all letters "a" in the sentence with "*" (without using default functions). *
// (Գրիր մի ֆունկցիա, որը կգտնի և կփոխարինի նախադասության մեջ եղած բոլոր "a" տառերը "*"-ով 
// (առանց հիմնական մեթոդների օգտագործման). -------- 
// Օրինակ՝ «The four major categories of B2B product purchasers are: 
// - The four m*jor c*tegories of B2B product purch*sers *re:»

let urlEncode = function(text) {
    text = text.trim();
    let newstring = '';
    for (const char of text) {
      newstring += char === 'a'? '*' : char;
    }
    return newstring;
  };
  
  console.log(urlEncode("The four major categories of B2B product purchasers are"));

//   Write a function, which receives a string, finds numbers in the string and returns their sum. *
// (Գրիր մի ֆունկցիա, որն ստանում է string, գտնում է թվերը և վերադարձնում դրանց գումարը:) / For example “FwrtY45KHL120mn10P” output should be 175.
function numberAdd(str){
	let strArr = str.split(""), strTemp=0;
	for(i=0;i<strArr.length;i++){
		if(!isNaN(strArr[i])){
			strTemp+=parseInt(strArr[i]);
		}
	}
	return strTemp;
}


console.log(numberAdd("foo5bar6cat1"));