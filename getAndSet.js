const person={
    name:'John',
    surname:'Smith',
    get lastnameChange(){
        return this.lastName
    },
    set lastnameChange(lastName){
        this.lastName='Alex Smith'
    }
 }
 person.lastnameChange='',
console.log(person.lastnameChange)


function User(name,surname,age){
    this.name=name;
    this.surname=surname;
    this.age=age
}
let Lily=new User("Lily","Smith",20)
console.log('Name:' +Lily.name + ' Surname:' + Lily.surname + ' age:'+Lily.age )