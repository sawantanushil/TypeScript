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