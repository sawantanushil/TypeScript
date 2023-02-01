type Person3={
    name:string;
}
type Email={
    email:string;
}
type Phone={
phone:number;
}
type contactDetails=
&Person3
&Email
&Phone

function contact(details:contactDetails){
    console.log(`Dear${details.name}.I hope you have recived our mail at ${details.email}.
    we will call you at${details.phone} shortly`);
    
}
let objPerson: Person3 &Email&Phone={name:"Anushil",email:"anushilsawant96@gmail.com",phone:9699000101};
console.log(objPerson);
