class Student{
    constructor(sid, sname){
        this.id = sid;
        this.name = sname;
        this.school = 'habubnessa school'
    }

}
const student1 = new Student(12, 'shakib');
const student2 = new Student(13, 'imran');
console.log(student1, student2);