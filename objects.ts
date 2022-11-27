var emp={
    name:"anushil",
    city:"sangla"
}
for(var em in emp)
{
   console.log(em);
   console.log(emp[em]);
   
   
}
    var courses:any=["Angular","javascript",".Net"];
    courses.push("JAVA");
    courses.push(10);
    for (let i = 0; i < courses.length; i++) {
        console.log(courses[i]);
        
    }
    var std={
        fname:"anushil",
        lname:"sawant"
    }
    var{fname:Fname,lname:Lname}=std;
    console.log(Fname);
    console.log(Lname);

    function add(num1:number,num2:number) {
        return num1+num2;
        
    }
   console.log( add(10,10));

   function display(id:number,name:string,role:string) {
       console.log("ID",id);
       console.log("Name",name);
       console.log("Role",role);
       
   }
    display(1,"Anushil","Admin");
    