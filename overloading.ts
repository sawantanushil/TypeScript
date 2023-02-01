function doubleMe1(x:number);
function doubleMe1(x:string);
function doubleMe1(x:string[]);

function doubleMe1(x:any){
    if(x && typeof x=== 'number'){
        console.log(x*2);
        
    }else if(x && typeof x === 'string'){
        console.log(x+ " " + x);
        
    } else if(Array.isArray(x)){
       return x.map(name=>console.log(name));
        
    }

}
doubleMe1(4);
doubleMe1("Anushil");
doubleMe1(['a']);
