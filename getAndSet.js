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