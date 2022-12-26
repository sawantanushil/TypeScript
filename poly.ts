class Employee {
    public FirstName: string;
    public LastName: string;
    public Designation: string;

    public print():void {
        console.log("Employee Details");
    }
}
class Manager extends Employee {
    constructor(FirstName:string,LastName:string,Designation:string){
        super();
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.Designation=Designation;
    }
    public print(): void { 
        super.print();
          console.log(`${this.FirstName} ${this.LastName} ${this.Designation}`);

        }

}  
class Lead extends Employee {
    constructor(FirstName:string,LastName:string,Designation:string){
        super();
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.Designation=Designation;
    }
    public print(): void { 
        super.print();
          console.log(`${this.FirstName} ${this.LastName} ${this.Designation}`);

        }

}  
class Devloper extends Employee {
    constructor(FirstName:string,LastName:string,Designation:string){
        super();
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.Designation=Designation;
    }
   //overriding parent calss
    public print(): void { 
        super.print();
          console.log(`${this.FirstName} ${this.LastName} ${this.Designation}`);

        }
}

let employee:Employee[]=new Array(new Manager("Jack","Sparow","Captain"),new Lead("Anushil","Sawant","Leader"),new Devloper("Aarti","Sawant","Devloper"));

for(var emp of employee){
emp.print();
}