// let number=prompt('Please write a number in the range of 8-20')
//  console.log(number>8 && number<20) //8-20 կտպի true, 8-ից փոքր և 20-ից մեծ կտպի false

// console.log(undefined || '0' || null || true && "0" && " " && 5 || 9)//==>
//ամենա սկզբից կաշխատեն &&-երը արդյունքում կստանանք  5,
//հետո նոր կսկսի աշխատել || -երը  և երբ հերթով ստուգելով գա  կտպի նորից  5-ը,
// քանի որ 5 կամ 9-ից առաջի ճիշտ  պատասխանը 5 է 

//  console.log("" + 1 + 0) //10 դարձրել է string և կոնկատենացիա է կատարել
// console.log(true + false)  // 1 => քանի որ  true = 1 իսկ false=0 արդյունքում կստանանք true այսինքն 1 
// console.log("2" * "3") // 6, քանի որ 2-ի type նույն է և կատարել է բազմապատկում
// console.log("$" + 4 + 5)// "$45", քանի որ  առաջինի  type-ը string  է բոլորինը դարձրել է string և կատարել է կոնկատենացիա
// console.log("4px" - 2) //NaN, քանի որ տեքստից  հանել են  թիվ NaN է
// console.log(null + 1)//1,  null-ը դատարկ բազմություն կնշանակե + 1 կվերադարձն է նորից 1
// console.log(undefined + 1) //NaN, որովհետև undefined-ը չհայտարարված  արժեք է և մենք չենք կարող նրա հետ գործողություններ անել
// console.log("apple" > "pineapple") //false, որորվհետև  a-ի կոդը ASCII աղյուսակով = է 97-ի իսկ  p=112, հետևաբար a<p   
// console.log("2" > "12") //true,   2-ի կոդը ASCII աղյուսակով = է  50-ի իսկ 1-ի կոդը 49-ի 


// let name=prompt("your name");
// let age=prompt('your  age');
// let city=prompt("your city");

// console.log('My name is  ' +name+ ", i am  "+ age+" old. I am from " + city)



// let a=Number(prompt('first number'))
// let b=Number(prompt('second number'))
// let c=Number(prompt('third number'))
// let d=Number(prompt('fourth number'))

// if(a>b && a>c && a>d){
//   console.log('fisrt number is a ' + a)
// }else if(b>c && b>d && b>a ){
//   console.log('second number is a ' + b)
// }else if(c>d && c>b && c>a ){
//   console.log('third number is a  ' + c)
// }else{
//   console.log("fourth number is a " + d)
// }

// // կարճ տարբերակ
// let result=a>b && a>c && a>d ? a : b >c && b>d  ? b : c>d ? c : d;
//  console.log(result)

// const myname=function(params){
//    return params;
// }
// console.log(myname('John'))


function name(param){
  if(param===''){
   return console.log('error')
  }else{
     return console.log(param)
  }
 }
 name('Nick')
 
 // let users={
 //    userName:'Alan',
 //    userSurname:'Walker',
 //    age:20,
 //    gender:'male'
 // }
 // console.log(users)  // {userName: "Alan", userSurname: "Walker", age: 20, gender: "male"}
 // console.log(users.userName +' ' + users.userSurname)// Alan Walker 
 
 
 // for(let i=1; i<=100; i++){
   
 //    if(i % 4 === 0 || i % 3 === 0){
 //      continue
 //    }
 //     else if(i % 5  === 0 && i % 7 === 0){
 //       break
 //     }
 //    console.log(i)
 //  }
 
 // կտպի=>
 //   =>1
    //2
    // 5
    // 7
    // 10
    // 11
    // 13
    // 14
    // 17
    // 19
    // 22
    // 23
    // 25
    // 26
    // 29
    // 31
    // 34
 
 let date =new Date()
 
 console.log('Time now->  '+date.getHours()+':' + date.getMinutes()+':'+date.getSeconds()) // time now 
 
 
 // let i =0;
 
 // while(i <= 10)
 // {
 //     console.log(i);//print 1-10
 //     i++;
 // }
 
 // let week=+prompt(" ")
 
 // switch(week){
 //   case 0:
 //     console.log("Sunday")
 //     break
 //   case 1:
 //     console.log("Monday")
 //     break
 //   case 2:
 //     console.log("Thuesdy")
 //     break
 //   case 3:
 //     console.log("Wednesday")
 //     break
 //   case 4:
 //     console.log("Thursday") 
 //     break
 //   case 5:
 //     console.log("Friday")
 //     break
 //   case 6:
 //     console.log("Saturday")
 //     break
 //   default:
 //     console.log('Error! 404 Not Found')
 // }
 
 // let arr = [5, 10, 15, 20, 25];
 
 // for (let i = 0; i < arr.length; i++){
 //     console.log(arr[i]);
 // }
 
 
 
 
 
 // lesson_3=>
 
 //1=>
 // var  a=prompt('Type your text' );
 // var b=0;
 // for (var i= 0; i <a.length ;  i++) {
 // 	  if (a[i ]== 'ա' || a[i ]=== 'Ա'){
 // 	  	b++
 // 	  }
 // }
 // console.log(b)
 
 //2=>
 
 var number=Number(prompt("Write a random number"))
 var count=0
 
 if (number===1) {
   console.log("1 is not a prime number")
 } else if(number>1){
   for(var i=2; i<number; i++ ){
     if(number%i===0){
     count=1
     
   }
 }
   if(count==0){
     console.log('is a prime number')
   }else{
     console.log('is not a prime number')
   }
 
 }
 
 
 //3=>
 
 function module(a,b){
    var x= a - b
    if(x<0){
       return -x 
    }else{
   return  x
    }
  }
  console.log(module(-6,-4))
 
 
  const box={
    big:250,
    middle:400,
    small:350,
    sumFunction:function(){
      return this.big +this.middle+this.small
    }
  }
  console.log(box.sumFunction())
 
 
 //4=>
  const person={
    name:prompt('your name'),
    surname:prompt('your surname'),
    age:+prompt('your age'),
    gender:prompt('your gender-> female or male'),
    myfunc:function(){
      if(this.gender==='female'){
        if(  this.age>=63){
          console.log('She is grandmother')
        }else if(this.age >17 && this.age<63){
          console.log('She is a worker')
        }else if(this.age>0 && this.age<17){
           console.log('She is a little girl')
        }
        }
     else if(this.gender==='male'){
         if( this.age>65){
          console.log('He is a grandfather')
        }else if(this.age >17 && this.age<65){
          console.log('She is a worker')
        }else if(this.age>0 && this.age<17){
           console.log('She is a little boy')
        }
     }
      else{
        console.log('Wrong import')
      }
    }
  }
  person.myfunc()



  //5=>
  function foo() {
 var a = 1;
 function bar() {
    var b = 2;
 function baz() {
    var c = 3;
    console.log( a, b, c ); // 1 2 3
 }
 baz();
 console.log( a, b ); // 1 2
 }
 bar();
 console.log( a ); // 1
}
foo();



//lesson4

//  const person={
//    name:"John",
//    lastname:"Smith",
//    get lastnameChange(){
//      return this.lastname
//    },
//    set lastnameChange(lastname){
//      this.lastname='asdf'
//    }
//  }
 
//  person.lastnameChange='',
//console.log(person.lastnameChange)
