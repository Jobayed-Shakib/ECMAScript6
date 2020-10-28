class Parent{
    constructor(){
        this.fatherName = 'khan'
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    fullName(){
        return this.name + ' '+ this.fatherName;
    }
}
const baby = new Child('amir');
const baby2 = new Child('salman');
console.log(baby.fullName(), baby2.fullName());
const baby = new Child('amir');