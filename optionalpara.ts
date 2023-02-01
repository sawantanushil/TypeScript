function display(id:number,name:string,role?:string){
    console.log('id',id);
    console.log('Name',name);
    if(role !=undefined){
    console.log('Role',role);
    }
}
display(123,'Anushil','Admin');
display(102,'Aarti');