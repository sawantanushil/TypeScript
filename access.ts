class Student{
    private userName:string;
    get name():string{
       return this.userName;
    }
    set name(name:string){
        this.userName=name;
    }
    dispaly()
    {
        console.log(this.userName);
        
    }

}
var objstudent=new Student();
objstudent.name="Codemind";
console.log(objstudent.name);

