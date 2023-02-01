let sn: string | number;
sn = "Codemind";
sn = 1235;

function formatCommandLine(input:string |string[]) {
    let line = "";
    if (typeof input === "string") {
        line = input.trim();
    } else {
        line = input.map((x) => x.trim()).join("");
    }
    return line;
}
console.log(formatCommandLine(" Hello "));
console.log(formatCommandLine([" Hello", " Anushil"]));


class Person1{
    public name:string;
    public age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}
const obj1=new Person1("Anushil",31);
console.log(obj1.name,obj1.age);

class Person2{
   //parametrised costrocutor
   constructor(public fname:string,public age:number){

   }

}
const obj2=new Person2("jack",31);
console.log(obj2.fname,obj2.age);
