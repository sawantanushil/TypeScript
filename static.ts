class Check{
    static bankname:string;
    accno:number;
    display(){
        Check.bankname="BOB";
        console.log(Check.bankname);
        
    }
}
var objcheck=new Check();
objcheck.display(); 

class Employee{
    firstName:string;
    lastName:string;
    Designation:string;
    print(){
        console.log("This is Employee Details");
        
    }
}
class Manager extends Employee{
    constructor(firstName:string,lastName:string,Designation){
        super();
        this.firstName=firstName;
        this.lastName=lastName;
        this.Designation=Designation
    }
    public print(): void {
        super.print();
    
    console.log(`${this.firstName} ${this.lastName} ${this.Designation}`);
    }

}


